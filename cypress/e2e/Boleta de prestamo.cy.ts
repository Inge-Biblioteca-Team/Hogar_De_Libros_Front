describe('Pruebas boleta de prestamo', () => {
  
  
  const email = 'keirinobando@gmail.com';
  const password = 'Keirin2602';
  
beforeEach(() => {
  cy.session('session-salas', () => {
    cy.visit('/');
    cy.contains('Inicia sesión o regístrate ahora.').click();
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.contains('button', 'Iniciar Sesión').click();
    cy.url({ timeout: 10000 }).should('not.include', '/IniciarSesion');
  });
  
  cy.visit('/HogarDeLibros/Historial/Libros');
  cy.url().should('include', '/HogarDeLibros/Historial/Libros');
});

it('Debe permitir seleccionar un libro aleatorio y hacer clic en "Guardar copia"', () => {
  cy.get('table tbody tr') 
  .its('length') 
  .then((length) => {
      const randomRowIndex = Math.floor(Math.random() * length);
      cy.get('table tbody tr')
        .eq(randomRowIndex) 
        .click(); 
    });
    
    cy.contains('Guardar copia').click(); 

  });

})