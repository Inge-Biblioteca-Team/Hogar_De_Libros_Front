import { format, yearStart } from "@formkit/tempo";

describe("Pruebas Home pare(Reportes y estadisticas)", () => {
  const user = "cypressAdmin@test.com";
  const password = "CypressAdmin";
  const januaryOne = format(yearStart(new Date()) ,'YYYY-MM-DD')
  const expecDate = format(januaryOne, 'DD/MM/YYYY')
  const today = format(new Date() ,'YYYY-MM-DD')
  const expecDate2 = format(today, 'DD/MM/YYYY')
  beforeEach(() => {
    cy.session("usuario-logueado", () => {
      cy.visit("/");
      cy.contains("Inicia sesión o regístrate ahora.").click();
      cy.get("#email").type(user);
      cy.get("#password").type(password);
      cy.contains("button", "Iniciar Sesión").click();
      cy.url({ timeout: 10000 }).should("not.include", "/IniciarSesion");
    });
  });

  it("Copia de grafico", () => {
    cy.visit("/HogarDeLibros");
    cy.window().then((win) => {
      win.focus();
    });
    cy.get("#CopyBTN").click();
    cy.contains("📋 Gráfico copiado al portapapeles");
  });
  it("Reporte de Prestamo de libros", () => {
    cy.visit("/HogarDeLibros");
    cy.get('button[title="Opciones"]').eq(1).click();
    cy.contains('Generar reporte').click()
    cy.contains('Generar reporte de préstamo de Libros')
    cy.get('input[type="date"]').first().type(januaryOne)
    cy.get('input[type="date"]').eq(1).type(today)
    cy.contains('button', 'Generar Reporte').should('be.visible').click();
    cy.contains('Reporte generado con éxito.',{timeout:2000}).should('be.visible')
    .then((found) => {
      if (!found) {
        cy.contains(`No existen prestamos dentro del rango de fechas ${expecDate} a ${expecDate2}`).should('be.visible');
      }
    });
  });
  it("Reporte de usuarios", () => {
    cy.visit("/HogarDeLibros");
    cy.get('button[title="Opciones"]').eq(2).click();
    cy.contains('Generar reporte').click()
    cy.contains('Generar reporte de usuarios externos registrados')
    cy.get('input[type="date"]').first().type(januaryOne)
    cy.get('input[type="date"]').eq(1).type(today)
    cy.contains('button', 'Generar Reporte').should('be.visible').click();
    cy.contains('Reporte generado con éxito.',{timeout:2000}).should('be.visible')
    .then((found) => {
      if (!found) {
        cy.contains(`Ningún usuario se registró entre el ${expecDate} y el ${expecDate2}`).should('be.visible');
      }
    });
  });
  it("Reporte de asistencia", () => {
    cy.visit("/HogarDeLibros");
    cy.get('button[title="Opciones"]').eq(3).click();
    cy.contains('Generar reporte').click()
    cy.contains('Generar reporte de asistencia')
    cy.get('input[type="date"]').first().type(januaryOne)
    cy.get('input[type="date"]').eq(1).type(today)
    cy.contains('button', 'Generar Reporte').should('be.visible').click();
    cy.contains('Reporte generado con éxito.',{timeout:2000}).should('be.visible')
    .then((found) => {
      if (!found) {
        cy.contains(`No existen asistencias dentro del rango de fechas ${expecDate} a ${expecDate2}`).should('be.visible');
      }
    });
  });
  it("Reporte de uso de equipo de computo", () => {
    cy.visit("/HogarDeLibros");
    cy.get('button[title="Opciones"]').eq(4).click();
    cy.contains('Generar reporte').click()
    cy.contains('Generar reporte de usos de equipos de Cómputo')
    cy.get('input[type="date"]').first().type(januaryOne)
    cy.get('input[type="date"]').eq(1).type(today)
    cy.contains('button', 'Generar Reporte').should('be.visible').click();
    cy.contains('Reporte generado con éxito.',{timeout:2000}).should('be.visible')
    .then((found) => {
      if (!found) {
        cy.contains(`No existen prestamos dentro del rango de fechas ${expecDate} a ${expecDate2}`).should('be.visible');
      }
    });
  });
  it("Reporte de Eventos", () => {
    cy.visit("/HogarDeLibros");
    cy.get('button[title="Opciones"]').eq(5).click();
    cy.contains('Reporte de Eventos').click()
    cy.contains('Generar reporte de eventos')
    cy.get('input[type="date"]').first().type(januaryOne)
    cy.get('input[type="date"]').eq(1).type(today)
    cy.contains('button', 'Generar Reporte').should('be.visible').click();
    cy.contains('Reporte generado con éxito.',{timeout:2000}).should('be.visible')
    .then((found) => {
      if (!found) {
        cy.contains(`No existen eventos dentro del rango de fechas ${expecDate} a ${expecDate2}`).should('be.visible');
      }
    });
  });
  it("Reporte de Cursos", () => {
    cy.visit("/HogarDeLibros");
    cy.get('button[title="Opciones"]').eq(5).click();
    cy.contains('Reporte de Eventos').click()
    cy.contains('Generar reporte de eventos')
    cy.get('input[type="date"]').first().type(januaryOne)
    cy.get('input[type="date"]').eq(1).type(today)
    cy.contains('button', 'Generar Reporte').should('be.visible').click();   
    cy.contains('Reporte generado con éxito.',{timeout:2000}).should('be.visible')
    .then((found) => {
      if (!found) {
        cy.contains(`No existen cursos dentro del rango de fechas ${expecDate} a ${expecDate2}`).should('be.visible');
      }
    });
 
  });
});
