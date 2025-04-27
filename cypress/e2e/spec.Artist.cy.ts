
describe("Artistas Locales — Flujo Completo", () => {
  const newArtist = {
    name: "Prueba 1",
    type: "Músico",
    fb: "https://facebook.com/testartist",
    ig: "https://instagram.com/testartist",
    li1: "https://linkedin.com/testartist",
    li2: "https://tiktok.com/testartist",
    moreInfo: "Información adicional de La vaca lola",
  };

  const editedArtist = {
    originalName: newArtist.name,
    newName: "Prueba 2 EDITADO",
    newType: "Pintor",
  };

  const artistToView = "Keirin";
  const artistToDisable = "Prueba 2 EDITADO";

  const email = "naza18@gmail.com";
  const pass = "Naza1804";

  
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

  beforeEach(() => {
    cy.session("artist-session", () => {
      cy.visit("/");
      cy.contains("Inicia sesión o regístrate ahora.").click();
      cy.get("#email").type(email);
      cy.get("#password").type(pass);
      cy.contains("button", "Iniciar Sesión").click();
      cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
    });

    cy.visit("/HogarDeLibros/Recursos/Artistas");
    cy.url().should("include", "/HogarDeLibros/Recursos/Artistas");
  });

  it("crea un nuevo artista y lo encuentra en la tabla", () => {
    cy.contains(/añadir artista/i).click();

    cy.get("div[role='dialog']")
      .filter(":visible")
      .first()
      .within(() => {
        cy.get("input#Name").type(newArtist.name);
        cy.get("select#ArtisProfession").select(newArtist.type);
        cy.get("input#FBLink").type(newArtist.fb);
        cy.get("input#IGLink").type(newArtist.ig);
        cy.get("input#LILink").eq(0).type(newArtist.li1);
        cy.get("input#LILink").eq(1).type(newArtist.li2);
        cy.get("input#MoreInfo").type(newArtist.moreInfo);
        cy.get("button[type=submit]").click();
      });

    cy.wait(500);
    goToLastPage(newArtist.name);
    cy.contains(newArtist.name, { timeout: 10000 }).should("be.visible");
  });

  it("filtra la tabla por nombre", () => {
    cy.get('input[placeholder="Nombre"]').clear().type(newArtist.name);
    cy.wait(500);
    cy.get("table tbody tr").each(($row) =>
      cy.wrap($row).should("contain.text", newArtist.name)
    );
  });

  it("filtra la tabla por tipo", () => {
    cy.get('input[placeholder="Nombre"]').clear();
    cy.get("select#ArtisProfession").select(newArtist.type);
    cy.wait(500);
    cy.get("table tbody tr").each(($row) =>
      cy.wrap($row).should("contain.text", newArtist.type)
    );
  });

  it("filtra la tabla mostrando solo activos", () => {
    cy.get('input[placeholder="Nombre"]').clear();
    cy.get("select#ArtisProfession").select("");
    cy.contains("label", /estado/i)
      .parent()
      .find("select")
      .select("1");
    cy.wait(500);
    cy.get("table tbody tr")
      .first()
      .should("have.length", 1)
      .contains("Activo");
  });

  it("muestra el modal de información de un artista existente", () => {
    cy.contains("table tbody tr", artistToView)
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Ver Información de Artista"]')
          .should("be.visible")
          .click();
      });

    cy.get('div[role="dialog"]')
      .filter(":visible")
      .first()
      .within(() => {
        cy.contains(artistToView).should("be.visible");
      });
  });

  it("edita un artista existente", () => {
    cy.wait(500);
    goToLastPage(editedArtist.originalName);
    cy.contains("table tbody tr", editedArtist.originalName)
      .filter(":visible")
      .within(() => {
        cy.get("button").filter(":visible").eq(1).click();
      });

    cy.contains("h3", "Editar artista").scrollIntoView().should("be.visible");
    cy.get('div[role="dialog"]')
      .filter(":visible")
      .first()
      .within(() => {
        cy.get("input#Name").clear().type(editedArtist.newName);
        cy.get("select#ArtisProfession").select(editedArtist.newType);
        cy.get('button[type="submit"]').click();
      });
    cy.get('div[role="dialog"]').filter(":visible").should("not.exist");

    cy.contains("table tbody tr", editedArtist.newName)
      .should("exist")
      .and("contain.text", editedArtist.newType);
  });

  it("deshabilita un artista y verifica estado Inactivo", () => {
    cy.wait(500);
    goToLastPage(editedArtist.originalName);
    cy.contains("table tbody tr", artistToDisable)
      .filter(":visible")
      .within(() => {
        cy.get('button[title="Desabilitar Artista"]')
          .should("be.visible")
          .click();
      });

    cy.get('div[role="dialog"]')
      .filter(":visible")
      .within(() => {
        cy.contains("button", "Confirmar").click();
      });

    cy.wait(500);
    cy.contains("table tbody tr", artistToDisable).within(() =>
      cy.contains("Inactivo").should("be.visible")
    );
  });
});
