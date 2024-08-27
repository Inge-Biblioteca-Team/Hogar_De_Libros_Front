import { Breadcrumb, TextInput, Label, Checkbox, Select } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { HomeRoute, ManageRoute, BooksRoute, CurrentRoute } from "../components/Redirections";
import { Book, EditBook } from "../type/Book";
import { GetNier } from "../services/SvBooks";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import ConfirmButton from "../../../components/ConfirmButton";
import UseEditBook from "../Hooks/UseEditBook";
const EditBookInformation = () => {

    const { id } = useParams<{ id?: string }>();

    const { data: book } = useQuery<Book, Error>(
      ["bookObjetive", id],
      () => {
        if (!id) {
          throw new Error("Error No existe ID de libro para buscar");
        }
        return GetNier(id);
      },
      {
        staleTime: 60000,
      }
    );

    const { register, setValue, watch, handleSubmit } = useForm<EditBook>();
    useEffect(() => {
      if (book) {
        setValue("Title", book.Title);
        setValue("Author", book.Author);
        setValue("BookConditionRating", book.BookConditionRating);
        setValue("Cover", book.Cover);
        setValue("Editorial", book.Editorial);
        setValue("ISBN", book.ISBN);
        setValue("InscriptionCode", book.InscriptionCode);
        setValue("Observations", book.Observations);
        setValue("PublishedYear" , book.PublishedYear);
        setValue("ReserveBook", book.ReserveBook);
        setValue("ShelfCategory", book.ShelfCategory);
        setValue("SignatureCode", book.SignatureCode);
      }
    }, [book, setValue]);

    const { mutate: editBook } = UseEditBook();

    const onSubmit = (formData: EditBook) => {
      if (book?.BookCode) {
        editBook({ book: formData, BookCode: book.BookCode });
      } else {
        console.error('No BookCode found for this book');
      }
    };

    return (
      <>
        <Breadcrumb className="custom-breadcrumb">
        <HomeRoute />
        <ManageRoute/>
        <BooksRoute />
        <CurrentRoute CurrentPage={"Editar"} />
        {book?.Title? <CurrentRoute CurrentPage={book?.Title} /> : null}
        
        </Breadcrumb>
        <div className="w-full flex place-content-center pt-10">
          <form onSubmit={handleSubmit(onSubmit)}
            className="grid gap-14 w-4/5 text-2xl grid-cols-3 "
            style={{ gridTemplateColumns: "" }}
          >
            <fieldset className="flex-none">
              <legend className=" pb-3 font-bold ">Caratula del libro</legend>
              <figure className="relative ">
                <img
                  className="rounded-xl shadow-xl"
                  style={{ height: "22.8em",maxHeight:"22.8em", zIndex:"88888" }}
                  src={watch('Cover')}
                  alt="Seleccionar una imagen"
                />
                <figcaption
                  className="absolute w-4/5"
                  style={{ top: "60%", left: "11%" }}
                >
                  <TextInput type="text" placeholder="Introduce la URL de la imagen"
                    {...register('Cover')}
                    
                  />
                </figcaption>
              </figure>
            </fieldset>
  
            <fieldset className=" flex flex-col gap-7">
              <legend className=" pb-3 font-bold">
                Información básica del libro
              </legend>
              <span>
                <Label htmlFor="title" value="Título del Libro" className="text-xl"
                />
                <TextInput id="title" type="text"disabled
                  {...register("Title")}
                />
              </span>
              <span>
                <Label htmlFor="author" value="Autor" className="text-xl" />
                <TextInput id="author" type="text" disabled
                  {...register("Author")}
                />
              </span>
              <span>
                <Label htmlFor="ISBN" value="ISBN" className="text-xl" />
                <TextInput id="ISBN" type="text" 
                  {...register("ISBN")}
                />
              </span>
              <span>
                <Label htmlFor="InscriptionCode" value="Código de Inscripción" 
                className="text-xl"/>
                <TextInput id="InscriptionCode" type="text" 
                  {...register("InscriptionCode")}
                />
              </span>
              <span>
                <Label htmlFor="SignatureCode" value="Código de Signatura" className="text-xl"
                />
                <TextInput id="SignatureCode" type="text" 
                  {...register("SignatureCode")}
                />
              </span>
              <span>
              <Checkbox
                    id="Reserva"
                    {...register("ReserveBook")}
                  />
                  <Label htmlFor="Reserva" value="Libro de Reserva" className="text-xl"/>
              </span>
            </fieldset>
  
            <fieldset className=" flex flex-col gap-7 ">
              <legend className=" pb-3 font-bold ">Detalles adicionales</legend>
              <span>
                <Label htmlFor="Editorial" value="Editorial" className="text-xl"
                />
                <TextInput id="Editorial" type="text" disabled
                  {...register("Editorial")}
                />
              </span>
              <span>
                <Label htmlFor="PublicationYear" value="Año de Publicación" className="text-xl"
                />
                <TextInput id="PublicationYear" type="text" disabled
                  {...register("PublishedYear")}
                />
              </span>
              <span>
                <Label htmlFor="category" value="Categoría de estante" className="text-xl"/>
                <TextInput id="category" type="text" 
                  {...register("ShelfCategory")}
                />
              </span>
              <span>
                <Label className="text-xl" htmlFor="ConditionRating" value="Condición del libro"
                />
                <Select id="BookCondition" {...register("BookConditionRating")}>
                  <option value="1">Pendiente de evaluación</option>
                  <option value="2">Bueno</option>
                  <option value="3">Medio</option>
                  <option value="4">Malo</option>
                </Select>
              </span>
              <span>
                <Label htmlFor="Observation" value="Observaciones" className="text-xl"
                />
                <TextInput id="Observation" type="text" 
                  {...register("Observations")}
                />
              </span>
              <div className=" flex flex-col">
               <ConfirmButton text="Guardar Cambios"/>
              </div>
            </fieldset>
          </form>
        </div>
      </>
  )
}

export default EditBookInformation
