/// <reference types="cypress" />

function goToLastPage(itemIdentifier: string) {
  cy.get("body").then(($body) => {
    const found = Array.from($body.find("table tbody tr")).some((tr) =>
      (tr as HTMLElement).innerText.includes(itemIdentifier)
    );
    if (found) return;
    cy.contains("Siguiente")
      .filter(":visible")
      .then(($btn) => {
        if (!$btn.prop("disabled")) {
          cy.wrap($btn).click();
          goToLastPage(itemIdentifier);
        }
      });
  });
}

describe("Mobiliarios - Flujo Completo", () => {
  const newInsert = {
    licenseNumber: "12345678910",
    description: "silla de lectura",
    location: "Sala de lectura 3",
    inChargePerson: "Keirin Obando",
    conditionRating: "4",
  };

  const editedInsert = {
    originalDescription: newInsert.description,
    newDescription: "Repisa de libros editada",
    newLocation: "Casa de lectura 3 editada",
  };

  const fornitureToView = "9078";
  const fornitureToDisable = "12345678910";

  const email = "naza18@gmail.com";
  const pass = "Naza1804";

  beforeEach(() => {
    cy.session("artist-session", () => {
      cy.visit("/");
      cy.contains("Inicia sesión o regístrate ahora.").click();
      cy.get("#email").type(email);
      cy.get("#password").type(pass);
      cy.contains("button", "Iniciar Sesión").click();
      cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
    });

    cy.visit("/HogarDeLibros/Recursos/Mobiliario");
    cy.url().should("include", "/HogarDeLibros/Recursos/Mobiliario");
  });

  it("crea un nuevo mueble y lo encuentra en la tabla", () => {
    cy.contains(/añadir mobiliario/i).click();

    cy.get("div[role='dialog']")
      .filter(":visible")
      .first()
      .within(() => {
        cy.get("input#LicenseNumber").type(newInsert.licenseNumber);
        cy.get("input#Description").type(newInsert.description);
        cy.get("input#Location").type(newInsert.location);
        cy.get("select#InChargePerson").select(newInsert.inChargePerson);
        cy.get("select#ConditionRating").select(newInsert.conditionRating);
        cy.get("button[type=submit]").click();
      });

    cy.wait(500);
    goToLastPage(newInsert.licenseNumber);
    cy.contains(newInsert.licenseNumber, { timeout: 10000 }).should(
      "be.visible"
    );
  });

  it("filtra la tabla por placa", () => {
    cy.get('input[placeholder="Búsqueda por placa"]')
      .clear()
      .type(newInsert.licenseNumber);
    cy.get("table tbody").should("contain.text", newInsert.licenseNumber);
  });

  it("filtra la tabla por descripción", () => {
    cy.get('input[placeholder="Búsqueda por descripción"]')
      .clear()
      .type(newInsert.description);
    cy.get("table tbody").should("contain.text", newInsert.description);
  });

  it("filtra la tabla por estado", () => {
    cy.get('input[placeholder="Búsqueda por placa"]').clear();
    cy.get('input[placeholder="Búsqueda por descripción"]').clear();
    cy.contains("option", "Seleccione el estado")
      .parent("select")
      .select("S.E.");
    cy.get("table tbody").should("contain.text", "S.E.");
  });

  it("muestra el modal de información de un mobiliario existente", () => {
    cy.contains("table tbody tr", fornitureToView)
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Ver información"]').should("be.visible").click();
      });

    cy.get('div[role="dialog"]')
      .filter(":visible")
      .first()
      .within(() => {
        cy.contains(fornitureToView).should("be.visible");
      });
  });

  it("edita un mobiliario existente", () => {
    cy.wait(500);
    goToLastPage(editedInsert.originalDescription);
    cy.contains("table tbody tr", editedInsert.originalDescription)
      .filter(":visible")
      .within(() => {
        cy.get("button").filter(":visible").eq(1).click();
      });

    cy.contains("h3", "Editar mobiliario")
      .scrollIntoView()
      .should("be.visible");
    cy.get('div[role="dialog"]')
      .filter(":visible")
      .first()
      .within(() => {
        cy.get('input[name="Description"]')
          .clear()
          .type(editedInsert.newDescription);
        cy.get('input[name="Location"]').clear().type(editedInsert.newLocation);
        cy.get('button[type="submit"]').click();
      });
    cy.get('div[role="dialog"]').filter(":visible").should("not.exist");

    cy.contains("table tbody tr", editedInsert.newDescription)
      .should("exist")
      .and("contain.text", editedInsert.newLocation);
  });

  it("deshabilita un mobiliario y verifica estado seleccionado", () => {
    cy.wait(500);
    goToLastPage(editedInsert.originalDescription);

    cy.contains("table tbody tr", fornitureToDisable)
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Deshabilitar"]').should("be.visible").click();
      });

    cy.get("div[role='dialog']", { timeout: 10000 })
      .filter(":visible")
      .within(() => {
        cy.contains("h3", "Seleccione el nuevo estado del mobiliario").should(
          "be.visible"
        );

        cy.contains("option", "Seleccione una opción")
          .parent("select")
          .should("exist")
          .select("Down");

        cy.contains("button", /^Confirmar$/i)
          .should("not.be.disabled")
          .click();
      });

    cy.contains("table tbody tr", fornitureToDisable).within(() => {
      cy.contains("Baja").should("be.visible");
    });
  });
});
