import { Checkbox, FloatingLabel, Label, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import ModalFooters from "../../../../components/ModalFooters";
import ModalImageLoader from "./ModalImageLoader";
import { Book } from "../../Types/BooksTypes";
import OpsCoditions from "../../../../components/OptsConditions";
import OptsCateogry from "../OptsCategories";
import UseCreateBook from "../../Hooks/UseCreateBook";

const MDNewBook = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, reset, watch, setValue, handleSubmit } = useForm<Book>();

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

  const { mutate: createNew, isLoading } = UseCreateBook();

  const onConfirm = (data: Book) => {
    createNew(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal  show={open} onClose={onClose} size={"5xl"}>
      <Modal.Header className="dark:bg-neutral-900">Añadir libro a la colección</Modal.Header>

      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d] grid bg-white  grid-cols-1 lg:grid-cols-3 gap-4">
          <fieldset>
            <legend className="mb-2  text-center">Imagen del libro</legend>
            <div>
              <figure className="w-full lg:h-full">
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
                Información del libro
              </legend>
              <div className=" grid grid-cols-2 gap-4 ">
                <FloatingLabel
                className="dark:text-white"
                  variant="outlined"
                  label="Título del libro"
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
                  required
                  type="number"
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
                  {...register("signatureCode")}
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
                    required
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
                    <OptsCateogry />
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

export default MDNewBook;
