

describe('Gestión de usuarios — Flujo Completo', () => { 
    
    function goToLastPage(itemIdentifier: string) {
        cy.get('body').then($body => {
          const found = Array.from($body.find('table tbody tr')).some(tr =>
            (tr as HTMLElement).innerText.includes(itemIdentifier)
          );
          if (found) return;
          cy.contains('Siguiente')
            .filter(':visible')
            .then($btn => {
              if (!$btn.prop('disabled')) {
                cy.wrap($btn).click();
                goToLastPage(itemIdentifier);
              }
            });
        });
      }
    const userToView = 'JONATHAN AGUILAR FONSECA';
    

    const email = "naza18@gmail.com";
    const pass  = "Naza1804";
  
    beforeEach(() => {
      cy.session("users-session", () => {
        cy.visit("/");
        cy.contains("Inicia sesión o regístrate ahora.").click();
        cy.get("#email").type(email);
        cy.get("#password").type(pass);
        cy.contains("button", "Iniciar Sesión").click();
        cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
      });
  
      cy.visit("/HogarDeLibros/Gestion_Usuarios");
      cy.url().should("include", "/HogarDeLibros/Gestion_Usuarios");
    });
  
    it('filtra la tabla por cédula', () => {
      cy.get('input[placeholder="Cédula"]')
      .clear()
      .type('503090276');
      cy.wait(500);
      cy.get('table tbody tr')
        .each($row =>
          cy.wrap($row).should('contain.text', '503090276')
        );
    });
  
    it('filtra la tabla por nombre', () => {
      cy.get('input[placeholder="Nombre"]')
      .clear()
      .type('SAMUEL');
      cy.wait(500);
      cy.get('table tbody tr')
        .each($row =>
          cy.wrap($row).should('contain.text', 'SAMUEL')
        );
    });
  
    it('filtra la tabla por tipo de usuario', () => {
      cy.contains('label', /Tipo de usuario/i)
        .parent()
        .find('select')
        .select('Usuario externo');
      cy.wait(500);
      cy.get("table tbody tr")
        .first()
        .should("have.length", 1)
        .contains("Usuario externo");

    });

    it('filtra la tabla por año de registro', () => {
        cy.get('input[placeholder="Año de registro"]')
        .clear()
        .type('2024');
        cy.wait(500);
        cy.get('table tbody tr')
          .each($row =>
            cy.wrap($row).should('contain.text', '2024')
          );
      });
  
    it('muestra el modal de información de un usuario existente', () => {
      cy.contains('table tbody tr', userToView)
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Ver información"]')
          .should("be.visible")
          .click();
      });
  
      cy.get('div[role="dialog"]')
          .filter(":visible")
          .first()
          .within(() => {
            cy.contains(userToView).should("be.visible");
          });
    });
  
    it('edita un usuario existente', () => {
      // cy.wait(500);
      // goToLastPage(editedInsert.originalDescription);
        cy.contains("table tbody tr", 'Admin Admin')
          .filter(":visible")
          .within(() => {
            cy.get("button")
              .filter(":visible")
              .eq(1)
              .click();
          });
  
          cy.contains("h3", "Editar información del usuario")
          .scrollIntoView()
          .should("be.visible");
        cy.get('div[role="dialog"]')
          .filter(":visible")
          .first()
          .within(() => {
            cy.get('input#telefono')
              .clear()
              .type('12345');
              cy.get('button[type="submit"]').click();
          });
      cy.get('div[role="dialog"]')
      .filter(':visible')
      .should("not.exist");
  
      cy.contains("table tbody tr", 'Admin Admin')
      .should("exist")
      .and("contain.text", 'Admin Admin');
    });
  
    it('deshabilita un usuario y verifica estado Inactivo', () => {
      cy.wait(500);
      goToLastPage('Sam Lara');
      cy.contains("table tbody tr", 'Sam Lara')
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Deshabilitar"]', { timeout: 10000 })
          .should("be.visible")
          .click();
      });
  
      cy.get('div[role="dialog"]')
          .filter(":visible")
          .within(() => {
            cy.contains("button", "Confirmar").should('be.enabled').click();
          });
  
      cy.wait(500);
      cy.contains('table tbody tr', 'Sam Lara')
      .scrollIntoView()
        .within(() =>
          cy.contains('Inactivo', { timeout: 10000 }).should('be.visible')
        );
    });
  
  });