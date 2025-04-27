import { addDay, format, weekEnd, weekStart } from "@formkit/tempo";

describe("Busqueda y prestamo de libro", () => {
  const user = "cypressUser@test.com";
  const password = "CypressUser";
  const date = format(addDay(weekStart(new Date()), 8), "YYYY-MM-DD");
  const enddate = format(addDay(weekEnd(date), -1), "YYYY-MM-DD");

  const title =
    "Conocimiento y sociedad: 75 años de la Academia de Geografía e Historia de Costa Rica";
  const autor = "Sr. Cheng J";
  const signa = "502212";
  const ISNB = "502212XA";
  const aut2 = "Soto Méndez, Zulay, 1941-, autor(a)";
  const categori = "Filosofia y Psicologia";

  beforeEach(() => {
    cy.visit("/");
    cy.contains("Inicia sesión o regístrate ahora.").click();
    cy.get("#email").type(user);
    cy.get("#password").type(password);
    cy.contains("button", "Iniciar Sesión").click();
    cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
    cy.visit("/HogarDeLibros");
    cy.get("#hamburger").click();
  });

  it("Accesibilidad de catálogo completo", () => {
    cy.contains("Catálogo completo de libros").click();
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/HogarDeLibros/Catalogo/Completo`
    );
  });

  it("Accesibilidad de búsqueda por título y paginacion", () => {
    cy.contains("Búsqueda de libros").click();
    cy.contains("Por título").click();
    cy.intercept('GET', '/books/Colection*').as('getBooks');

    cy.visit('/HogarDeLibros/Catalogo/Catalogo_Completo');
    
    cy.wait('@getBooks');
    
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/HogarDeLibros/Catalogo/Catalogo_Completo`
    );
    
    cy.contains("Siguiente").click();
    cy.contains('Se han mostrado 30', { timeout: 4000 }).should('be.visible');
    cy.contains("Anterior").click();
    cy.contains('Se han mostrado 15', { timeout: 4000 }).should('be.visible');
    cy.intercept('GET', '/books/Colection*').as('searchBooks');

    cy.get('input[placeholder="Búsqueda por título"]').type('Serafín deja el biberón');
    
    cy.wait('@searchBooks');
    cy.contains('Dulfano, Carla, autor(a)')
    cy.contains('2014')
  });

  
  
  it("Préstamo desde catálogo general", () => {
    cy.contains("Búsqueda de libros").click();
    cy.contains("Búsqueda avanzada").click();
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/HogarDeLibros/Catalogo/Avanzado`
    );

    cy.get("summary", { timeout: 1000 }).then(($summary) => {
      if (
        $summary.length > 0 &&
        $summary.is(":visible") &&
        $summary.text().includes("Mas filtros")
      ) {
        cy.wrap($summary).click();
      }
    });

    cy.get('input[placeholder="Ej. Ulate Olivar"]').type(autor);
    cy.contains(title)
    cy.get('input[placeholder="Ej. Ulate Olivar"]').clear();
    cy.get('input[placeholder="Ej. Aliento de barro y fuego"]').type(title);
    cy.contains(title)
    cy.get('input[placeholder="Ej. Aliento de barro y fuego"]').clear();
    cy.get('input[placeholder="Ej. CR.M.100..."]:visible').type(signa);
    cy.contains(title)
    cy.get('input[placeholder="Ej. CR.M.100..."]:visible').clear();
    cy.get('input[placeholder="Ej. 3497823409328"]:visible').type(ISNB); 
    cy.contains(title)
    cy.get('input[placeholder="Ej. 3497823409328"]:visible').clear();

    cy.get("select:visible").select(categori);
    cy.wait(2000)
    cy.contains(aut2)
    cy.get("select:visible").select("");
 

    cy.contains("Reserva ahora").first().click();
    cy.get('input[name="BookPickUpDate"]').type(date);
    cy.get('input[name="LoanExpirationDate"]').type(enddate);
    cy.contains("Confirmar").click();
    cy.contains("Éxito, solicitud enviada correctamente");
  });

  it("Préstamo desde catálogo infantil", () => {
    cy.contains("Búsqueda de libros").click();
    cy.contains("Catálogo infantil").click();
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/HogarDeLibros/Catalogo/Infantil`
    );
    cy.contains("Reserva ahora").first().click();
    cy.get('input[name="BookPickUpDate"]').type(date)
    cy.get('input[name="LoanExpirationDate"]').type(enddate)
    cy.contains('Confirmar').click()
    cy.contains('Éxito, solicitud enviada correctamente')
  });



});
