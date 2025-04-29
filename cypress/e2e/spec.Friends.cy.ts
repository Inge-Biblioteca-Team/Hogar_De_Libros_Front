


describe('Amigos Lista Amigos — Flujo Completo', () => { 
  
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
  const friendToView = 'Keirin Obando';
    const friendToDisable = 'Luis Fernandez Rosales';
  
    const email = "naza18@gmail.com";
    const pass  = "Naza1804";
  
    beforeEach(() => {
      cy.session("friends-session", () => {
        cy.visit("/");
        cy.contains("Inicia sesión o regístrate ahora.").click();
        cy.get("#email").type(email);
        cy.get("#password").type(pass);
        cy.contains("button", "Iniciar Sesión").click();
        cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
      });
  
      cy.visit("/HogarDeLibros/Amigos/Lista_Amigos");
      cy.url().should("include", "/HogarDeLibros/Amigos/Lista_Amigos");
    });
  
    it('filtra la tabla por categoría principal', () => {
      cy.contains('label', /Categoría principal/i)
        .parent()
        .find('select')
        .select('Lectura y Escritura');
      cy.wait(500);
      cy.get('table tbody tr')
      .first()
      .should("have.length", 1)
      .contains("Lectura y Escritura");
    });
  
    it('filtra la tabla por Sub categoría', () => {
      cy.contains('label', /Sub categoría/i)
        .parent()
        .find('select')
        .select('Visitas guiadas');
      cy.wait(500);
      cy.get('table tbody tr')
      .first()
      .should("have.length", 1)
      .contains("Visitas guiadas");
    });
  
    it('filtra la tabla por experiencia', () => {
      cy.get('input[placeholder="Experiencia"]')
      .clear()
      .type('a');
      cy.wait(500);
      cy.get('table tbody tr')
        .each($row =>
          cy.wrap($row).should('contain.text','a')
        );
    });
  
    it('muestra el modal de información de un amigo en lista', () => {
      cy.contains('table tbody tr', friendToView)
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
            cy.contains(friendToView).should("be.visible");
          });
    });
  
    it('edita un amigo existente', () => {
      cy.wait(500);
      goToLastPage('Luis Fernandez Rosales');
      cy.contains("table tbody tr", 'Luis Fernandez Rosales')
          .filter(":visible")
          .within(() => {
            cy.get("button")
              .filter(":visible")
              .eq(1)
              .click();
          });
  
          cy.contains("h3", "Editar información de amigo")
          .scrollIntoView()
          .should("be.visible");
        cy.get('div[role="dialog"]')
          .filter(":visible")
          .first()
          .within(() => {
            cy.contains("label", "Nombre completo")
            .parent()
            .find("input")
            .clear()
            .type("Luis Fernandez Rosales editado");
            cy.get('button[type="submit"]').click();
          });
  
          cy.get('div[role="dialog"]')
          .filter(':visible')
          .should("not.exist");
  
          cy.contains("table tbody tr", 'Luis Fernandez Rosales editado')
          .should("exist")
          .and("contain.text", 'Luis Fernandez Rosales editado');
    });
  
  
    it('Deshabilita un amigo de la lista de amigos', () => {
      cy.wait(500);
      goToLastPage(friendToDisable);
      cy.contains("table tbody tr", friendToDisable)
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Deshabilitar"]')
          .should("be.visible")
          .click();
      });
  
      cy.get('div[role="dialog"]')
          .filter(":visible")
          .within(() => {
          cy.get('textarea[placeholder="Motivo de la baja"]')
          .type('El motivo de prueba para dar de baja');
  
            cy.contains("button", "Confirmar").click();
          });
  
      cy.wait(500);
      goToLastPage(friendToDisable);
      cy.contains('table tbody tr', friendToDisable)
        .within(() =>
          cy.contains('Baja').should('be.visible')
        );
    });
  
  });