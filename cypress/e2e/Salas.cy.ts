import {email, password} from "../e2e/Credenciales"

describe('Módulo de Salas - Hogar de Libros', () => {
  const nuevaSala = {
    name: 'Mostrar en clases',
    capacity: 35,
    roomNumber: '60',
    observations: 'Sala creada para pruebas automáticas.',
    area: 45,
    location: 'SEgundo piso',
    image: [],
  };

  const salaEditada = {
    nameOriginal: 'Sala de Pruebas Editada',
    nameNuevo: 'Sala editada',
    capacityNuevo: 34,
    roomNumberNuevo: '18',
    observationsNuevo: 'Esta sala fue editada',
    areaNuevo: 37,
    locationNuevo: 'Primer piso',
    imageNuevo: [],
  };

  beforeEach(() => {
    cy.session('session-salas', () => {
      cy.visit('/');
      cy.contains('Inicia sesión o regístrate ahora.').click();
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.contains('button', 'Iniciar Sesión').click();
      cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
    });

    cy.visit('/HogarDeLibros/Recursos/Salas');
    cy.url().should('include', '/HogarDeLibros/Recursos/Salas');
  });


  it('Crear una nueva sala', () => {
    cy.contains('Añadir sala').click();

    cy.get('div[role="dialog"]')
      .filter(':visible')
      .within(() => {
        cy.get('input#name').type(nuevaSala.name);
        cy.get('input#capacity').type(nuevaSala.capacity.toString());
        cy.get('input#roomNumber').type(nuevaSala.roomNumber);
        cy.get('input#observations').debug().type(nuevaSala.observations);
        cy.get('input#area').type(nuevaSala.area.toString());
        cy.get('input#location').type(nuevaSala.location);

        cy.get('div.w-full.h-full.flex.items-center.justify-center.cursor-pointer').click();
      });

    describe('Filtrar Salas', () => {
      it('filtra la tabla por nombre de sala', () => {
        cy.get('input[placeholder="Nombre"]').clear().type('auditorio');
        cy.wait(500);
      });

      it('filtra las cards por estado Disponible', () => {
        cy.get('input[placeholder="Nombre"]').clear();
        cy.get('select').eq(0).select('D');

        cy.wait(1000);

      });
      it('filtra las cards por estado Mantenimiento', () => {
        cy.get('select').eq(0).select('');
        cy.get('select').eq(0).select('M');

        cy.wait(1000);

      });

      it('filtra las cards por estado Clusurado', () => {
        cy.get('select').eq(0).select('');
        cy.get('select').eq(0).select('C');

        cy.wait(1000);

      });


      it('filtra la tabla por número de sala', () => {
        cy.get('input[placeholder="Nombre"]').clear();
        cy.get('select').eq(0).select(''); 
        cy.get('select').eq(1).find('option').then(($options) => {
          const optionsArray = Array.from($options).filter(option => option.value !== "");
          const randomIndex = Math.floor(Math.random() * optionsArray.length);
          const randomValue = optionsArray[randomIndex].value;

          cy.get('select').eq(1).select(randomValue);
          cy.wait(500);

        });
      });
    });

    cy.get('div[role="dialog"]')
      .filter(':visible')
      .within(() => {
        cy.get('div.flex.flex-wrap') 
          .find('img')
          .should('have.length.greaterThan', 0)
          .then(($images) => {
            const randomIndex = Math.floor(Math.random() * $images.length);
            cy.wrap($images[randomIndex]).click();
          });

        cy.get('button[type="submit"]').click();
      });
    cy.get('div[role="dialog"]', { timeout: 10000 }).should('not.not.be.visible');

    cy.scrollTo('bottom');
    cy.contains('table tbody tr', nuevaSala.name, { timeout: 10000 })
      .should('be.visible');
  });

  it('Seleccionar y editar una sala específica por nombre', () => {
    cy.contains('Sala de libros')
      .parents('div') 
      .first()
      .scrollIntoView()
      .within(() => {
    cy.get('button[title="Editar información de la Sala"]').click();
    });
  
    cy.get('div[role="dialog"]', { timeout: 5000 }).should('be.visible');
  
  
    cy.get('input#name').clear().type(salaEditada.nameNuevo);
    cy.get('input#roomNumber').clear().type(salaEditada.roomNumberNuevo);
    cy.get('input#area').clear().type(`${salaEditada.areaNuevo}`);
    cy.get('input#capacity').clear().type(`${salaEditada.capacityNuevo}`);
    cy.get('input#location').clear().type(salaEditada.locationNuevo);
    cy.get('input#observations').clear().type(salaEditada.observationsNuevo);

  cy.get('button[type="submit"]').click();

  });

  it('sala ponerla en mantenimiento', () => {
    cy.contains('Auditorio')
      .parents('div')
      .first()
      .scrollIntoView()
      .within(() => {
        cy.get('button[title="Deshabilitar Sala"]').click();
      });

  
    cy.get('div[class="flex flex-col"]') 
      .should('be.visible') 
      .within(() => {
        cy.contains('M').click();
      });

  });

  describe('Filtrar Salas', () => {
    it('filtra la tabla por nombre de sala', () => {
      cy.get('input[placeholder="Nombre"]').clear().type('auditorio'); 
      cy.wait(500);
    });
  
    it('filtra las cards por estado Disponible', () => {
      cy.get('input[placeholder="Nombre"]').clear(); 
      cy.get('select').eq(0).select('D');
    
      cy.wait(1000); 
     
    });
    it('filtra las cards por estado Mantenimiento', () => {
      cy.get('select').eq(0).select(''); 
      cy.get('select').eq(0).select('M');
    
      cy.wait(1000); 
      cy.contains('M').should('exist');
    });

    it('filtra las cards por estado Clusurado', () => {
      cy.get('select').eq(0).select(''); 
      cy.get('select').eq(0).select('C');
    
      cy.wait(1000); 
     
    });
    
  
    it('filtra la tabla por número de sala', () => {
      cy.get('input[placeholder="Nombre"]').clear();
      cy.get('select').eq(0).select(''); 
      cy.get('select').eq(1).select('1');
    
      cy.wait(1000); 
    });
  });


});
