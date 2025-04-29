
describe('Eventos — Flujo Completo', () => { 
    
    const eventToView = 'dia del conocmiento';
    const eventToDisable = 'Biblioteca Abierta';

    const newEvent = {
        location: 'Casa de Raymond',
        title: 'Raymond',
        details: 'Detalles del evento de Raymond',
        inChargePerson: 'Prof. Raymond',
    }

    const editEvent = {
        location: 'Casa de Raymond editado',
        title: 'Raymond editado',
    }

    const email = "naza18@gmail.com";
    const pass  = "Naza1804";
  
    beforeEach(() => {
      cy.session("course-session", () => {
        cy.visit("/");
        cy.contains("Inicia sesión o regístrate ahora.").click();
        cy.get("#email").type(email);
        cy.get("#password").type(pass);
        cy.contains("button", "Iniciar Sesión").click();
        cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
      });
  
      cy.visit("/HogarDeLibros/Servicios/Eventos");
      cy.url().should("include", "/HogarDeLibros/Servicios/Eventos");
    });

    it('filtra la tabla por titulo', () => {
        cy.get('input[placeholder="Título del evento"]')
        .clear()
        .type('Evento en conjunto');
      cy.wait(500);
      cy.get('table tbody tr')
      .first()
      .contains("Evento en conjunto");
    });

    it('filtra la tabla por estado', () => {
        cy.contains('label', /Estado/i)
          .parent()
          .find('select')
          .select('Cancelados');
        cy.wait(500);
        cy.get('table tbody tr')
        .first()
        .contains("Cancelado");
      });

      it('muestra el modal de información de un evento', () => {
        cy.contains('table tbody tr', eventToView)
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
              cy.contains(eventToView).should("be.visible");
            });
      });
     
      it("deshabilita un evento y verifica estado Cancelado", () => {
        cy.get('input[placeholder="Título del evento"]')
        .clear()
        .type(eventToDisable);
        cy.wait(500);
        cy.contains("table tbody tr", eventToDisable)
          .filter(":visible")
          .within(() => {
            cy.get('button[title="Deshabilitar"]')
              .should("be.visible")
              .click();
          });
    
        cy.get('div[role="dialog"]')
          .filter(":visible")
          .within(() => {
            cy.contains("button", "Confirmar").click();
          });
    
        cy.contains("table tbody tr", eventToDisable).within(() =>
          cy.contains("Cancelado").should("be.visible")
        );
      });

      it('Crear nuevo evento', () => {
        cy.contains(/Añadir evento/i).click();
        cy.contains('Añadir nuevo evento');
    
        const tomorrow = new Date(Date.now() + 24*60*60*1000)
          .toISOString().slice(0,10);
    
        cy.get("div[role='dialog']")
        .filter(":visible")
        .first()
        .within(() => {
        cy.get('input#Location').type(newEvent.location);
        cy.get('input#Title').type(newEvent.title);
        cy.get('input#Details').type(newEvent.details);
        cy.get('select#Category').select('Inducción');     
        cy.get('input#Date').type(tomorrow);
        cy.get('input#Time').type('10:00');
        cy.get('select[name="TargetAudience"]').select('Adultos');
        cy.get('input#InchargePerson').type(newEvent.inChargePerson);
        cy.contains('button', 'Confirmar').click();
        });

        cy.get('input[placeholder="Título del evento"]')
        .clear()
        .type(newEvent.title);
        cy.wait(500);
        cy.contains(newEvent.title, { timeout: 10000 })
        .should("be.visible");
      });

      it('Editar un evento existente', () => {
        cy.get('input[placeholder="Título del evento"]')
        .clear()
        .type(newEvent.title);
        cy.wait(500);
        cy.contains('table tbody tr', newEvent.title)
        .filter(":visible")
        .within(() => {
          cy.get("button").filter(":visible").eq(1).click();
        });
        
        cy.get('input#Title')
          .clear()
          .type(editEvent.title);
        cy.get('input#Location')
          .clear()
          .type(editEvent.location);
    
        cy.contains('button', 'Confirmar').click();

        cy.get('input[placeholder="Título del evento"]')
        .clear()
        .type(editEvent.title);
        cy.wait(500);
        cy.contains("table tbody tr", editEvent.title)
      .should("exist")
      .and("contain.text", editEvent.location);
      });
    });