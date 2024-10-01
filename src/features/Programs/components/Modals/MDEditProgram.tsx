import { Modal, Button, Label, Textarea, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Program } from "../../types/Programs";
import { useForm } from "react-hook-form";
import UseeditProgram from "../../Hooks/UseeditProgram";
import ModalAddImage from "../../../../components/Modals/ModalAddImage";

const MDEditProgram = ({
  open,
  setOpen,
  program,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  program: Program;
}) => {
  const { register, handleSubmit, setValue } = useForm<Program>({
    defaultValues: {
      programName: program.programName,
      description: program.description,
      image: program.image,
      status: program.status,
      programsId: program.programsId,
    },
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [openImage, setOpenImage] = useState<boolean>(false);

  const handleImageSelect = (url: string) => {
    setImageUrl(url);
    setValue("image", url);
  };

  useEffect(() => {
    if (program.image) {
      setImageUrl(program.image);
    }
  }, [program.image]);

  const { mutate: EditProgram } = UseeditProgram();

  const onSubmit = async (data: Program) => {
    EditProgram(data, {
      onSuccess: () => {
        setOpen(false)
      },
      onError: () => {},
    });
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Editar Información del programa</Modal.Header>
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
          <Button color={"failure"} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button color={"blue"} type="submit">
            Confirmar
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

export default MDEditProgram;
