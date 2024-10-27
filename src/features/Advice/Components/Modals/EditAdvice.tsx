import { FloatingLabel, Label, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { Advice } from "../../Types/Advice";
import OptAdviceCategory from "../OptAdviceCategory";
import UseEditAdvice from "../../Hooks/UseEditAdvice";
import UseUploadImage from "../../../../hooks/UseUploadImage";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import { formatToYMD } from "../../../../components/FormatTempo";
import ModalFooters from "../../../../components/ModalFooters";

const EditAdvice = ({
  open,
  setOpen,
  advice,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  advice: Advice;
}) => {
  const min = formatToYMD(new Date());
  const { register, handleSubmit, reset, setValue, watch } = useForm<Advice>({
    defaultValues: {
      id_Advice: advice.id_Advice,
      date: advice.date,
      category: advice.category,
      extraInfo: advice.extraInfo,
      image: advice.image,
      reason: advice.reason,
    },
  });
  const { mutate: editAdvice } = UseEditAdvice();

  const onSubmit = (data: Advice) => {
    editAdvice(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };
  const handleImageSelect = (url: string) => {
    setImageUrl(url);
    setValue("image", url);
  };

  const { mutate: uploadImage } = UseUploadImage();
  const [imageUrl, setImageUrl] = useState<string>(watch("image") || "");
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [localImage, setLocalImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const imageURL = URL.createObjectURL(uploadedFile);
      setLocalImage(imageURL);
    }
  };

  const handleConfirmLocalImage = async () => {
    if (file) {
      uploadImage(
        { image: file, folder: "Avisos" },
        {
          onSuccess: (filePath: string) => {
            handleImageSelect(filePath);
            setLocalImage(null);
            setFile(null);
            setOpenImage(false);
          },
        }
      );
    }
  };

  const onExistImageSelect = (image: string) => {
    setImageUrl(image);
    setValue("image", image);
    setOpenImage(false);
  };
  const handleClose = () => {
    setOpenImage(false);
    setLocalImage("");
  };

  const onClose = () => {
    setOpen(false);
    setImageUrl("");
    reset();
  };
  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Editar información del aviso</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className="">
          <fieldset>
            <legend className="mb-2 font-bol max-sm:hiddend">
              Imagen del aviso
            </legend>
            <figure>
              <div className="w-full flex items-center justify-center">
                {imageUrl ? (
                  <img
                    onClick={() => setOpenImage(true)}
                    src={imageUrl}
                    alt="Imagen del programa"
                    className="h-52 w-full rounded-md cursor-pointer
                     max-sm:h-32"
                  />
                ) : (
                  <div
                    onClick={() => setOpenImage(true)}
                    className="h-52 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer
                     max-sm:h-32"
                  >
                    <span>Selecciona una imagen</span>
                  </div>
                )}
              </div>
            </figure>
          </fieldset>
          <div className=" flex flex-col justify-between gap-3 max-sm:pt-2">
            <fieldset className="my-2 font-bold max-sm:hidden">
              Información del aviso
            </fieldset>
            <FloatingLabel
              variant="outlined"
              label="Motivo"
              {...register("reason")}
            />
            <FloatingLabel
              variant="outlined"
              label="Información extra"
              {...register("extraInfo")}
            />
            <FloatingLabel
              variant="outlined"
              label="Fecha"
              type="Date"
              min={min}
              {...register("date")}
            />
            <div>
              <Label value="Categoría del aviso" />
              <Select {...register("category")}>
                <OptAdviceCategory />
              </Select>
            </div>
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} />
      </form>
      <ModalAddNewImage
        Folder="Avisos"
        text="del aviso"
        open={openImage}
        handleClose={handleClose}
        localImage={localImage}
        handleUpload={handleImageUpload}
        handleConfirmImage={handleConfirmLocalImage}
        onExistImageSelect={onExistImageSelect}
      />
    </Modal>
  );
};

export default EditAdvice;
