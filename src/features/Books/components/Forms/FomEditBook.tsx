import { Book } from "../../type/Book";
import UseEditBook from "../../Hooks/UseEditBook";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextInput, Label, Checkbox, Select } from "flowbite-react";
import ConfirmButton from "../../../../components/ConfirmButton";
import ConfirmModal from "../Modals/ConfirmModal";
import ModalAddImage from "../Modals/ModalAddImage";

const FormEditBook = ({ book, category }: { book: Book; category: string }) => {
  const { register, setValue, watch, handleSubmit } = useForm<Book>();
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
      setValue("PublishedYear", book.PublishedYear);
      setValue("ReserveBook", book.ReserveBook);
      setValue("ShelfCategory", book.ShelfCategory);
      setValue("SignatureCode", book.SignatureCode);
    }
  }, [book, setValue]);

  const { mutate: editBook } = UseEditBook();

  const [isModalOpen, setModalOpen] = useState(false);
  const [NewData, setNewData] = useState<Book | null>(null);

  const handleConfirm = () => {
    if (book?.BookCode && NewData) {
      editBook({ book: NewData, BookCode: book.BookCode, Category: category });
    }
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const onSubmit = (formData: Book) => {
    setNewData(formData);
    setModalOpen(true);
  };

  const [showModal, setShowModal] = useState(false);
  const handleImageSelect = (url: string) => {
    setValue("Cover", url);
    setShowModal(false);
  };

  return (
    <>
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
                <Button
                  className=" rounded-none rounded-s-md"
                  onClick={() => setShowModal(true)}
                >
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
            <legend className=" pb-3 font-bold">Información básica</legend>
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
                htmlFor="PublicationYear"
                value="Año de Publicación"
                className="text-xl"
              />
              <TextInput
                id="PublicationYear"
                type="number"
                min={0}
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
              {category == "books" ? (
                <Select {...register("ShelfCategory")} required>
                  <option value="">Seleccione una categoria</option>
                  <option value="Ciencias Sociales">Ciencias Sociales</option>
                  <option value="Literatura">Literatura</option>
                  <option value="Geografía">Geografía</option>
                  <option value="Artes y Recreación">Artes y Recreación</option>
                  <option value="Ciencias Naturales">Ciencias Naturales</option>
                  <option value="Filosofía y Psicología">
                    Filosofía y Psicología
                  </option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Religión">Religión</option>
                  <option value="Lenguas">Lenguas</option>
                  <option value="Obras Generales">Obras Generales</option>
                </Select>
              ) : (
                <Select {...register("ShelfCategory")} required>
                  <option value="">Seleccione una categoria</option>
                  <option value="0-5Años">0-5 Años</option>
                  <option value="+6Años">+6 Años</option>
                </Select>
              )}
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
              <Label
                className="text-xl"
                htmlFor="ConditionRating"
                value="Condición del libro"
              />
              <Select id="BookCondition" {...register("BookConditionRating")}>
                <option value={0}>Pendiente de evaluación</option>
                <option value={5}>Óptimo</option>
                <option value={4}>Bueno</option>
                <option value={3}>Regular</option>
                <option value={2}>Deficiente</option>
                <option value={1}>Deplorable</option>
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
              <ConfirmButton text="Guardar Cambios" />
            </div>
          </fieldset>
        </form>
      </div>
      {NewData && (
        <ConfirmModal
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          Book={NewData}
          Accion="Crear"
        />
      )}
    </>
  );
};

export default FormEditBook;
