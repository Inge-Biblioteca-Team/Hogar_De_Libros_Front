describe('Pruebas de salas', ()=>{
  const email = 'keirinobando@gmail.com';
const password = 'Keirin2602';

beforeEach(() => {
  cy.session('session-salas', () => {
    cy.visit('/');
    cy.contains('Inicia sesión o regístrate ahora.').click();
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.contains('button', 'Iniciar Sesión').click();
    cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
  });

  cy.visit('/HogarDeLibros/Prestamos_Circulacion/Reserva_Aprovadas');
  cy.url().should('include', '/HogarDeLibros/Prestamos_Circulacion/Reserva_Aprovadas');
});

it('Selecciona una solicitud y Ver Información', () => {
  const salaNumero = 8;

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

it('Selecciona una solicitud y finalizarla', () => {
  const salaNumero = 8; 
  cy.contains('table tbody tr', salaNumero)
    .within(() => {
      cy.get('button[title="Finalizar"]')
        .should('be.visible')
        .click();
    });
    cy.get('div[role="dialog"] input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('div[role="dialog"] input[type="checkbox"]').eq(1).check({ force: true });
    
    cy.get('textarea[placeholder="Especifique los daños"]').type('No, todo en orden.');
    cy.get('textarea[placeholder="Especifique el mobiliario y los daños"]').eq(0).type('No, hubo mobiliario con daños.');

    cy.get('textarea[placeholder="Especifique el mobiliario y los daños"]').eq(1).type('No, todo en orden.');

    cy.get('button[type="submit"]').click();
});


});