import {email, password} from "../e2e/Credenciales"

describe('Gestión de Equipos de Cómputo', () => {
  

  beforeEach(() => {
    cy.session('session-salas', () => {
      cy.visit('/');
      cy.contains('Inicia sesión o regístrate ahora.').click();
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.contains('button', 'Iniciar Sesión').click();
      cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
    });

    cy.visit('/HogarDeLibros/Recursos/Equipo_Computo');
    cy.url().should('include', '/HogarDeLibros/Recursos/Equipo_Computo');
  });

  it('Debe permitir crear un nuevo equipo', () => {
    cy.contains('Añadir equipo').click();
    
    cy.get('select[id="EquipamentCategory"]').select('CPU');
    cy.get('input[id="EquipamentSerial"]').type('fLY6543');
    cy.get('input[id="EquipamentBrand"]').type('Dell'); 
    cy.get('input[id="MachineNumber"]').type('3');
    cy.get('select[id="ConditionRating"]').select('4');
    cy.get('input[id="Observation"]').type('Equipo en buen estado');

    cy.get('button[type="submit"]').click();

    cy.contains('fLY6543').should('exist');
  });

  
it('Debe permitir editar la información de un equipo', () => {
  
    cy.contains('fLY6543')
    .parents('table tbody tr')
    .within(() => {
      cy.get('button[title="Editar"]').click();
    });

    cy.get('select[id="EquipamentCategory"]').select('Monitor');
    cy.get('input[id="EquipamentSerial"]').clear().type('LKS123');
    cy.get('input[id="EquipamentBrand"]').clear().type('HP');
    cy.get('input[id="MachineNumber"]').clear().type('6');
    cy.get('select[id="ConditionRating"]').select('3');
    cy.get('input[id="Observation"]').clear().type('Equipo sin parlantes');

   
    cy.get('button[type="submit"]').click();

    cy.contains('LKS123').should('exist');
  });


it('Debe permitir dar de baja un equipo con confirmación', () => {

    cy.contains('LKS123').parents('tr').within(() => {
      cy.get('button[title="Deshabilitar"]').click();
    });

    cy.contains('Está seguro de dar de baja al equipo').should('exist');
    cy.get('textarea[id="reason"]')
    .click({ force: true })
    .type('Equipo defectuoso');
    cy.get('button[type="submit"]').click();

    cy.contains('LKS123').should('exist');
  });


  

  it('Debe filtrar equipos por número de equipo', () => {
    cy.get('input[placeholder="Número de equipo"]').clear().type('1');

   
    cy.wait(1000);
    cy.contains('table tbody tr', '1').should('exist');
  });

  it('Debe permitir filtrar equipos por marca', () => {
    cy.get('input[placeholder="Marca del componente"]').clear().type('Dell');

    
    cy.wait(1000);
    cy.contains('Dell').should('exist');
  });

  it('Debe filtrar equipos por categoría', () => {
    cy.get('select').eq(0).select('Monitor');
    cy.wait(1000);


    cy.contains('table tbody tr', 'Monitor').should('exist');
  });

  it('Debe permitir filtrar equipos por estado', () => {
    cy.get('select').eq(1).select('1');
    cy.wait(1000);

    cy.contains('table tbody tr', '1').should('exist');
  });

  it('Debe permitir filtrar equipos por estado', () => {
    cy.get('select').eq(1).select('0');
    cy.wait(1000);

    cy.contains( '0').should('exist');
  });

});
