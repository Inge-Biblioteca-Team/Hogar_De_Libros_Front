const email = 'keirinobando@gmail.com';
const password = 'Keirin2602';

describe('Gestión de donaciones pendientes de recepción', () => {
  beforeEach(() => {
    cy.session('session-donaciones', () => {
      cy.visit('/');
      cy.contains('Inicia sesión o regístrate ahora.').click();
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.contains('button', 'Iniciar Sesión').click();
      cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
    });

    cy.visit('/HogarDeLibros/Donaciones/Pendiente_Recepcion');
    cy.url().should('include', '/HogarDeLibros/Donaciones/Pendiente_Recepcion');

    cy.get('select').first().select('');
    cy.get('input[type="date"]').clear();
    cy.wait(1000);
  });

  it('Permitir ver información de la primera donación', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.wrap(rows).first().within(() => {
          cy.get('button[title="Ver información"]').click({ force: true });
        });

        cy.wait(1000);
        cy.get('button').contains('Regresar').click({ force: true });
      }
    });
    cy.wait(4000);
  });

  it('Debe permitir marcar como recibida una donación con observación', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.wrap(rows).first().within(() => {
          cy.get('button[title="Recibido"]').click({ force: true });
        });

        cy.wait(500);
        cy.get('textarea').type('Está en perfectas condiciones.');
        cy.get('button').contains('Confirmar').click({ force: true });
      }
    });
    cy.wait(4000);
  });

 
  it('Aplicar filtros y mostrar al menos un resultado válido', () => {
    const categoria = 'Mobiliario';
  
    cy.get('select')
      .first()
      .then((select) => {
        const opciones = select.find('option');
        const existeCategoria = Array.from(opciones).some(
          (opt) => opt.textContent?.trim() === categoria
        );
  
        expect(existeCategoria).to.be.true;
  
        cy.wrap(select).select(categoria);
        cy.wait(2000);
        cy.get('tbody > tr').should('have.length.at.least', 1);
        cy.wrap(select).select('');
        cy.wait(2000);
      });

    const fecha = '2025-04-30';
  
    cy.get('input[type="date"]').then((input) => {
      cy.wrap(input).clear().type(fecha);
      cy.wait(2000);
      cy.get('tbody > tr').should('have.length.at.least', 1);
      cy.wrap(input).clear();
      cy.wait(2000);
    });
  });
  
});
