import {email, password} from "../e2e/Credenciales"

describe('Pruebas de salas', ()=>{


beforeEach(() => {
  cy.session('session-salas', () => {
    cy.visit('/');
    cy.contains('Inicia sesión o regístrate ahora.').click();
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.contains('button', 'Iniciar Sesión').click();
    cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
  });

  cy.visit('/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Salas');
  cy.url().should('include', '/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Salas');
});

it('Selecciona una solicitud por número de sala y hace clic en Ver Información', () => {
  const salaNumero = 3;

  cy.contains('table tbody tr', salaNumero)
    .within(() => {
      cy.get('button[title="Ver información"]')
        .should('be.visible')
        .click();
    });

    cy.get('div[role="dialog"]')
    .should('be.visible');

    cy.contains('button', 'Regresar').click();
});

it('Selecciona una solicitud por número de sala, la deniega, y escribe una razón', () => {
  const salaNumero = 8; 
  cy.contains('table tbody tr', salaNumero)
    .within(() => {
      cy.get('button[title="Denegar solicitud"]')
        .should('be.visible')
        .click();
    });
    cy.get('textarea').type('La solicitud fue denegada debido a falta de recursos.');

    cy.contains('button', 'Confirmar').click();
});

it('Selecciona una solicitud por número de sala y la aprueba', () => {
  const salaNumero = 8; 
  cy.contains('table tbody tr', salaNumero)
    .within(() => {
      cy.get('button[title="Aceptar solicitud"]')
        .should('be.visible')
        .click();
    });
    cy.contains('button', 'Confirmar').click();

});

});