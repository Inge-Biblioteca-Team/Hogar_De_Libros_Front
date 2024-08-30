import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { Book } from "../type/Book";
import { useEffect, useState } from "react";
import {
  HomeRoute,
  BooksRoute,
  CurrentRoute,
  ManageRoute,
} from "../components/Redirections";
import UseCreateNewBook from "../Hooks/UseCreateNewBook";
import ConfirmButton from "../../../components/ConfirmButton";
import ModalAddImage from "../components/Modals/ModalAddImage";

const NewBook = () => {
  const { register, setValue, watch, handleSubmit, reset } = useForm<Book>();
  const { mutate: createBook} = UseCreateNewBook();

  const [showModal, setShowModal] = useState(false);
  
  const handleImageSelect = (url: string) => {
    setValue("Cover", url);
    setShowModal(false);
  };

  const onSubmit = (NewBookData: Book) => {
    setValue("Status", true);
    console.table(NewBookData);
    createBook(NewBookData);
    reset();
    setValue(
      "Cover",
      "https://linamed.com/wp-content/themes/dfd-native/assets/images/no_image_resized_675-450.jpg"
    );
  };

  useEffect(() => {
    setValue(
      "Cover",
      "https://linamed.com/wp-content/themes/dfd-native/assets/images/no_image_resized_675-450.jpg"
    );
  }, [setValue]);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeRoute />
        <ManageRoute />
        <BooksRoute />
        <CurrentRoute CurrentPage={"Añadir Libro"} />
      </Breadcrumb>
      <div className="w-full flex place-content-center pt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-14 w-4/5 text-2xl grid-cols-3 "
          style={{ gridTemplateColumns: "" }}
        >
          <fieldset className="flex-none w-full">
            <legend className=" pb-3 font-bold ">Caratula del libro</legend>
            <figure className="relative ">
              <img
                className="rounded-xl shadow-xl w-full"
                style={{
                  height: "22.8em",
                  maxHeight: "22.8em",
                  zIndex: "88888",
                }}
                src={watch("Cover")}
                alt="Seleccionar una imagen"
              />
              <figcaption
                className="absolute"
                style={{ top: "90%", right: "0" }}
              >
                <ModalAddImage
                  showModal={showModal}
                  onCloseModal={() => setShowModal(false)}
                  onImageSelect={handleImageSelect}
                />
                <Button className=" rounded-none rounded-s-md" onClick={() => setShowModal(true)}>
                  Cambiar Imagen
                </Button>
                <TextInput
                  type="text"
                  className="hidden"
                  placeholder="Introduce la URL de la imagen"
                  {...register("Cover")}
                />
              </figcaption>
            </figure>
          </fieldset>

          <fieldset className=" flex flex-col gap-7">
            <legend className=" pb-3 font-bold">
              Información básica del libro
            </legend>
            <span>
              <Label
                htmlFor="title"
                value="Título del Libro"
                className="text-xl"
              />
              <TextInput
                id="title"
                type="text"
                required
                {...register("Title")}
              />
            </span>
            <span>
              <Label htmlFor="author" value="Autor" className="text-xl" />
              <TextInput
                id="author"
                type="text"
                required
                {...register("Author")}
              />
            </span>
            <span>
              <Label htmlFor="ISBN" value="ISBN" className="text-xl" />
              <TextInput id="ISBN" type="text" {...register("ISBN")} />
            </span>
            <span>
              <Label
                htmlFor="InscriptionCode"
                value="Código de Inscripción"
                className="text-xl"
              />
              <TextInput
                id="InscriptionCode"
                type="text"
                {...register("InscriptionCode")}
              />
            </span>
            <span>
              <Label
                htmlFor="SignatureCode"
                value="Código de Signatura"
                className="text-xl"
              />
              <TextInput
                id="SignatureCode"
                type="text"
                {...register("SignatureCode")}
              />
            </span>
            <span>
              <Checkbox id="Reserva" {...register("ReserveBook")} />
              <Label
                htmlFor="Reserva"
                value="Libro de Reserva"
                className="text-xl"
              />
            </span>
          </fieldset>

          <fieldset className=" flex flex-col gap-7 ">
            <legend className=" pb-3 font-bold ">Detalles adicionales</legend>
            <span>
              <Label
                htmlFor="category"
                value="Categoría de estante"
                className="text-xl"
              />
              <TextInput
                id="category"
                type="text"
                {...register("ShelfCategory")}
              />
            </span>
            <span>
              <Label
                htmlFor="PublicationYear"
                value="Año de Publicación"
                className="text-xl"
              />
              <TextInput
                id="PublicationYear"
                type="text"
                {...register("PublishedYear")}
              />
            </span>
            <span>
              <Label
                htmlFor="Editorial"
                value="Editorial"
                className="text-xl"
              />
              <TextInput
                id="Editorial"
                type="text"
                {...register("Editorial")}
              />
            </span>
            <span>
              <Label
                className="text-xl"
                htmlFor="ConditionRating"
                value="Condición del libro"
              />
              <Select id="BookCondition" {...register("BookConditionRating")}>
                <option value={1}>Pendiente de evaluación</option>
                <option value={2}>Bueno</option>
                <option value={3}>Medio</option>
                <option value={4}>Malo</option>
              </Select>
            </span>
            <span>
              <Label
                htmlFor="Observation"
                value="Observaciones"
                className="text-xl"
              />
              <TextInput
                id="Observation"
                type="text"
                {...register("Observations")}
              />
            </span>
            <div className=" flex flex-col">
              <ConfirmButton text="Guardar Libro" />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default NewBook;
