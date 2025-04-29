
describe('Cursos — Flujo Completo', () => { 
    
    const courseToView = 'Lectura juvenil';
    const courseToDisable = 'Inge 3 Tarde';

    const newCourse = {
        name: 'Raymond 6',
        instructor: 'Prof. Raymond 6',
        location: 'Sala de Raymond 6',
        duration: '3',
        capacity: '20',
        materials: 'Materiales de prueba nuevo que usa Raymond',
      };
      const editCourse = {
        name: 'Raymond Editado 6',
        instructor: 'Prof. Raymond Editado 6',
      };
  
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
  
      cy.visit("/HogarDeLibros/Servicios/Cursos");
      cy.url().should("include", "/HogarDeLibros/Servicios/Cursos");
    });
  
    it('filtra la tabla por nombre', () => {
        cy.get('input[placeholder="Nombre"]')
        .clear()
        .type('Lectura juvenil');
      cy.wait(500);
      cy.get('table tbody tr')
      .first()
      .contains("Lectura juvenil");
    });

    it('filtra la tabla por estado', () => {
        cy.contains('label', /Estado/i)
          .parent()
          .find('select')
          .select('Pasados');
        cy.wait(500);
        cy.get('table tbody tr')
        .first()
        .contains("Cancelado");
      });
  
    it('muestra el modal de información de un curso', () => {
        cy.contains('table tbody tr', courseToView)
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
              cy.contains(courseToView).should("be.visible");
            });
      });

      it('Crear nuevo curso', () => {
        cy.contains(/Añadir curso/i).click();
        cy.contains('Crear nuevo curso');
    
        const tomorrow = new Date(Date.now() + 24*60*60*1000)
          .toISOString().slice(0,10);
        const nextWeek = new Date(Date.now() + 8*24*60*60*1000)
          .toISOString().slice(0,10);
    
        cy.get("div[role='dialog']")
        .filter(":visible")
        .first()
        .within(() => {
        cy.get('input#courseName').type(newCourse.name);
        cy.get('select#courseType').select(1);     
        cy.get('input#instructor').type(newCourse.instructor);
        cy.get('input#location').type(newCourse.location);
        cy.get('select#targetAge').select(1);
        cy.get('select#program').select(1);
        cy.get('input#startDate').type(tomorrow);
        cy.get('input#courseTime').type('10:00');
        cy.get('input[name="endDate"]').type(nextWeek);
        cy.get('input[name="duration"]').type(newCourse.duration);
        cy.get('input#capacity').type(newCourse.capacity);
        cy.get('input#material').type(newCourse.materials);
        cy.contains('button', 'Confirmar').click();
        });

        cy.get('input[placeholder="Nombre"]')
        .clear()
        .type(newCourse.name);
        cy.wait(500);
        cy.contains(newCourse.name, { timeout: 10000 })
        .should("be.visible");
      });

      it('Editar un curso existente', () => {
        cy.get('input[placeholder="Nombre"]')
        .clear()
        .type(newCourse.name);
        cy.wait(500);
        cy.contains('table tbody tr', newCourse.name)
        .filter(":visible")
        .within(() => {
          cy.get("button").filter(":visible").eq(1).click();
        });
    
        cy.contains('Editar curso');
    
        cy.get('input#courseName')
          .clear()
          .type(editCourse.name);
        cy.get('input#instructor')
          .clear()
          .type(editCourse.instructor);
    
        cy.contains('button', 'Confirmar').click();

        cy.get('input[placeholder="Nombre"]')
        .clear()
        .type(editCourse.name);
        cy.wait(500);
        cy.contains("table tbody tr", editCourse.name)
      .should("exist")
      .and("contain.text", editCourse.instructor);
      });

      it("deshabilita un curso y verifica estado Cerrado", () => {
        cy.get('input[placeholder="Nombre"]')
        .clear()
        .type(courseToDisable);
        cy.wait(500);
        cy.contains("table tbody tr", courseToDisable)
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

          cy.get('input[placeholder="Nombre"]')
        .clear()
        .type(courseToDisable);
        cy.wait(500);
        cy.contains("table tbody tr", courseToDisable).within(() =>
          cy.contains("Cancelado").should("be.visible")
        );
      });

});