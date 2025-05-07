import {email, password} from "../e2e/Credenciales"


describe('Gestión de historial de donaciones', () => {
  beforeEach(() => {
    cy.session('session-history', () => {
      cy.visit('/');
      cy.contains('Inicia sesión o regístrate ahora.').click();
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.contains('button', 'Iniciar Sesión').click();
      cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
    });

    cy.visit('/HogarDeLibros/Donaciones/Historial');
    cy.url().should('include', '/HogarDeLibros/Donaciones/Historial');
  });

  it('Permitir hacer clic sobre un registro del historial', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.wrap(rows).first().click({ force: true });
        cy.wait(1000);
        cy.contains('button', 'Regresar').click({ force: true });
      }
    });
    cy.wait(3000);
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
