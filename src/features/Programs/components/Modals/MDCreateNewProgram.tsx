import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Program } from "../../types/Programs";
import { Dispatch, SetStateAction, useState } from "react";
import UseCreateProgram from "../../Hooks/UseCreateProgram";
import ModalAddImage from "../../../../components/Modals/ModalAddImage";

const MDCreateNewProgram = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, setValue, reset, handleSubmit } = useForm<Program>();

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [openImage, setOpenImage] = useState<boolean>(false);

  const handleImageSelect = (url: string) => {
    setImageUrl(url);
    setValue("image", url);
  };

  const { mutate: createProgram } = UseCreateProgram();

  const onSubmit = async (data: Program) => {
    createProgram(data, {
      onSuccess: () => {
        reset();
        setImageUrl("");
      },
      onError: () => {},
    });
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Crear nuevo programa</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className=" grid grid-cols-3 grid-rows-1 gap-3">
          <figure>
            <div className="w-full flex items-center justify-center">
              {imageUrl ? (
                <img
                  onClick={() => setOpenImage(true)}
                  src={imageUrl}
                  alt="Imagen del programa"
                  className="h-52 w-full rounded-md cursor-pointer"
                />
              ) : (
                <div
                  onClick={() => setOpenImage(true)}
                  className="h-52 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer"
                >
                  <span>Selecciona una imagen</span>
                </div>
              )}
            </div>
          </figure>

          
          <div className=" col-span-2 space-y-4">
            <div>
              <Label>Nombre del Programa</Label>
              <TextInput
                placeholder="Nombre del programa"
                {...register("programName")}
                required
              />
            </div>
            <div>
              <Label>Descripción del programa</Label>
              <Textarea
                placeholder="Descripción del programa"
                {...register("description")}
                rows={4}
                required
              />
              <TextInput className="hidden" {...register("image")} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          <Button color={"failure"} tabIndex={2} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button color={"blue"} type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </form>
      <ModalAddImage
        showModal={openImage}
        onImageSelect={handleImageSelect}
        onCloseModal={setOpenImage}
        text="del programa"
      />
    </Modal>
  );
};

export default MDCreateNewProgram;
