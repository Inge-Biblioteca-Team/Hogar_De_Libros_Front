import {
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { ModalOpen } from "../../../../Types/GlobalTypes";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import OptMainCategory from "../OptMainCategory";
import OptSubCategory from "../OptSubCategory";
import { MdQuestionMark } from "react-icons/md";
import toast from "react-hot-toast";
import UseSendColaborator from "../../Hooks/UseSendColaborator";
import { CreateNewColaborator } from "../../Types/ColaboratorTypes";
import { TbHelpSquareRounded } from "react-icons/tb";
import InfoColaborador from "./InfoColaborador";
import { formatToYMD } from "../../../../components/FormatTempo";
import UseDebounce from "../../../../hooks/UseDebounce";
import { useQuery } from "react-query";
import { User } from "../../../Users/Type/UserType";
import { GetUserInfo } from "../../../Users/Services/SvUsuer";

const FormColaborador = ({ open, setOpen }: ModalOpen) => {
  const { reset, register, handleSubmit, trigger, setValue, watch } =
    useForm<CreateNewColaborator>();

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

  const { mutate: send } = UseSendColaborator();

  const onConfirm = (data: CreateNewColaborator) => {
    send(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const [experience, setExperience] = useState<boolean>(false);
  const [institutional, setInstitutional] = useState<boolean>(false);

  const minMax = formatToYMD(new Date());

  return (
    <Modal show={open} onClose={onClose} size={"5xl"}>
      <Modal.Header>
        Solicitud de actividad conjunta con la biblioteca
      </Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className=" grid sm:grid-cols-1 bg-white lg:grid-cols-2 gap-x-5 gap-y-4 ">
          {!secondForm && (
            <>
              <div>
                <Label value="Categoría de colaboración" />
                <Select
                  {...register("PrincipalCategory", { required: true })}
                  required
                >
                  <OptMainCategory />
                </Select>
              </div>
              <div>
                <Label value="Sub categoría de colaboración" />
                <Select
                  {...register("SubCategory", { required: true })}
                  required
                >
                  <OptSubCategory />
                </Select>
              </div>
              <div>
                <Label value=" Numero de cédula" />
                <TextInput
                  {...register("UserCedula", { required: true })}
                  required
                  placeholder="Sin guiones"
                  type="number"
                />
              </div>

              <div className="">
                <Checkbox
                  color={"blue"}
                  onChange={(event) => setInstitutional(event.target.checked)}
                />
                <Label className=" ml-2" value="Actividad institucional" />
                <TextInput
                  {...register("Entitycollaborator")}
                  placeholder="Nombre de la institución"
                  disabled={!institutional}
                />
              </div>

              <div>
                <Label value="Género" />
                <Select
                  {...register("UserGender", { required: true })}
                  required
                >
                  <option value="">Seleccione el genero</option>
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
                <Label value="Correo electronico" />
                <TextInput
                  {...register("UserEmail", { required: true })}
                  type="email"
                  required
                  placeholder="tuCorreo@example.com"
                />
              </div>
            </>
          )}
          {secondForm && (
            <>
              <div>
                <Checkbox
                  color={"blue"}
                  onChange={(event) => setExperience(event.target.checked)}
                />
                <Label
                  className="ml-2"
                  value="Experiencia previa en el area seleccionada"
                />
                <TextInput
                  {...register("Experience")}
                  disabled={!experience}
                  placeholder="Ej. Maestrías, Licenciaturas, Bachillerato etc..."
                />
              </div>
              <div>
                <Label value="Fecha tentativa para la actividad" />
                <TextInput
                  {...register("activityDate")}
                  type="date"
                  required
                  min={minMax}
                />
              </div>
              <div>
                <Label value="Descripción de la actividad" />
                <Textarea
                  rows={10}
                  {...register("Description")}
                  required
                  placeholder="Por favor, proporcione una descripción sobre la actividad propuesta, es de suma importancia este apartado."
                />
              </div>
              <div className=" flex flex-col gap-3">
                <div>
                  <Label value="Materiales requeridos para la actividad" />
                  <TextInput {...register("ExtraInfo")} 
                  placeholder="En caso de requerir materiales"/>
                </div>

                <div className="flex flex-col custom-file-input">
                  <label
                    htmlFor="documentUpload"
                    className="mb-1 text-sm font-medium flex"
                  >
                    {" "}
                    Archivos requeridos:{" "}
                    <MdQuestionMark color="red" size={18} />
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
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className=" flex bg-white items-center justify-between">
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
              <Button color={"red"} tabIndex={2}  onClick={onReturn}>
                Anterior
              </Button>
              <Button color={"blue"} type="submit">
                Confirmar
              </Button>
            </>
          )}
          <InfoColaborador>
            <button type="button" title="ayuda">
              <TbHelpSquareRounded size={30} />
            </button>
          </InfoColaborador>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default FormColaborador;
