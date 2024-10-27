import { FloatingLabel, Label, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Advice } from "../../Types/Advice";
import OptAdviceCategory from "../OptAdviceCategory";
import ModalButtons from "../../../../components/BTNS/ModalButtons";
import UseCreateAdvice from "../../Hooks/UseCreteAdvice";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import UseUploadImage from "../../Hooks/UseUploadImage";
import {formatToYMD } from "../../../../components/FormatTempo";

const NewAdvice = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {

  const min = formatToYMD(new Date());

  const { register, reset, handleSubmit, setValue } = useForm<Advice>();
  const { mutate: createAdvice } = UseCreateAdvice();

  const onSubmit = useCallback((data: Advice) => {
    createAdvice(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  }, [createAdvice, reset, setOpen]);
  
  const handleImageSelect = useCallback((url: string) => {
    setImageUrl(url);
    setValue("image", url);
  }, [setValue]);

  const { mutate: uploadImage } = UseUploadImage();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [localImage, setLocalImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const imageURL = URL.createObjectURL(uploadedFile);
      setLocalImage(imageURL);
    }
  }, []);

  const handleConfirmLocalImage = useCallback(async () => {
    if (file) {
      uploadImage(file, {
        onSuccess: (filePath: string) => {
          handleImageSelect(filePath);
          setLocalImage(null);
          setFile(null);
          setOpenImage(false);
        },
      });
    }
  }, [file, handleImageSelect, uploadImage]);

  const onExistImageSelect = useCallback((image: string) => {
    setImageUrl(image);
    setValue("image", image);
    setOpenImage(false);
  }, [setValue]);

  const handleClose = useCallback(() => {
    setOpenImage(false);
    setLocalImage("");
  }, []);

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Generar nuevo aviso</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className="">
          <fieldset>
            <legend className="mb-2 font-bold">Imagen del aviso</legend>
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
          </fieldset>
          <div className=" flex flex-col justify-between gap-3">
            <fieldset className="my-2 font-bold">
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
        <ModalButtons setOpen={setOpen} />
      </form>
      <ModalAddNewImage
        text="del aviso"
        open={openImage}
        localImage={localImage}
        handleUpload={handleImageUpload}
        handleConfirmImage={handleConfirmLocalImage}
        onExistImageSelect={onExistImageSelect}
        handleClose={handleClose}
      />
    </Modal>
  );
};

export default NewAdvice;
