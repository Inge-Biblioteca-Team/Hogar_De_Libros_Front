const email = 'keirinobando@gmail.com';
const password = 'Keirin2602';

describe('Flujo completo de gestión de mensajes: Recibidos, Leídos, Papelera', () => {
  beforeEach(() => {
    cy.session('session-inbox', () => {
      cy.visit('/');
      cy.contains('Inicia sesión o regístrate ahora.').click();
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.contains('button', 'Iniciar Sesión').click();
      cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
    });

    cy.visit('/HogarDeLibros/Mensajeria');
    cy.url().should('include', '/HogarDeLibros/Mensajeria');
  });

  describe('Validación de la ventana de Recibidos', () => {

    beforeEach(() => {
      cy.contains('Recibidos').click(); 
      cy.get('table').should('exist');  
    });
  
    it('Debe mostrar mensajes y verificar el primer mensaje', () => {
      cy.get('tbody > tr').then((rows) => {
        if (rows.length === 0) {
          cy.contains('No hay mensajes recibidos').should('exist');
        } else {
          cy.wrap(rows)
            .first() 
            .within(() => {
              cy.get('button[title="Ver"]').click({ force: true });
            });
  
          cy.wait(1000);
          cy.get('button').contains('Cerrar').click({ force: true });
        }
      });
    });
  
    it('Marcar como leído el primer mensaje', () => {
      cy.get('tbody > tr').then((rows) => {
        if (rows.length > 0) {
          cy.wrap(rows)
            .first() 
            .within(() => {
              cy.get('button[title="Marcar como leído"]').click({ force: true });
            });
  
          cy.wait(1000);  
  
          cy.get('tbody > tr').should('have.length.lessThan', rows.length);
        }
      });
    });
  
    it('Mover el primer mensaje a la papelera', () => {
      cy.get('tbody > tr').then((rows) => {
        if (rows.length > 0) {
          cy.wrap(rows)
            .first() 
            .within(() => {
              cy.get('button[title="Mover a papelera"]').click({ force: true });
            });
  
          cy.wait(1000);  
        }
      });
    });
  
    it('Seleccionar todos los mensajes', () => {
      cy.get('tbody > tr').then((rows) => {
        if (rows.length > 0) {
          cy.get('button[title="Seleccionar todos"]').click({ force: true });
          cy.get('tbody input[type="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).should('be.checked');
          });
        }
      });
    });
    
  });
  

});
