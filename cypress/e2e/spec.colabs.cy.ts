import { addDay, format, weekEnd } from "@formkit/tempo";

describe("Pruebas colaboraciones", () => {
  const user = "cypressAdmin@test.com";
  const password = "CypressAdmin";
  const userE = "cypressUser@test.com";
  const passwordE = "CypressUser";
  const testData = {
    PrincipalCategory: "Charlas",
    SubCategory: "Cultura de paz",
    IDType: "number",
    UserCedula: "888888888",
    institutional: true,
    Entitycollaborator: "Universidad Nacional",
    UserGender: "Hombre",
    UserFullName: "CypresTest",
    UserBirthDate: "2000-01-01",
    UserAddress: "Barrio",
    UserPhone: "44444444",
    UserEmail: "Cy@test.com",
    Experience: "Licenciatura en Educación",
    activityDate: format(addDay(weekEnd(new Date()),2), "YYYY-MM-DD"),
    Description: "Un taller de lectura infantil para niños de 6 a 10 años.",
    ExtraInfo: "Proyector, marcadores, hojas blancas",
  };
  describe("Flujo usuario externo", () => {
    it("Pagina informativa", () => {
      cy.visit("/");
      cy.scrollTo("bottom");
      cy.wait(1000);
      cy.contains("Amigos de la biblioteca").click();
      cy.contains("button", "Participar").click();
      cy.contains("Solicitud de actividad conjunta con la biblioteca");
      cy.contains("button", "Continuar").click();
      cy.contains("Favor completar todos los campos.");
      cy.get('[name="PrincipalCategory"]').select(testData.PrincipalCategory);
      cy.get('[name="SubCategory"]').select(testData.SubCategory);
      cy.get("select").eq(2).select("number");
      cy.wait(500)
      cy.get('[name="UserCedula"]').clear().type(testData.UserCedula);
      if (testData.institutional) {
        cy.get('input[type="checkbox"]').eq(0).check();
        cy.get('[name="Entitycollaborator"]').type(testData.Entitycollaborator);
      }
      cy.get('[name="UserGender"]').select(testData.UserGender);
      cy.get('[name="UserFullName"]').type(testData.UserFullName);
      cy.get('[name="UserBirthDate"]').type(testData.UserBirthDate);
      cy.get('[name="UserAddress"]').type(testData.UserAddress);
      cy.get('[name="UserPhone"]').type(testData.UserPhone);
      cy.get('[name="UserEmail"]').type(testData.UserEmail);
      cy.contains("Continuar").click();
      cy.get('input[type="checkbox"]').eq(0).check();
      cy.get('[name="Experience"]').type(testData.Experience);
      cy.get('[name="activityDate"]').type(testData.activityDate);
      cy.get('[name="Description"]').type(testData.Description);
      cy.get('[name="ExtraInfo"]').type(testData.ExtraInfo);
      cy.get('button[type="submit"]').contains("Enviar").click();
      cy.contains("Éxito, Solicitud enviada");
    });
    it('Formulario interno', () => {
        cy.visit("/");
        cy.contains("Inicia sesión o regístrate ahora.").click();
        cy.get("#email").type(userE);
        cy.get("#password").type(passwordE);
        cy.contains("button", "Iniciar Sesión").click();
        cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
        cy.visit("/HogarDeLibros");
        cy.get("#hamburger").click();
        cy.contains('Sé un amigo más').click()
        cy.contains("button","¡Ir al formulario!").first().click()
        cy.contains("Solicitud de actividad conjunta con la biblioteca");
        cy.contains("button", "Continuar").click();
        cy.contains("Favor completar todos los campos.");
        cy.get('[name="PrincipalCategory"]').select(testData.PrincipalCategory);
        cy.get('[name="SubCategory"]').select(testData.SubCategory);
        cy.get("select").eq(2).select("number");
        cy.wait(500)
        cy.get('[name="UserCedula"]').clear().type(testData.UserCedula);
        if (testData.institutional) {
          cy.get('input[type="checkbox"]').eq(0).check();
          cy.get('[name="Entitycollaborator"]').type(testData.Entitycollaborator);
        }
        cy.get('[name="UserGender"]').select(testData.UserGender);
        cy.get('[name="UserFullName"]').type(testData.UserFullName);
        cy.get('[name="UserBirthDate"]').type(testData.UserBirthDate);
        cy.get('[name="UserAddress"]').type(testData.UserAddress);
        cy.get('[name="UserPhone"]').type(testData.UserPhone);
        cy.get('[name="UserEmail"]').type(testData.UserEmail);
        cy.contains("Continuar").click();
        cy.get('input[type="checkbox"]').eq(0).check();
        cy.get('[name="Experience"]').type(testData.Experience);
        cy.get('[name="activityDate"]').type(testData.activityDate);
        cy.get('[name="Description"]').type(testData.Description);
        cy.get('[name="ExtraInfo"]').type(testData.ExtraInfo);
        cy.get('button[type="submit"]').contains("Enviar").click();
        cy.contains("Éxito, Solicitud enviada");
    });
  });


  describe("Flujo administrador", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.contains("Inicia sesión o regístrate ahora.").click();
      cy.get("#email").type(user);
      cy.get("#password").type(password);
      cy.contains("button", "Iniciar Sesión").click();
      cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
      cy.visit("/HogarDeLibros");
      cy.get("#hamburger").click();
      cy.contains("Colaboradores").click();
    });

    it("Aprobar solicitud", () => {
      cy.contains("Propuestas de colaboración").click();
      cy.url().should(
        "eq",
        `${
          Cypress.config().baseUrl
        }/HogarDeLibros/Colaboraciones/Pendientes_Respuesta`
      );
      cy.get("select").first().select(testData.PrincipalCategory);
      cy.get("select").eq(1).select(testData.SubCategory);
      cy.get("input[type='date']").type(testData.activityDate);
      cy.get("button[title='Aceptar solicitud']").first().click();
      cy.contains("Aprobar colaboración");
      cy.contains("Confirmar").click();
      cy.contains("Éxito, solicitud aprobada");
    });

    it("Denegar solicitud", () => {
      cy.contains("Propuestas de colaboración").click();
      cy.url().should(
        "eq",
        `${
          Cypress.config().baseUrl
        }/HogarDeLibros/Colaboraciones/Pendientes_Respuesta`
      );
      cy.get("select").first().select(testData.PrincipalCategory);
      cy.get("select").eq(1).select(testData.SubCategory);
      cy.get("input[type='date']").type(testData.activityDate);
      cy.get("button[title='Denegar solicitud']").first().click();
      cy.contains("Rechazar colaboración");
      cy.get("textarea[name='reason']").type("Test");
      cy.contains("Confirmar").click();
      cy.contains("Éxito, rechazado correctamente");
    });

    it("Cancelar colaboracion", () => {
      cy.contains("Colaboraciones futuras").click();
      cy.url().should(
        "eq",
        `${
          Cypress.config().baseUrl
        }/HogarDeLibros/Colaboraciones/Pendientes_Realizacion`
      );
      cy.get("select").first().select(testData.PrincipalCategory);
      cy.get("select").eq(1).select(testData.SubCategory);
      cy.get("input[type='date']").type(testData.activityDate);
      cy.get("button[title='Cancelar']").first().click();
      cy.get("textarea").type("Test").click();
      cy.contains("Confirmar").click();
      cy.contains("Éxito, rechazado correctamente");
    });

    it("Historial y busqueda", () => {
      cy.contains("Historial de colaboradores").click();
      cy.url().should(
        "eq",
        `${Cypress.config().baseUrl}/HogarDeLibros/Colaboraciones/Historial`
      );
      cy.get("select").first().select(testData.PrincipalCategory);
      cy.wait(1000)
      cy.get("select").eq(1).select(testData.SubCategory);
      cy.wait(1000)
      cy.get("input[type='date']").type(testData.activityDate);
    });
  });
});
