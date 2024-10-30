import { Label, Modal, TextInput, Select, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NewDonation } from "../../Types/DonationType";
import UseCreateDonation from "../../Hooks/UseCreateDonation";
import { formatToYMD } from "../../../../components/FormatTempo";
import { ModalOpen } from "../../../../Types/GlobalTypes";
import { MdQuestionMark } from "react-icons/md";
import { TbHelpSquareRounded } from "react-icons/tb";
import InfoDonation from "./InfoDonation";
import { useQuery } from "react-query";
import UseDebounce from "../../../../hooks/UseDebounce";
import { GetUserInfo } from "../../../Users/Services/SvUsuer";
import { User } from "../../../Users/Type/UserType";
import OptDonMainCategories from "../OptDonMainCategories";

const FormDonaciones = ({ open, setOpen }: ModalOpen) => {
  const { reset, register, handleSubmit, setValue, watch } =
    useForm<NewDonation>();

  const cedula = UseDebounce(watch("UserCedula"), 1000);

  const { data: User } = useQuery<User>(
    ["userFill", cedula],
    () =>
      cedula ? GetUserInfo(cedula) : Promise.reject("Cedula no encontrada"),
    {
      enabled: !!cedula,
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: 1,
    }
  );

  useEffect(() => {
    if (User) {
      setValue("UserFullName", `${User.name} ${User.lastName}`);
      setValue("UserEmail", User.email);
      setValue("UserPhone", User.phoneNumber);
      setValue("UserAddress", User.address);
      setValue("UserBirthDate", User.birthDate);
    }
  }, [User, setValue]);

  const onClose = () => {
    setOpen(false);
    reset();
    setUploadedFiles([]);
  };

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray]);
      setValue("Document", [...uploadedFiles, ...filesArray]);
    }
  };

  const removeFile = (file: File) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const { mutate: send } = UseCreateDonation();

  const onConfirm = (data: NewDonation) => {
    send(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const minMax = formatToYMD(new Date());

  return (
    <Modal show={open} onClose={onClose} size={"5xl"}>
      <Modal.Header>
        <div>Propuesta de donación</div>
      </Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className=" grid grid-cols-2 gap-x-5 gap-y-4 ">
          <>
            <div>
              <Label value="Tipo de articulo a donar" />
              <Select {...register("SubCategory")} required>
                <OptDonMainCategories />
              </Select>
            </div>

            <div>
              <Label value=" Numero de cédula" />
              <TextInput
              type="number"
                {...register("UserCedula")}
                required
                placeholder="Sin guiones"
              />
            </div>

            <div>
              <Label value="Nombre completo" />
              <TextInput
                {...register("UserFullName")}
                required
                placeholder="Nombre y apellidos"
              />
            </div>

            <div>
              <Label value="Fecha de nacimiento" />
              <TextInput
                {...register("UserBirthDate")}
                type="date"
                required
                max={minMax}
              />
            </div>

            <div>
              <Label value="Dirección de residencia" />
              <TextInput
                {...register("UserAddress")}
                required
                placeholder="Dirección exacta de residencia"
              />
            </div>

            <div>
              <Label value="Teléfono" />
              <TextInput
                {...register("UserPhone")}
                type="number"
                required
                placeholder="Numero de teléfono"
              />
            </div>

            <div>
              <Label value="Correo electronico" />
              <TextInput
                {...register("UserEmail")}
                type="email"
                required
                placeholder="tuCorreo@example.com"
              />
            </div>
            <div>
              <Label value="Fecha de entrega del donativo" />
              <TextInput
                {...register("DateRecolatedDonation")}
                type="date"
                required
                min={minMax}
              />
            </div>
            <div className="flex flex-col custom-file-input">
              <label
                htmlFor="documentUpload"
                className="mb-1 text-sm font-medium flex"
              >
                {" "}
                Imágenes del articulo: <MdQuestionMark color="red" size={18} />
              </label>
              <input
                id="documentUpload"
                type="file"
                accept=".jpg,.gif,.png"
                multiple
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <Label value="Estado del articulo" />
              <Select {...register("ResourceCondition")}>
                <option value="">
                  Seleccione el estado del articulo a donar
                </option>
                <option value="en perfecto estado">En perfecto estado</option>
                <option value="Bueno">Bueno</option>
                <option value="Medio">Medio</option>
              </Select>
            </div>

            {uploadedFiles && uploadedFiles.length > 0 && (
              <div className=" grid row-span-2 overflow-y-scroll h-20 custom-bar">
                {uploadedFiles.map((image) => (
                  <div
                    key={image.name}
                    className="flex flex-col justify-between items-center"
                  >
                    <div>
                      <span>{image.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(image)}
                        className="text-red-500"
                      >
                        X
                      </button>
                    </div>
                    <figure>
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        className="h-10 w-20"
                      />
                    </figure>
                  </div>
                ))}
              </div>
            )}
          </>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-between">
          <div></div>
          <Button color={"red"} tabIndex={2}  onClick={onClose}>
            Cancelar
          </Button>
          <Button color={"blue"} type="submit">
            Confirmar
          </Button>
          <InfoDonation>
            <button type="button" title="ayuda">
              <TbHelpSquareRounded size={30} />
            </button>
          </InfoDonation>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default FormDonaciones;
