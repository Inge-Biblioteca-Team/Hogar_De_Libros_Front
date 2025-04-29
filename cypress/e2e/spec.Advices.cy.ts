import { addDay, format } from "@formkit/tempo";

describe("Pruebas Avisos", () => {
  const user = "cypressAdmin@test.com";
  const password = "CypressAdmin";
  const aviso1 = {
    date: format(new Date(), "YYYY-MM-DD"),
    reason: "Test cypress",
    extraInfo: `TestCypress${new Date()}`,
    category: "Cierre",
  };
  const aviso2 = {
    date: format(addDay(new Date(), 3), "YYYY-MM-DD"),
    reason: "Test Editar",
    extraInfo: `TestCypressEditado${new Date()}`,
    category: "Evento",
  };

  const assertDate = format(aviso2.date, "DD/MM/YYYY");

  beforeEach(() => {
    cy.session("usuario-logueado", () => {
      cy.visit("/");
      cy.contains("Inicia sesión o regístrate ahora.").click();
      cy.get("#email").type(user);
      cy.get("#password").type(password);
      cy.contains("button", "Iniciar Sesión").click();
      cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
      cy.get("#hamburger").click();
      cy.contains("Avisos importantes").click();
      cy.url().should("eq", `${Cypress.config().baseUrl}/HogarDeLibros/Avisos`);
    });
  });

  it("Crear Aviso", () => {
    cy.visit("/HogarDeLibros/Avisos");
    cy.contains("button", "Agregar nuevo aviso").should("be.visible").click();
    cy.get('input[name="reason"]').type(aviso1.reason);
    cy.get('input[name="extraInfo"]').type(aviso1.extraInfo);
    cy.get('input[name="date"]').type(aviso1.date);
    cy.get('select[name="category"]').select("").select(aviso1.category);
    cy.contains("button", "Confirmar").should("be.visible").click();
    cy.contains("Éxito, aviso creado correctamente").should("be.visible");
  });
  it("Editar Aviso", () => {
    cy.visit("/HogarDeLibros/Avisos");
    cy.get('input[placeholder="Motivo del aviso"]').type(aviso1.reason);
    cy.wait(1000)
    cy.get('button[title="Editar"]').first().click();
    cy.contains("Editar información del aviso")
    cy.get('input[name="reason"]').clear().type(aviso2.reason);
    cy.get('input[name="extraInfo"]').clear().type(aviso2.extraInfo);
    cy.get('input[name="date"]').clear().type(aviso2.date);
    cy.get('select[name="category"]').select("").select(aviso2.category);
    cy.contains("button", "Confirmar").should("be.visible").click();
    cy.contains("Éxito, aviso editado correctamente").should("be.visible");
  });
  it("Buscar Avisos", () => {
    cy.visit("/HogarDeLibros/Avisos");
    cy.get('input[placeholder="Motivo del aviso"]').type(aviso2.reason);
    cy.wait(1000)
    cy.contains(aviso2.reason);
    cy.get('input[placeholder="Motivo del aviso"]').clear();
    cy.get("select").first().select(aviso2.category);
    cy.wait(1000)
    cy.contains(aviso2.reason).should("be.visible");
    cy.get("select").first().select("");
    cy.get('input[type="date').type(aviso2.date);
    cy.wait(1000)
    cy.contains(assertDate).should("be.visible");
  });
  it("Borrar Aviso", () => {
    cy.visit("/HogarDeLibros/Avisos");
    cy.get('input[placeholder="Motivo del aviso"]').type(aviso2.reason);
    cy.wait(1000)
    cy.get('button[title="Eliminar"]').first().click();
    cy.contains("¿Está seguro de que desea eliminar este aviso?").should(
      "be.visible"
    );
    cy.contains("button", "Confirmar").should("be.visible").click();
    cy.contains("Éxito, aviso eliminado correctamente").should("be.visible");
  });
});
