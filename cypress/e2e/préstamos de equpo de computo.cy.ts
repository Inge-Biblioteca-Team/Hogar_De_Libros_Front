describe('Prestamo de equipo de computo', ()=>{
    const email = 'keirinobando@gmail.com';
    const password = 'Keirin2602';
const maquinaNumero = '2';

beforeEach(() => {
cy.session('session-salas', () => {
cy.visit('/');
cy.contains('Inicia sesión o regístrate ahora.').click();
cy.get('#email').type(email);
cy.get('#password').type(password);
cy.contains('button', 'Iniciar Sesión').click();
cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
});

cy.visit('/HogarDeLibros/Prestamos_Circulacion/Prestamo_Computo');

cy.url().should('include', '/HogarDeLibros/Prestamos_Circulacion/Prestamo_Computo');

});

it('Realiza el préstamo de la máquina 2', () => {
    cy.contains('PC-' + maquinaNumero)
      .parent() 
      .within(() => {
        cy.get('[title="PC' + maquinaNumero + '"]').click({ force: true });
      });

    cy.contains('button', 'En Uso').click();

    
    cy.get('input[placeholder="Numero de cédula sin guiones ni espacios"]').type('504370364');
    cy.wait(1000);
    cy.get('input[placeholder="Tu nombre completo"]').type('Keirin');


    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    
  });
  
  it('Finalizar el prestamo de la maquina 2', ()=>{
    cy.contains('PC-' + maquinaNumero)
      .parent()
      .within(() => {
        cy.get('[title="PC' + maquinaNumero + '"]').click({ force: true });
      });

   
    cy.contains('button', 'Finalizar uso', { timeout: 10000 }).click();
    cy.wait(2000);
  });

  it('Poner en mantenimiento la máquina 2', () => {
    cy.contains('PC-' + maquinaNumero)
      .parent() 
      .within(() => {
        cy.get('[title="PC' + maquinaNumero + '"]').click({ force: true });
      });

    cy.contains('button', 'Mantenimiento', { timeout: 5000 }).click();

    
    cy.get('input[type="text"]').eq(0).type('Keirin Técnico');
    cy.get('input[type="text"]').eq(1).type('Sala 1 - Biblioteca');


    cy.get('button[type="submit"]').click();

    cy.wait(2000);
  });
  it('Teminar el mantenimiento de la maquina 2', ()=>{
    cy.contains('PC-' + maquinaNumero)
      .parent()
      .within(() => {
        cy.get('[title="PC' + maquinaNumero + '"]').click({ force: true });
      });

   
    cy.contains('button', 'Terminar Mantenimiento', { timeout: 10000 }).click();
    cy.wait(2000);
  });
});