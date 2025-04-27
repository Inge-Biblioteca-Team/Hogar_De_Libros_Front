import { addDay, format, weekEnd, weekStart } from "@formkit/tempo";

describe("Busqueda y prestamo de libro", () => {
  const user = "cypressAdmin@test.com";
  const password = "CypressAdmin";

  const expDate = format(addDay(weekEnd(new Date()), 2), "YYYY-MM-DD");
  const trimDate = format(expDate, "DD/MM/YYYY");
  const userReq = "CypresUser Test";
  const start = format(weekStart(new Date()), "YYYY-MM-DD");
  const end = format(weekEnd(new Date()), "YYYY-MM-DD");
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

  
it("Aprobar prestamo y rechazar", () => {
  cy.contains("Préstamo y circulación").click();
  cy.contains("Solicitud de préstamo de libros").click();
  cy.url().should(
    "eq",
    `${
      Cypress.config().baseUrl
    }/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Libros`
  );
  cy.get('button[title="Denegar solicitud"]:visible').first().click();
  cy.contains('¿Está seguro de rechazar la solicitud de préstamo?')
  cy.get('textarea[placeholder="Escriba el motivo de rechazo."]:visible').type('Motivo de prueba');
  cy.contains('Confirmar').click()
  cy.contains('Éxito, préstamo rechazado correctamente')
  cy.get('button[title="Aceptar solicitud"]:visible').first().click();
  cy.contains('¿Está seguro de aprobar la solicitud de préstamo?')
  cy.contains('Confirmar').click()
  cy.contains('Éxito, se aprobó el préstamo correctamente.')
  cy.get('button[title="Ver información"]:visible').first().click();
  cy.contains('Información del préstamo')
  cy.contains('button', 'Cerrar').filter(':visible').first().click();
});

it("Extender y finalizar prestamo", () => {
  cy.contains("Préstamo y circulación").click();
  cy.contains("Préstamo de libros activos").click();
  cy.url().should(
    "eq",
    `${
      Cypress.config().baseUrl
    }/HogarDeLibros/Prestamos_Circulacion/Prestamos_Activos`
  );

  cy.get('button[title="Extender"]:visible').first().click();
  cy.contains('Extensión de fecha de devolución')
  cy.get('#NewDate').type(expDate)
  cy.contains('Guardar').click()
  cy.contains('Éxito, Fecha de expiración actualizada exitosamente.')
  cy.contains(trimDate)
  

  cy.get('button[title="Recibido"]:visible').first().click();
  cy.contains('¿Estás seguro de que deseas finalizar este préstamo?')
  cy.get('#reason').type('Razon prueba Cypress')
  cy.contains('Confirmar').click()
  cy.contains('Éxito, préstamo finalizado con éxito.')
});


  it("Filtros y generacion de boleta", () => {
    cy.contains("Historial de préstamos").click();
    cy.contains("Libros").click();
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}/HogarDeLibros/Historial/Libros`
    );
    cy.get("table tbody tr").first().click();
    cy.contains('Guardar copia').click();
    cy.contains('PDF generado exitosamente')
    cy.contains('button', 'Cerrar').filter(':visible').first().click();
    cy.get("#InitialDate").type(start);
    cy.get('input[type="date"]').eq(1).type(end);
    cy.get('input[placeholder="Nombre de solicitante"]').type(userReq);
  });
});

//Terminar el de filtros cuando este el usuario CyAdmin y CyUser