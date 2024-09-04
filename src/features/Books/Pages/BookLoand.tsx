import { Breadcrumb, Card, Datepicker, Label, TextInput } from "flowbite-react";
import { BooksRoute, CurrentRoute, HomeRoute, ManageRoute } from "../components/Redirections";
import ConfirmButton from "../../../components/ConfirmButton";

const BookLoan = ()=> {


    return (
        <>
          <Breadcrumb className="custom-breadcrumb">
            <HomeRoute />
            <ManageRoute />
            <BooksRoute />
            <CurrentRoute CurrentPage={"Solicitud de Préstamo"} />
          </Breadcrumb>
    <div className="w-full flex place-content-center pt-10">
    <Card className="max-w-fit mx-auto bg-gray-100 ">
      <form  className="grid grid-cols-3 gap-4">
      <fieldset className=" flex flex-col gap-7">
      <legend className=" pb-3 font-bold" >Sobre el solicitante</legend>
      <span>
      <Label htmlFor="disabledInput1">Número de Cedula</Label>
      <TextInput type="text" id="disabledInput1" placeholder="" />
      </span>
      <span>
      <Label htmlFor="disabledInput2">Nombre completo</Label>
      <TextInput type="text" id="disabledInput2" placeholder="Tu nombre" />
      </span>
      <span>
      <Label htmlFor="disabledInput2">Correo Electrónico</Label>
      <TextInput type="text" id="disabledInput2" placeholder="Tu@gmail.com"/>
      </span>
      <span>
      <Label htmlFor="disabledInput2">Número de teléfono</Label>
      <TextInput type="text" id="disabledInput2" placeholder="" />
      </span>
      </fieldset>

      <fieldset className=" flex flex-col gap-7">
      <legend className=" pb-3 font-bold" >Sobre el Libro</legend>
       <span>
         <Label htmlFor="InscriptionCode" value="Código de Inscripción" />
        <TextInput id="InscriptionCode" type="text" placeholder=""/>
        </span>
        <span>
        <Label htmlFor="SignatureCode" value="Código de Signatura" />
        <TextInput id="SignatureCode" type="text" placeholder="" />
        </span>
        <span>
        <Label htmlFor="title" value="Título del Libro" />
        <TextInput id="title" type="text" placeholder="" />
      </span>
      <span>
        <Label htmlFor="author" value="Autor" />
        <TextInput id="author" type="text" placeholder="" />
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
export default BookLoan