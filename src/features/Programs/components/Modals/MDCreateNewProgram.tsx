import { Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Program } from "../../types/Programs";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import UseCreateProgram from "../../Hooks/UseCreateProgram";
import ModalFooters from "../../../../components/ModalFooters";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";

const MDCreateNewProgram = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, setValue, reset, handleSubmit } = useForm<Program>();

  const { mutate: createProgram } = UseCreateProgram();

  const onSubmit = async (data: Program) => {
    createProgram(data, {
      onSuccess: () => {
        reset();
        setImageUrl("");
        setOpen(false)
      },
      onError: () => {},
    });
  };

  const [openImage, setOpenImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageSelect = useCallback(
    (url: string) => {
      setImageUrl(url);
      setValue("image", url);
      setOpenImage(false);
    },
    [setValue]
  );

  const onClose = () => {
    setOpen(false);
    reset();
    setImageUrl("");
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  return (
    <>
      <Modal show={open} onClose={onClose}>
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
                <Label>Nombre del programa</Label>
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
          <ModalFooters onClose={onClose} />
        </form>
      </Modal>
      <ModalAddNewImage
        open={openImage}
        text="del programa"
        Folder="Programa"
        onSelectImage={handleImageSelect}
        onClose={handleClose}
      />
    </>
  );
};

export default MDCreateNewProgram;
