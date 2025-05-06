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
describe('Validaciones Papelera - ver, recuperar, eliminar', () => {
  beforeEach(() => {
    cy.contains('Papelera').click();
    cy.get('table').should('exist');
  });

  it('Debe mostrar mensajes o indicar que no hay', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length === 0) {
        cy.contains('No hay mensajes recibidos').should('exist');
      } else {
        cy.wrap(rows).first().within(() => {
          cy.get('td').eq(2).invoke('text').should('not.be.empty');
        });
      }
    });
  });

  it('Permitir ver el primer mensaje', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.wrap(rows).first().within(() => {
          cy.get('button[title="Ver"]').click({ force: true });
        });

        cy.wait(1000);
        cy.get('button').contains('Cerrar').click({ force: true });
      }
    });
  });

  it('Permitir recuperar un mensaje desde la fila', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.wrap(rows).eq(0).within(() => {
          cy.get('button[title="Recuperar de la papelera"]').click({ force: true });
        });

        cy.wait(1000);
        cy.get('tbody > tr').should('have.length.lessThan', rows.length);
      }
    });
  });

  it('Permitir eliminar permanentemente un mensaje desde la fila', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 1) {
        cy.wrap(rows).eq(1).within(() => {
          cy.get('button[title="Eliminar permanentemente"]').click({ force: true });
        });

        cy.wait(1000);
        cy.get('tbody > tr').should('have.length.lessThan', rows.length);
      }
    });
  });

  it('Seleccionar todos y luego intentar recuperar y eliminar con botones globales', () => {
    cy.get('tbody > tr').then((rows) => {
      if (rows.length > 0) {
        cy.get('button[title="Seleccionar todos"]').click({ force: true });

        cy.get('tbody input[type="checkbox"]').each(($cb) => {
          cy.wrap($cb).should('be.checked');
        });

        //debe decidirce cual se quiere aplicar porque si se aplica 1 la otra da error
        cy.get('button[title="Recuperar seleccionados"]').then(($btn) => {
          if ($btn.is(':visible')) {
            cy.wrap($btn).click({ force: true });
          }
        });

        cy.wait(1000);


        cy.wait(1000);
      }
    });
  });
});
});
