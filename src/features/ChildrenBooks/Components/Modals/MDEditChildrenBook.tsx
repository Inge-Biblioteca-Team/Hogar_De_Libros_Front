import { Modal, FloatingLabel, Label, Select, Checkbox } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import ModalFooters from "../../../../components/ModalFooters";
import { BookC } from "../../Types/BooksChildrensTypes";
import OpsCoditions from "../OpsCoditions";
import OptsCateogryChildren from "../OptsCateogryChildren";
import ModalImageLoader from "./ModalImageLoader";
import UseEditChildrenBook from "../../Hooks/UseEditChildrenBook";

const MDEditChildrenBook = ({
  open,
  setOpen,
  book,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  book: BookC;
}) => {
  const { register, reset, watch, setValue, handleSubmit } = useForm<BookC>({
    defaultValues: {
      Title: book.Title,
      Author: book.Author,
      Editorial: book.Editorial || "",
      PublishedYear: book.PublishedYear,
      ISBN: book.ISBN || "",
      ShelfCategory: book.ShelfCategory || "",
      Cover: book.Cover || "",
      BookConditionRating: book.BookConditionRating || 0,
      SignatureCode: book.SignatureCode || "",
      InscriptionCode: book.InscriptionCode || "",
      Observations: book.Observations || "",
      ReserveBook: book.ReserveBook || false,
      BookCode: book.BookCode,
    },
  });

  const onClose = () => {
    setOpen(false);
    reset();
  };

  const [openImageM, setOpenImageM] = useState<boolean>(false);
  const image = watch("Cover");

  const selectImage = (url: string) => {
    setValue("Cover", url);
    setOpenImageM(false);
  };

  const { mutate: editResource, isLoading } = UseEditChildrenBook();

  const onConfirm = (data: BookC) => {
    editResource(data, {
      onSuccess: () => {
        onClose();
        reset()
      },
    });
  };


  return (
    <Modal  show={open} onClose={onClose} size={"5xl"}>
      <Modal.Header className="dark:bg-neutral-900">Añadir libro a la colección</Modal.Header>

      <form onSubmit={handleSubmit(onConfirm)} >
        <Modal.Body className="dark:bg-[#2d2d2d] grid grid-cols-1 lg:grid-cols-3 bg-white gap-4">
          <fieldset>
            <legend className="mb-2  text-center">Imagen del recurso</legend>
            <div>
              <figure>
                {image ? (
                  <img
                    title="Click para editar la imagen"
                    className=" rounded-md"
                    style={{ height: "26.5rem", width: "100%" }}
                    src={image}
                    alt=""
                    onClick={() => setOpenImageM(true)}
                  />
                ) : (
                  <div
                    style={{ height: "26.5rem", width: "100%" }}
                    className=" border border-dashed border-black
                         rounded-md
                    flex items-center justify-center"
                    onClick={() => setOpenImageM(true)}
                  >
                    <span>Seleccionar imagen</span>
                  </div>
                )}
              </figure>
            </div>
          </fieldset>
          <div className="col-span-2">
            <fieldset>
              <legend className="mb-2 text-center">
                Información del recurso
              </legend>
              <div className=" grid grid-cols-2 gap-4 ">
                <FloatingLabel
                  variant="outlined"
                  className="dark:text-white"
                  label="Título del recurso"
                  {...register("Title")}
                  required
                />
                <FloatingLabel
                  variant="outlined"
                  className="dark:text-white"
                  label="Autor"
                  {...register("Author")}
                  required
                />
                <FloatingLabel
                  variant="outlined"
                  className="dark:text-white"
                  label="Editorial"
                  {...register("Editorial")}
                />
                <FloatingLabel
                  variant="outlined"
                  className="dark:text-white"
                  label="Año de publicación"
                  {...register("PublishedYear")}
                  type="number"
                  required
                />
                <FloatingLabel
                  variant="outlined"
                  className="dark:text-white"
                  label="ISBN"
                  {...register("ISBN")}
                />
                <FloatingLabel
                  variant="outlined"
                  className="dark:text-white"
                  label="Código de signatura"
                  {...register("SignatureCode")}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend className=" text-center mb-2 pt-3">
                Información extra
              </legend>
              <div className=" grid grid-cols-2 gap-4">
                <FloatingLabel
                className="dark:text-white whitespace-nowrap"
                  variant="outlined"
                  label="Código de inscripción"
                  {...register("InscriptionCode")}
                />
                <FloatingLabel
                  variant="outlined"
                  className="dark:text-white"
                  label="Observaciones"
                  {...register("Observations")}
                />
                <div>
                  <Label value="Estado del libro" />
                  <Select
                    className="custom-Select "
                    {...register("BookConditionRating")}
                  >
                    <OpsCoditions />
                  </Select>
                </div>
                <div>
                  <Label value="Categoría de estante" />
                  <Select
                    className="custom-Select "
                    {...register("ShelfCategory")}
                    required
                  >
                    <OptsCateogryChildren />
                  </Select>
                </div>
                <div className=" ">
                  <Checkbox {...register("ReserveBook")} />
                  <Label value=" Libro de reserva" />
                </div>
              </div>
            </fieldset>
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
        <ModalImageLoader
          setOpen={setOpenImageM}
          open={openImageM}
          selectImage={selectImage}
        />
      </form>
    </Modal>
  );
};

export default MDEditChildrenBook;
