import { jsPDF } from "jspdf";

const CreateLoanPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("SISTEMA NACIONAL DE BIBLIOTECAS", 40, 70);
  doc.setFontSize(12);
  doc.text("BIBLIOTECA:", 20, 80);
  doc.text("PÚBLICA DE", 20, 85);
  doc.text("SIGNATURA:", 20, 95);
  doc.text("Nº. INSCRIPCIÓN:", 20, 105);
  doc.text("CÓD. EMPLEADO:", 120, 110);
  doc.text("AUTOR:", 20, 125);
  doc.text("TÍTULO:", 20, 135);
  doc.text("VENCE:", 20, 145);
  doc.text("HORA:", 120, 145);
  doc.text("NOMBRE:", 20, 165);
  doc.text("CÉDULA O CARNÉ Nº.:", 20, 180);
  doc.text("FECHA:", 120, 180);
  doc.text("CENTRO EDUCATIVO, INSTIRUCIÓN O PERSONA:", 40, 200);
  doc.text("TELÉFONO:", 20, 220);
  doc.text("Y DIRECCION:", 18, 225);
  doc.text("----------------------------------------",60,255)
  doc.text("Firma:", 80, 260);

  //Valores del prestamo
 

  doc.save("prestamo_libro.pdf");
};

export default CreateLoanPDF;
