import {
  Label,
  Modal,
  TextInput,
  Select,
  Button,
  Checkbox,
  Textarea,
  Popover,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateFriends } from "../../types/InfoAmiguitos";
import { ModalOpen } from "../../../../Types/GlobalTypes";
import toast from "react-hot-toast";
import UseCreateFriend from "../../Hooks/UseCreateFriend";
import OPTCategories from "../OPTCategories";
import OPTSubCategories from "../OPTSubCategories";
import { MdOutlineError, MdQuestionMark } from "react-icons/md";
import { TbHelpSquareRounded } from "react-icons/tb";
import InfoAmigos from "../Popover/InfoAmigos";
import { formatToYMD } from "../../../../components/FormatTempo";
import { useQuery } from "react-query";
import { GetUserInfo } from "../../../Users/Services/SvUsuer";
import { User } from "../../../Users/Type/UserType";
import UseDebounce from "../../../../hooks/UseDebounce";
import { PiKeyReturn } from "react-icons/pi";

const MainFormAmigos = ({ open, setOpen }: ModalOpen) => {
  const { reset, register, handleSubmit, trigger, setValue, watch, formState: { errors } } =
    useForm<CreateFriends>({mode: "onChange",});

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
      setValue("UserGender", User.gender);
    }
  }, [User, setValue]);

  const onClose = () => {
    setOpen(false);
    reset();
    setSecondForm(false);
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

  const [secondForm, setSecondForm] = useState<boolean>(false);

  const onFill = async () => {
    const isValid = await trigger();
    if (isValid) {
      setSecondForm(true);
    } else {
      toast.error("Favor completar todos los campos.");
    }
  };

  const onReturn = () => {
    setSecondForm(false);
  };

  const { mutate: send, isLoading } = UseCreateFriend();

  const onConfirm = (data: CreateFriends) => {
    send(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const [experience, setExperience] = useState<boolean>(false);

  const minMax = formatToYMD(new Date());

  return (
    <Modal show={open} onClose={onClose} size={"5xl"}>
      <Modal.Header className="dark:bg-neutral-900">
        <div>Solicitud de amigo de la biblioteca</div>
      </Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d] grid sm:grid-cols-1 bg-white lg:grid-cols-2 gap-x-5 gap-y-4 ">
          {!secondForm && (
            <>
              <div>
                <Label value="Categoría de amigo" />
                <Select
                  {...register("PrincipalCategory", { required: true })}
                  required
                >
                  <OPTCategories />
                </Select>
              </div>
              <div>
                <Label value="Sub categoría de amigo" />
                <Select
                  {...register("SubCategory", { required: true })}
                  required
                >
                  <OPTSubCategories />
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
                <Label value="Género" />
                <Select
                  {...register("UserGender", { required: true })}
                  required
                >
                  <option value="">Seleccione el género</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                </Select>
              </div>

              <div>
                <Label value="Nombre completo" />
                <TextInput
                  {...register("UserFullName", { required: true })}
                  required
                  placeholder="Nombre y apellidos"
                />
              </div>

              <div>
                <Label value="Fecha de nacimiento" />
                <TextInput
                  {...register("UserBirthDate", { required: true })}
                  type="date"
                  required
                  max={minMax}
                />
              </div>

              <div>
                <Label value="Dirección de residencia" />
                <TextInput
                  {...register("UserAddress", { required: true })}
                  required
                  placeholder="Dirección exacta de residencia"
                />
              </div>

              <div>
                <Label value="Teléfono" />
                <TextInput
                  {...register("UserPhone", { required: true })}
                  type="number"
                  required
                  placeholder="Numero de teléfono"
                />
              </div>

              <div>
                <Label value="Correo electrónico" />
                <TextInput
                  {...register("UserEmail", { required: true })}
                  type="email"
                  required
                  placeholder="tuCorreo@example.com"
                />
              </div>
              <div>
                <Checkbox
                  color={"blue"}
                  onChange={(event) => setExperience(event.target.checked)}
                />
                <Label
                  className="ml-2"
                  value="Experiencia previa en el área seleccionada"
                />
                <TextInput
                  {...register("Experience")}
                  disabled={!experience}
                  placeholder="Ej. Cursos, títulos y demás etc..."
                />
              </div>
            </>
          )}
          {secondForm && (
            <>
              <div className=" flex flex-col gap-3">
                <div>
                  <Label value="Cualquier cosa que quieras consultar, puedes usar este espacio" />
                  <Textarea
                    rows={5}
                    {...register("ExtraInfo")}
                    placeholder="Recuerda que tu opinión siempre será importante para nosotros."
                  />
                </div>
              </div>
              <div className="flex flex-col custom-file-input">
                <label
                  htmlFor="documentUpload"
                  className="mb-1 text-sm font-medium flex"
                >
                  {" "}
                  Archivos opcionales: <MdQuestionMark color="red" size={18} />
                </label>
                <input
                  id="documentUpload"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  multiple
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid row-span-2 overflow-y-scroll h-20 custom-bar">
                  {uploadedFiles.map((file) => (
                    <div
                      key={file.name}
                      className="flex justify-between items-center"
                    >
                      <span>{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(file)}
                        className="text-red-500"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="dark:bg-[#2d2d2d] flex bg-white items-center justify-between">
          <div></div>
          {!secondForm && (
            <>
              <Button color={"red"} tabIndex={2} onClick={onClose}>
                Cancelar
              </Button>
              <Button color={"blue"} onClick={onFill}>
                Continuar
              </Button>
            </>
          )}
          {secondForm && (
            <>
              <Button color={"red"} tabIndex={2} onClick={onReturn}>
                Anterior
              </Button>
              <Button color={"blue"} type="submit" disabled={isLoading}>
                {isLoading ? "Cargando..." : "Enviar"}
              </Button>
            </>
          )}
          <InfoAmigos>
            <button type="button" title="ayuda">
              <TbHelpSquareRounded size={30} />
            </button>
          </InfoAmigos>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default MainFormAmigos;
