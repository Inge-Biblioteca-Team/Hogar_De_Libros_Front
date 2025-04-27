  describe('Amigos Pendiente_Respuesta — Flujo Completo', () => { 
    
    const friendToView = 'Invitados Grupo1';
    const friendToDisable = 'Invitados Grupo04';
    const friendToAccept = 'Invitados Grupo3';
  
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
  
      cy.visit("/HogarDeLibros/Amigos/Pendiente_Respuesta");
      cy.url().should("include", "/HogarDeLibros/Amigos/Pendiente_Respuesta");
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
      .type('p');
      cy.wait(500);
      cy.get('table tbody tr')
        .each($row =>
          cy.wrap($row).should('contain.text','a')
        );
    });
  
    it('muestra el modal de información de un amigo pendiente', () => {
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
  
    it('Deniega una solicitud de un amigo pendiente', () => {
      cy.contains("table tbody tr", friendToDisable)
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Denegar solicitud"]')
          .should("be.visible")
          .click();
      });
  
      cy.get('div[role="dialog"]')
          .filter(":visible")
          .within(() => {
          cy.get('textarea[placeholder="Motivo de rechazo"]')
          .type('El motivo de prueba para denegar');
  
            cy.contains("button", "Confirmar").click();
          });
  
      cy.wait(500);
      cy.get('table tbody')
      .should('not.contain', friendToDisable);
    });
  
    it('Acepta una solicitud de un amigo pendiente', () => {
      cy.contains("table tbody tr", friendToAccept)
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Aceptar solicitud"]')
          .should("be.visible")
          .click();
      });
  
      cy.get('div[role="dialog"]')
          .filter(":visible")
          .within(() => {
            cy.contains("button", "Confirmar").click();
          });
  
      cy.wait(500);
      cy.get('table tbody')
      .should('not.contain', friendToAccept);
    });
  });