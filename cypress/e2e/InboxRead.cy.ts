import {email, password} from "../e2e/Credenciales"


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
  
  describe('Validación de la ventana de Leídos', () => {
  
  beforeEach(() => {
    cy.contains('Leídos').click();
    cy.get('table').should('exist');
  });

  it('Debe mostrar los mensajes leídos', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length === 0) {
        cy.contains('No hay mensajes leídos').should('exist');
      } else {
        cy.wrap(rows).first().within(() => {
          cy.get('td').eq(2).invoke('text').should('not.be.empty');
        });
      }
    });
  });

  it('Permitir ver la informacion completa del primer mensaje leído', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
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

  it('Permitir mover el primer mensaje a la papelera', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.wrap(rows)
          .first()
          .within(() => {
            cy.get('button[title="Mover a papelera"]').click({ force: true });
          });

        cy.wait(1000);
        cy.get('tbody > tr').should('have.length.lessThan', rows.length);
      }
    });
  });

  it('Debe permitir seleccionar todos los mensajes', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.get('button[title="Seleccionar todos"]').click({ force: true });
        cy.get('tbody input[type="checkbox"]').each(($checkbox) => {
          cy.wrap($checkbox).should('be.checked');
        });
        
        cy.wait(1000);
      }
    });
  });

});
});
