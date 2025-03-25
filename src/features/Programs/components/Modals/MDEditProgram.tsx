import { Modal, Label, Textarea, TextInput } from "flowbite-react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Program } from "../../types/Programs";
import { useForm } from "react-hook-form";
import UseeditProgram from "../../Hooks/UseeditProgram";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import ModalFooters from "../../../../components/ModalFooters";

const MDEditProgram = ({
  open,
  setOpen,
  program,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  program: Program;
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<Program>({
    defaultValues: {
      programName: program.programName,
      description: program.description,
      image: program.image,
      status: program.status,
      programsId: program.programsId,
    },
  });

  const { mutate: EditProgram, isLoading } = UseeditProgram();

  const onSubmit = async (data: Program) => {
    EditProgram(data, {
      onSuccess: () => {
        setOpen(false);
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
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  useEffect(() => {
    const initialImageUrl = program.image;
    setImageUrl(initialImageUrl);
  }, [program.image]);

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)}>
        <Modal.Header className="dark:bg-neutral-900">Editar información del programa</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="dark:bg-[#2d2d2d] grid max-sm:grid-cols-1 grid-cols-3 grid-rows-1 gap-3">
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
              </div>
            </div>
          </Modal.Body>
          <ModalFooters onClose={onClose} isLoading={isLoading} />
        </form>
      </Modal>
      <ModalAddNewImage
        open={openImage}
        text="del aviso"
        Folder="Avisos"
        onSelectImage={handleImageSelect}
        onClose={handleClose}
      />
    </>
  );
};

export default MDEditProgram;
