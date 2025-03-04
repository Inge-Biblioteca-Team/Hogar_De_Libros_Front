import { Loans } from "../Types/BookLoan";
import {
  Document,
  Image,
  Page,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import SinabiLogo from "./Assets/SinabiLogo.png";
import MinisterioLogo from "./Assets/LogoMinisterio.png";
import { formatToFullDate } from "../../../components/FormatTempo";

const style = StyleSheet.create({
  page: { fontSize: 12, padding: 20 },
  borders: { border: " 2 solid black" },
  logos: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
  logo: { width: 100, height: 70 },
  separator: {
    width: 2,
    height: 70,
    backgroundColor: "black",
  },
  altSeparator: {
    width: 1,
    height: 50,
    backgroundColor: "black",
  },
  header: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: { borderTop: "1 solid black", padding: 20 },
  altSecction: {
    borderTop: "1 solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 5,
    textAlign: "center",
  },
  altSectionText: { paddingBottom: 20,   textAlign: "center", },
  firma: { marginTop: 20, textAlign: "center" },
});

const DocumentForLoan = ({ loanInfo }: { loanInfo: Loans }) => (
  <Document>
    <Page style={style.page}>
      <View style={style.borders}>
        <View style={style.logos}>
          <Image style={style.logo} src={MinisterioLogo} />
          <View style={style.separator} />
          <Image style={style.logo} src={SinabiLogo} />
        </View>
        <Text style={style.header}>SISTEMA NACIONAL DE BIBLIOTECAS</Text>
        <View>
          <Text style={style.section}>BIBLIOTECA PUBLICA MUNICIPAL DE NICOYA</Text>
        </View>
        <View style={style.section}>
          <Text>SIGNATURA {loanInfo.book.signatureCode || "No Posee"} </Text>
        </View>
        <View style={style.altSecction}>
          <View style={style.altSectionText}>
            <Text>Nº INSCRIPCION</Text>
            <Text>{loanInfo.book.InscriptionCode} </Text>
          </View>
          <View style={style.altSeparator} />
          <View style={style.altSectionText}>
            <Text>CÓD. EMPLEADO</Text>
          </View>
        </View>
        <View style={style.section}>
          <Text>AUTOR {loanInfo.book.Author} </Text>
        </View>
        <View style={style.section}>
          <Text>TITULO {loanInfo.book.Title} </Text>
        </View>
        <View style={style.altSecction}>
          <View style={style.altSectionText}>
            <Text>VENCE</Text>
            <Text>{formatToFullDate(loanInfo.LoanExpirationDate)} </Text>
          </View>
          <View style={style.altSeparator} />
          <View style={style.altSectionText}>
            <Text>HORA</Text>
            <Text>5:00 PM</Text>
          </View>
        </View>

        <View style={style.section}>
          <Text>NOMBRE {loanInfo.user.name} </Text>
        </View>

        <View style={style.altSecction}>
          <View style={style.altSectionText}>
            <Text>CEDULA O CARNÉ Nº</Text>
            <Text>{loanInfo.user.cedula} </Text>
          </View>
          <View style={style.altSeparator} />
          <View style={style.altSectionText}>
            <Text>FECHA</Text>
            <Text>{formatToFullDate(loanInfo.BookPickUpDate)} </Text>
          </View>
        </View>

        <View style={style.section}>
          <Text>CENTRO EDUCATIVO, INSTITUCIÓN O PERSONA</Text>
        </View>
        <View style={style.section}>
          <Text>
            TELÉFONO Y DIRECCION {loanInfo.user.PhoneNumber},{" "}
            {loanInfo.user.Adress}{" "}
          </Text>
        </View>
        <View style={style.section}>
          <View style={style.firma}>
            <Text>_______________________________________{"\n"}FIRMA</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default DocumentForLoan;
