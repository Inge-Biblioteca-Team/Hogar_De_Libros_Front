import { Label, Modal, TextInput, Select, Button, Spinner, Popover } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NewDonation } from "../../Types/DonationType";
import UseCreateDonation from "../../Hooks/UseCreateDonation";
import { formatToYMD } from "../../../../components/FormatTempo";
import { ModalOpen } from "../../../../Types/GlobalTypes";
import { MdOutlineError, MdQuestionMark } from "react-icons/md";
import { TbHelpSquareRounded } from "react-icons/tb";
import InfoDonation from "./InfoDonation";
import { useQuery } from "react-query";
import UseDebounce from "../../../../hooks/UseDebounce";
import { GetUserInfo } from "../../../Users/Services/SvUsuer";
import { User } from "../../../Users/Type/UserType";
import OptDonMainCategories from "../OptDonMainCategories";
import { PiKeyReturn } from "react-icons/pi";

const FormDonaciones = ({ open, setOpen }: ModalOpen) => {
  const { reset, register, handleSubmit, setValue, watch, formState: { errors }, trigger } =
    useForm<NewDonation>({mode: "onChange",});

  const cedula = UseDebounce(watch("UserCedula"), 1000);
  const [idType, setIdType] = useState("");

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

  const { mutate: send, isLoading } = UseCreateDonation();

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
      <Modal.Header className="dark:bg-neutral-900">
        <div>Propuesta de donación</div>
      </Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d] grid grid-cols-1 bg-white lg:grid-cols-2 gap-x-5 gap-y-4 ">
          <>
            <div>
              <Label value="Tipo de artículo a donar" />
              <Select {...register("SubCategory")} required>
                <OptDonMainCategories />
              </Select>
            </div>

            <div>
              <Label htmlFor="IDNumber"
                value={idType === "number" ? "Número de cédula" : "Número de pasaporte"}
              />{" "}
              {idType == "" ? (
                <Select onChange={(event) => setIdType(event.target.value)}>
                  <option value="">Seleccione el tipo de identificacion</option>
                  <option value="number">Cedula nacional</option>
                  <option value="text">Pasaporte u otro</option>
                </Select>
              ) : (
                <div className=" relative">
                  <TextInput
                    id="IDNumber"
                    placeholder={
                      idType === "number" ? "Sin guiones" : "Ej. A1234567"
                    }
                    type="text"
                    inputMode={idType === "number" ? "numeric" : "text"}
                    {...register("UserCedula", {
                      required: "Este campo es obligatorio",
                      pattern: {
                        value:
                          idType === "number"
                            ? /^\d{9}$/
                            : /^[A-Za-z0-9]+$/,
                        message:
                          idType === "number"
                            ? "La cédula debe tener exactamente 9 dígitos sin guiones"
                            : "El pasaporte solo debe contener letras y números",
                      },
                    })}
                    onChange={(e) => {
                      setValue("UserCedula", e.target.value);
                      trigger("UserCedula");
                    }}
                  />
                  {errors.UserCedula && (
                    <Popover
                      trigger="hover"
                      placement="top"
                      content={
                        <div className="bg-slate-50 text-red-600 p-2 text-sm">
                          {errors.UserCedula.message}
                        </div>
                      }
                      className="z-10"
                    >
                      <span className="absolute right-2 top-10 text-red-600 cursor-pointer max-sm:right-10">
                        <MdOutlineError />
                      </span>
                    </Popover>
                  )}
                  <PiKeyReturn
                    onClick={() => setIdType("")}
                    className="absolute top-3 right-2 cursor-pointer hover:text-blue-500"
                    size={20}
                    title="Volver a seleccionar tipo de identificacion"
                  />
                </div>
              )}
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
                placeholder="Número de teléfono"
              />
            </div>

            <div>
              <Label value="Correo eléctronico" />
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
                className="dark:bg-[#2d2d2d] block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <Label value="Estado del articulo" />
              <Select {...register("ResourceCondition")}>
                <option value="">
                  Seleccione el estado del artículo a donar
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
        <Modal.Footer className="dark:bg-[#2d2d2d] flex bg-white items-center justify-between">
          <div></div>
          <Button color={"red"} tabIndex={2} onClick={onClose} disabled={isLoading}>
            Cancelar
          </Button>
          <Button color={"blue"} type="submit" disabled={isLoading}>
            {isLoading ? (
              <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
            ) : (
              "Confirmar"
            )}
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
