
describe("Flujo de Registro e Inicio de sesion", () => {
  const getRandomId = () => Math.floor(100000000 + Math.random() * 900000000).toString();
  const id = getRandomId();
  const dateStr = new Date().toISOString().split("T")[0];
  const name = `CyAdmin${dateStr}`;
  const lastName = "Cy";
  const email = `cyadmin_${Date.now()}@test.com`;
  const password = "CypressAdmin";

  beforeEach(() => {
    cy.visit("/");
    cy.contains("Inicia sesión o regístrate ahora.").click();
  });

  it('Accesibilidad Solicitud de cambio de contraseña y boton regresar', () => {
      cy.contains('¿Olvidó su contraseña?').click()
      cy.contains('Recuperar Contraseña')
      cy.contains('Cancelar').click()
      cy.contains('Regresar').click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  
  it("Registro de usuario", () => {
    cy.contains("Regístrate aquí.").click();
    cy.get("#IDType").select("number");
    cy.get("#IDNumber").type(id);
    cy.get("#Name").type(name);
    cy.get("#LastName").type(lastName);
    cy.get("#BirthDate").type("1995-05-20");
    cy.get("#Gender").select("Hombre");
    cy.get("#Province").select("Guanacaste");
    cy.get("#District").select("Nicoya");
    cy.get("#Address").type("100 metros norte de la iglesia");
    cy.get("#PhoneNumber").type("88888888");
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("#repeatPassword").type(password);
    cy.get("#AcceptTermsAndConditions").check();
    cy.contains("Confirmar").click();
    cy.contains("Registro exitoso").should("exist");
  });


  const user = 'cypressAdmin@test.com'
  const userName = 'CyAdmin2025-04-26'

  it('Loggeo exitoso', () => {
    cy.get("#email").type(user);
    cy.get("#password").type(password);
    cy.contains("button", "Iniciar Sesión").click();
    cy.contains(`Éxito al iniciar sesión bienvenido ${userName}.`)
    cy.url().should('eq', `${Cypress.config().baseUrl}HogarDeLibros`);
  });


});
