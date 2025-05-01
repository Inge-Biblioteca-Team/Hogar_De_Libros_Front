describe("Flujo de Registro e Inicio de sesion", () => {
  const getRandomId = () =>
    Math.floor(100000000 + Math.random() * 900000000).toString();
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

  it("Accesibilidad Solicitud de cambio de contraseña y boton regresar", () => {
    cy.contains("¿Olvidó su contraseña?").click();
    cy.contains("Recuperar Contraseña");
    cy.contains("Cancelar").click();
    cy.contains("Regresar").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("Registro de usuario", () => {
    cy.contains("Regístrate aquí.").click();
    cy.contains("Confirmar").click();
    cy.get('#Name').then(($input) => {
      const input = $input[0] as HTMLInputElement;
      expect(input.checkValidity()).to.be.false;
    });
    
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
    cy.get("#Email").type("cypressUser@test.com");
    cy.get("#Password").type(password);
    cy.get("#repeatPassword").type(password);
    cy.get("#AcceptTermsAndConditions").check();
    cy.contains("Confirmar").click();
    cy.get('#Name').then(($input) => {
      const input = $input[0] as HTMLInputElement;
      expect(input.checkValidity()).to.be.true;
    });
    cy.contains(
      "Error durante el registro: El correo electrónico ya está registrado por favor intente con otro."
    ).click();
    cy.get("#Email").clear().type(email);
    cy.contains("Confirmar").click();
    cy.contains("Registro exitoso").should("exist");
    cy.url().should("eq", `${Cypress.config().baseUrl}/IniciarSesion`);
  });

  const user = "cypressAdmin@test.com";
  const userName = "Cypress";

  it("Loggeo exitoso", () => {
    cy.get("#email").type(`NO${user}`);
    cy.get("#password").type(`${password}wrong` );
    cy.contains("button", "Iniciar Sesión").click();
    cy.contains(`Error al iniciar sesión: El usuario no existe por favor revise sus datos.`);
    cy.get("#email").clear().type(`${user}`);
    cy.contains("button", "Iniciar Sesión").click();
    cy.contains(`Error al iniciar sesión: Contraseña incorrecta vuelva a intentar.`);
    cy.get("#password").clear().type(`${password}` );
    cy.contains("button", "Iniciar Sesión").click();
    cy.contains(`Éxito al iniciar sesión bienvenido ${userName}.`);
    cy.url().should("eq", `${Cypress.config().baseUrl}/HogarDeLibros`);
    cy.visit('/')
    cy.contains('button','Entrar al sistema').click()
    cy.url().should("eq", `${Cypress.config().baseUrl}/HogarDeLibros`);
  });

  it("Loggeo Admin", () => {
    cy.get("#email").clear().type(`${user}`);
    cy.get("#password").clear().type(`${password}` );
    cy.contains("button", "Iniciar Sesión").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/HogarDeLibros`);
  });

  const userI = "invitados@invitados.com";
  const passwordI = "invitados123";
  it("Loggeo Asistente", () => {
    cy.get("#email").clear().type(`${userI}`);
    cy.get("#password").clear().type(`${passwordI}` );
    cy.contains("button", "Iniciar Sesión").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/HogarDeLibros`);
  });

  const userINS = "jonathanaf7875@gmail.com";
  const passwordINS = "Zero7875";
  it("Loggeo Institucional", () => {
    cy.get("#email").clear().type(`${userINS}`);
    cy.get("#password").clear().type(`${passwordINS}` );
    cy.contains("button", "Iniciar Sesión").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/HogarDeLibros`);
  });

  const userE = "cypressUser@test.com";
  const passwordE = "CypressUser";
  it("Loggeo Externo", () => {
    cy.get("#email").clear().type(`${userE}`);
    cy.get("#password").clear().type(`${passwordE}` );
    cy.contains("button", "Iniciar Sesión").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/HogarDeLibros`);

  });
});
