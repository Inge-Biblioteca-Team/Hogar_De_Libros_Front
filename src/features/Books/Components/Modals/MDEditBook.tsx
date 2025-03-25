import { Modal, FloatingLabel, Label, Select, Checkbox } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import ModalFooters from "../../../../components/ModalFooters";
import { Book } from "../../Types/BooksTypes";
import OpsCoditions from "../../../../components/OptsConditions";
import ModalImageLoader from "./ModalImageLoader";
import UseEditBook from "../../Hooks/UseEditBook";
import { getCategoriesNames } from "../../Services/BooksServices";

const MDEditChildrenBook = ({
  open,
  setOpen,
  book,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  book: Book;
}) => {
  const { register, reset, watch, setValue, handleSubmit } = useForm<Book>({
    defaultValues: {
      Title: book.Title,
      Author: book.Author,
      Editorial: book.Editorial || "",
      PublishedYear: book.PublishedYear,
      ISBN: book.ISBN || "",
      ShelfCategory: book.ShelfCategory || "", 
      Cover: book.Cover || "",
      BookConditionRating: book.BookConditionRating || 0,
      signatureCode: book.signatureCode || "",
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

  const { mutate: editResource, isLoading } = UseEditBook();

  const onConfirm = (data: Book) => {
    editResource(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  
  const { data: categories, isLoading: loadingCategories } = useQuery<string[]>(
    ["CategoriesName"],
    getCategoriesNames, 
    {
      staleTime: Infinity,
    }
  );

  return (
    <Modal show={open} onClose={onClose} size={"5xl"}>
      <Modal.Header className="dark:bg-neutral-900">Modificar libro en la colección</Modal.Header>

      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d] grid grid-cols-1 bg-white lg:grid-cols-3 gap-4">
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
                    className="custom-Select"
                    {...register("BookConditionRating")}
                  >
                    <OpsCoditions />
                  </Select>
                </div>
                <div>
                  <Label value="Categoría de estante" />
                  {loadingCategories ? (
                    <span>Cargando categorías...</span>
                  ) : (
                    <Select
                      className="custom-Select"
                      {...register("ShelfCategory")}
                      required
                    >
                      {categories
                        ?.filter((category) => category !== "")
                        .map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                    </Select>
                  )}
                </div>
                <div className=" ">
                  <Checkbox {...register("ReserveBook")} />
                  <Label value=" Libro de reserva" />
                </div>
              </div>
            </fieldset>
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading} />
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
