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

    cy.visit('/HogarDeLibros/Donaciones/Pendientes_Respuesta');
    cy.url().should('include', '/HogarDeLibros/Donaciones/Pendientes_Respuesta');
  });
  

  it('Permitir ver la informacion de la primer solicitud', () => {

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

  it('Permitir denegar solicitud y darle una razón', () => {

    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.wrap(rows).first().within(() => {
          cy.get('button[title="Denegar solicitud"]').click({ force: true });
        });

        cy.wait(500);
        cy.get('textarea').type('La propuesta no cumple con los criterios.');
        cy.get('button').contains('Confirmar').click({ force: true });
      }
    });
    cy.wait(4000);
  });

  it('Permitir aceptar solicitud', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.wrap(rows).first().within(() => {
          cy.get('button[title="Aceptar solicitud"]').click({ force: true });
        });

        cy.wait(500);
        cy.get('button').contains('Confirmar').click({ force: true });
      }
    });
    cy.wait(5000);
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
