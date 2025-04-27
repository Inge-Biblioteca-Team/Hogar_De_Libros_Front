import { format } from "@formkit/tempo";

describe("Gestion de libros(Creacion, Edicion, Baja)", () => {
  const user = "cypressAdmin@test.com";
  const password = "CypressAdmin";
  const bookData = {
    title: `Prueba Añadir ${format(new Date(), "DD-MM-YYY")}`,
    author: "Cypress",
    editorial: "Cypres.IO",
    publishedYear: "2025",
    ISBN: "XCY",
    signatureCode: "XCYSC",
    inscriptionCode: "000333",
    observations: "Añadido por cypress",
    bookConditionRating: "Bueno",
    shelfCategory: "Obras Generales",
    reserveBook: true,
  };
  const bookDataEdit = {
    title: `Prueba Editada ${format(new Date(), "DD-MM-YYY")}`,
    author: "Cypress Editor",
    editorial: "Cypress.Edit",
    publishedYear: "2020",
    ISBN: "XYZ123456",
    signatureCode: "XYZSC",
    inscriptionCode: "111222",
    observations: "Editado por Cypress",
    bookConditionRating: "Deplorable",
    shelfCategory: "Ciencias Sociales",
    reserveBook: false,
  };

  beforeEach(() => {
    cy.visit("/");
    cy.contains("Inicia sesión o regístrate ahora.").click();
    cy.get("#email").type(user);
    cy.get("#password").type(password);
    cy.contains("button", "Iniciar Sesión").click();
    cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
    cy.visit("/HogarDeLibros");
    cy.get("#hamburger").click();
    cy.contains("Recursos").click();
    cy.contains("Libros generales").click();
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/HogarDeLibros/Recursos/Catalogo_General`
    );
  });

  it("Crear nuevo registro Libro", () => {
    cy.contains("Añadir nuevo libro").click();
    cy.contains("Añadir libro a la colección");

    cy.get('input[name="Title"]').type(bookData.title);
    cy.get('input[name="Author"]').type(bookData.author);
    cy.get('input[name="Editorial"]').type(bookData.editorial);
    cy.get('input[name="PublishedYear"]').type(bookData.publishedYear);
    cy.get('input[name="ISBN"]').type(bookData.ISBN);
    cy.get('input[name="signatureCode"]').type(bookData.signatureCode);
    cy.get('input[name="InscriptionCode"]').type(bookData.inscriptionCode);
    cy.get('input[name="Observations"]').type(bookData.observations);
    cy.get('select[name="BookConditionRating"]').select(
      bookData.bookConditionRating
    );
    cy.get('select[name="ShelfCategory"]').select(bookData.shelfCategory);
    if (bookData.reserveBook) {
      cy.get('input[name="ReserveBook"]').check();
    }
    cy.contains("Confirmar").click();
    cy.contains("Éxito, libro creado correctamente").should("be.visible");
  });

  it("Buscar y editar Libro, Baja libro", () => {
    cy.get("select").first().select("0");
    cy.wait(2000);
    cy.contains("Baja");
    cy.get("select").first().select("");
    cy.get('input[placeholder="Búsqueda por titulo"]').type(bookData.title);
    cy.wait(2000);
    cy.contains(bookData.title);
    cy.get('input[placeholder="Búsqueda por titulo"]').clear();
    cy.get('input[placeholder="Búsqueda por autor"]').type(bookData.author);
    cy.wait(2000);
    cy.contains(bookData.author);
    cy.get('input[placeholder="Búsqueda por autor"]').clear();
    cy.get('input[placeholder="Código de signatura"]').type(
      bookData.signatureCode
    );
    cy.wait(2000);
    cy.contains(bookData.signatureCode);
    cy.get('button[title="Editar"]:visible').first().click();
    cy.get('input[name="Title"]').clear().type(bookDataEdit.title);
    cy.get('input[name="Author"]').clear().type(bookDataEdit.author);
    cy.get('input[name="Editorial"]').clear().type(bookDataEdit.editorial);
    cy.get('input[name="PublishedYear"]')
      .clear()
      .type(bookDataEdit.publishedYear);
    cy.get('input[name="ISBN"]').clear().type(bookDataEdit.ISBN);
    cy.get('input[name="signatureCode"]')
      .clear()
      .type(bookDataEdit.signatureCode);
    cy.get('input[name="InscriptionCode"]')
      .clear()
      .type(bookDataEdit.inscriptionCode);
    cy.get('input[name="Observations"]')
      .clear()
      .type(bookDataEdit.observations);
    cy.get('select[name="BookConditionRating"]').select(
      bookDataEdit.bookConditionRating
    );
    cy.get('select[name="ShelfCategory"]').select(bookDataEdit.shelfCategory);
    if (bookDataEdit.reserveBook) {
      cy.get('input[name="ReserveBook"]').check();
    }
    cy.contains("Confirmar").click();
    cy.contains("Éxito, libro editado correctamente").should("be.visible");
    cy.get('input[placeholder="Código de signatura"]').clear().type(
      bookDataEdit.signatureCode
    );
    cy.wait(1000)
    cy.get('button[title="Deshabilitar"]:visible').first().click();
    cy.get('textarea[name="reason"]').type(
      `Prueba de baja libro ${new Date()}`
    );
    cy.contains("button", "Confirmar").filter(":visible").first().click();
    cy.contains("Éxito, libro dado de baja correctamente").should("be.visible");
  });
});
