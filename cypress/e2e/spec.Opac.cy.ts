describe('Opac — Flujo Completo', () => { 

    beforeEach(() => {
      cy.visit("https://opac-hogar-libros.vercel.app/");
      cy.url().should('include', 'opac-hogar-libros.vercel.app');
    });
    
      it('1- permite registro con cédula válida (9 dígitos numéricos)', () => {
        cy.contains(/Asistencia/i).click();
  
        cy.get("div[role='dialog']")
          .filter(":visible")
          .first()
          .within(() => {
            cy.get('select').first().select('Cedula nacional');
            cy.get("input[placeholder*='Sin espacios']").type('123446789');
            cy.get("input[type='text']").type('Juan Pérez');
            cy.get("input[type='radio'][value='M']").check();
            cy.get("input[type='radio'][value='0 a 6']").check();
            cy.get("button").contains(/Enviar/i).click();
          });
          cy.contains('Asistenica registrada con éxito', { timeout: 10000 }).should('exist');
      });

      it('2- permite registro con pasaporte válido (9–14 caracteres alfanum.)', () => {
        cy.contains(/Asistencia/i).click();

        cy.get("div[role='dialog']")
          .filter(":visible")
          .first()
          .within(() => {
        cy.get('select').first().select('Pasaporte u otro');
        cy.get("input[placeholder*='Digit']").type('A1B2C3D4E');
        cy.get("input[name='name']").type('Ana Gómez');
        cy.get("input[type='radio'][value='F']").check();
        cy.get("input[type='radio'][value='6 a 12']").check();
        cy.get("button").contains(/Enviar/i).click();
      });
    
        cy.contains('Asistenica registrada con éxito', { timeout: 10000 }).should('exist');

      });

        it('3- no permite registro con cédula o pasaporte ya existente', () => {
        cy.contains(/Asistencia/i).click();
  
        cy.get("div[role='dialog']")
          .filter(":visible")
          .first()
          .within(() => {
            cy.get('select').first().select('Cedula nacional');
            cy.get("input[placeholder*='Sin espacios']").type('123446789');
            cy.get("input[type='text']").type('Juan Pérez');
            cy.get("input[type='radio'][value='M']").check();
            cy.get("input[type='radio'][value='0 a 6']").check();
            cy.get("button").contains(/Enviar/i).click();
          });
          cy.contains('Asistenica registrada con éxito', { timeout: 10000 }).should('not.exist');
      });

    it('4- permite seleccionar un equipo, registrar préstamo y refleja estado "En uso"', () => {
        cy.contains('Equipo de cómputo').click();
        cy.url().should('include', '/Equipo-computo');
    
        cy.get('main')
          .find('div[title^="PC"]')
          .should('have.length.greaterThan', 0);
    
        cy.get('div[title^="PC"]')
          .first()
          .click(); 
    
        cy.contains('button', 'En Uso').click();
    
          cy.get('input[placeholder="Número de cédula sin guiones ni espacios"]').type('123456789');
          cy.get('input[placeholder^="Introduzca"]').type('Usuario Prueba');
          cy.contains('button', 'Confirmar').click();
    
            cy.get('div[title^="PC"]')
          .first()
          .should('have.class', 'text-red-500');

          cy.contains('Éxito, equipo reservado correctamente', { timeout: 10000 }).should('exist');
      });

      it('5- impide volver a prestar un equipo ya en uso y permite finalizar préstamo', () => {
        cy.contains('Equipo de cómputo').click();
    
        cy.get('div[title^="PC"].text-red-500')
          .first()
          .click();
    
        cy.contains('button', 'En Uso').should('not.exist');
        cy.contains('button', 'Finalizar uso').should('be.visible').click();
    
        cy.get('div[title^="PC"]')
          .first()
          .should('have.class', 'text-green-500');

          cy.contains('Éxito, el equipo está nuevamente disponible', { timeout: 10000 }).should('exist');

      });

    it('6- muestra libros con título, autor, año y disponibilidad y permite filtrar', () => {
        cy.contains('Libros').click();
        cy.url().should('include', '/Libros');
    
        cy.get('main')
          .find('figure')
          .should('have.length.greaterThan', 0);
    
        cy.get('figure')
          .first()
          .within(() => {
            cy.contains(/^Autor:/).should('be.visible');
            cy.contains(/^Titulo:/).should('be.visible');
            cy.contains(/^Año de publicación:/).should('be.visible');
            cy.contains(/^Disponibilidad:/).should('be.visible');
          });
    
        cy.contains('label', 'Título').parent().find('input').type('Psicología y pedagogía');
        cy.contains('figure', 'Titulo: Psicología y pedagogía').should('be.visible');
    
        cy.contains('button', 'Borrar filtros').click();
        cy.get('figure').should('have.length.greaterThan', 1);
    
        cy.contains('label', 'Autor').parent().find('input').type('García Márquez');
        cy.contains('figure', 'Autor: García Márquez').should('be.visible');
    
        cy.contains('button', 'Borrar filtros').click();
        cy.contains('label', 'Año de publicación').parent().find('input').type('2020');
        cy.contains('figure', 'Año de publicación: 2020').should('be.visible');
      });

  });