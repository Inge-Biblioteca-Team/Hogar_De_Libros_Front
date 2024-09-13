import { Breadcrumb, Card, Datepicker, Label, TextInput } from "flowbite-react";
import ConfirmButton from "../../../components/ConfirmButton";
import { HomeCrumb, LastCrumb, ManageCrumb } from "../../../components/BreadCrumb";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Book } from "../../Books/type/Book";
import { GetByBookCode } from "../../Books/services/SvBooks";
import { useEffect, useState } from "react";
import useUserData from "../../user/hooks/useUserData";


const BookLoand = ()=> {
  const { BookCode } = useParams<{ BookCode?: string }>();
  const { data: book } = useQuery<Book, Error>(
    ["OneBook", BookCode],
    () => {
      if (!BookCode) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetByBookCode(BookCode);
    },
    { enabled: !!BookCode, staleTime: 60000 }
  );
  const [inscriptionCode, setInscriptionCode] = useState<string>('');
  const [signatureCode, setSignatureCode] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  useEffect(() => {
    if (book) {
      setInscriptionCode(book.InscriptionCode);
      setSignatureCode(book.SignatureCode);
      setTitle(book.Title);
      setAuthor(book.Author);
    }
  }, [book]);

  //usuario
  const [idNumber, setIdNumber] = useState<string>("");
  const { userData, isUserRegistered } = useUserData(idNumber);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "idNumberInput") {
      setIdNumber(value);
    } 
  };
    return (
        <>
          <Breadcrumb className="custom-breadcrumb">
            <HomeCrumb />
          <ManageCrumb />
           <LastCrumb CurrentPage="Prestamo de Libros" />
          </Breadcrumb>
    <div className="w-full flex place-content-center pt-10">
    <Card className="max-w-fit mx-auto bg-gray-100 ">
      <form  className="grid grid-cols-3 gap-4">
      <fieldset className=" flex flex-col gap-7">
      <legend className=" pb-3 font-bold" >Sobre el solicitante</legend>

      <span>
      <Label htmlFor="idNumberInput">Número de Cedula</Label>
      <TextInput
      type="text"
      id="idNumberInput"
      value={idNumber}
      onChange={handleInputChange}
      placeholder="Ingresa tu número de cédula" />
      </span>
      <span>
      <Label htmlFor="name">Nombre completo</Label>
      <TextInput
      type="text"
      id="nameInput"
      value={userData.name}
      placeholder=""
      readOnly={isUserRegistered} />
      
      </span>
      <span>
      <Label htmlFor="emailInput">Correo Electrónico</Label>
      <TextInput
       type="text"
       id="emailInput"
       value={userData.email}
       placeholder="Tu@gmail.com"
       readOnly={isUserRegistered} />
      </span>
      <span>
      <Label htmlFor="phoneInput">Número de teléfono</Label>
      <TextInput
      type="text"
      id="phoneInput"
      value={userData.phoneNumber}
      placeholder=""
      readOnly={isUserRegistered} />
      </span>
      </fieldset>

      <fieldset className=" flex flex-col gap-7">
      <legend className=" pb-3 font-bold" >Sobre el Libro</legend>
       <span>
         <Label htmlFor="InscriptionCode" value="Código de Inscripción" />
         <TextInput
            id="InscriptionCode"
            type="text"
            value={inscriptionCode}
            readOnly
            placeholder=""
          />
        </span>
        <span>
        <Label htmlFor="SignatureCode" value="Código de Signatura" />
        <TextInput
            id="SignatureCode"
            type="text"
            value={signatureCode}
            readOnly
            placeholder=""
          />
        </span>
        <span>
        <Label htmlFor="title" value="Título del Libro" />
        <TextInput
            id="title"
            type="text"
            value={title}
            readOnly
            placeholder=""
          />
      </span>
      <span>
        <Label htmlFor="author" value="Autor" />
        <TextInput
            id="author"
            type="text"
            value={author}
            readOnly
            placeholder=""
          />
        </span>
      </fieldset>
      <fieldset className=" flex flex-col gap-7">
      <legend className=" pb-3 font-bold">Sobre el prestamo</legend>
      <span>
      <Label htmlFor="disabledInput1">Fecha y hora de Solicitud</Label>
      <TextInput id="datetimeRequest" type="datetime-local" />
      </span>
      <span>
      <Label htmlFor="disabledInput2">Fecha de recolección </Label>
      <Datepicker language="es-CR"
       labelTodayButton="Hoy"  
       labelClearButton="Limpiar" />
      </span>
      <span>
      <Label htmlFor="disabledInput2">Fecha de vencimiento del prestamo</Label>
      <Datepicker language="es-CR"
       labelTodayButton="Hoy"  
       labelClearButton="Limpiar" />
      </span>
      <div className="flex flex-col justify-end pt-6">
      <ConfirmButton text="Enviar solicitud"/>
      </div>
      </fieldset>
      
      </form>
      </Card>
    </div>
        </>
      );
    
}
export default BookLoand