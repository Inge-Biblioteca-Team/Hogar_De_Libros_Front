import { Label, Modal, Popover, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Enrollment } from "../../types/Enroll";
import UseEnrollToCourse from "../../Hooks/UseEnrollToCourse";
import { NextCourses } from "../../types/Courses";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../../../Users/Type/UserType";
import { useQuery } from "react-query";
import { GetUserData } from "../../services/SvCourses";
import ModalFooters from "../../../../components/ModalFooters";
import { PiKeyReturn } from "react-icons/pi";
import { MdOutlineError } from "react-icons/md";

const EnrollmentToCourse = ({
  course,
  open,
  setOpen,
}: {
  course: NextCourses;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [NCedula, setNCedula] = useState<string>("");

  const { data: User } = useQuery<User, Error>(
    ["UserEnrol", NCedula],
    () => {
      return GetUserData(NCedula);
    },
    { enabled: !!NCedula }
  );
  const [idType, setIdType] = useState<string>("");

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<Enrollment>({mode: "onChange",});

  const { mutate: EnrollMe, isLoading } = UseEnrollToCourse();

  useEffect(() => {
    if (course.Id) {
      setValue("courseId", course.Id);
    }
  }, [course.Id, setValue]);
  useEffect(() => {
    if (User) {
      setValue("userCedula", User.cedula);
      setValue("UserName", User.name);
      setValue("direction", User.address);
      setValue("phone", User.phoneNumber);
      setValue("email", User.email);
      setValue("courseId", course.Id);
    }
  }, [User, course.Id, setValue]);

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = async (data: Enrollment) => {
    EnrollMe(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
      onError: () => {},
    });
  };

  return (
    <Modal dismissible show={open} onClose={handleClose}>
      <Modal.Header>Matricula de curso</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className=" flex flex-col gap-2">
          {course.materials == "" ? (
            ""
          ) : (
            <span className=" font-bold">
              Te recordamos que para el curso {course.courseName} necesitarás lo
              siguiente: {course.materials}{" "}
            </span>
          )}
          <div className="grid grid-cols-2 gap-2 max-sm:flex max-sm:flex-col">
          <div>
              <Label
                htmlFor="Cedula"
                value="Identificación de la persona que asistirá"
              />
              {idType === "" ? (
                <Select onChange={(e) => setIdType(e.target.value)} required>
                  <option value="">Seleccione tipo de identificación</option>
                  <option value="number">Cédula nacional</option>
                  <option value="text">Pasaporte u otro</option>
                </Select>
              ) : (
                <div className="relative">
                  <TextInput
                    id="Cedula"
                    required
                    type="text"
                    placeholder={idType === "number" ? "Sin espacios o guiones" : "Digite su identificación"}
                    {...register("userCedula", {
                      required: "Este campo es obligatorio",
                      pattern: {
                        value:
                          idType === "number"
                            ? /^[0-9]{9}$/
                            : /^[A-Za-z0-9]{9,14}$/,
                        message:
                          idType === "number"
                            ? "La cédula debe tener 9 dígitos numéricos"
                            : "El pasaporte debe tener entre 9 y 14 caracteres alfanuméricos",
                      },
                      onChange: (e) => {
                        const value = e.target.value;
                        setNCedula(value);
                        setValue("userCedula", value);
                      },
                    })}
                  />
                  {errors.userCedula && (
                    <Popover
                      trigger="hover"
                      placement="top"
                      content={<div className="bg-slate-50 text-red-600 p-2 text-sm">{errors.userCedula.message}</div>}
                      className="z-10"
                    >
                      <span className="absolute right-2 top-10 text-red-600 cursor-pointer">
                        <MdOutlineError />
                      </span>
                    </Popover>
                  )}
                  <PiKeyReturn
                    onClick={() => {
                      setIdType("");
                      setNCedula("");
                    }}
                    className="absolute top-3 right-2 cursor-pointer hover:text-blue-500"
                    size={20}
                    title="Volver a seleccionar tipo de identificación"
                  />
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="name" value="Nombre" />
              <TextInput
                id="name"
                required
                placeholder="Nombre completo"
                {...register("UserName")}
              />
            </div>
            <div>
              <Label htmlFor="direcction" value="Lugar de residencia" />
              <TextInput
                id="direcction"
                placeholder="Ej. 100 metros norte de..."
                {...register("direction")}
              />
            </div>
            <div>
              <Label htmlFor="email" value="Correo" />
              <TextInput
                id="email"
                required
                placeholder="ej@gmail.com"
                {...register("email")}
              />
            </div>
            <div>
              <Label htmlFor="phone" value="Teléfono" />
              <TextInput
                id="phone"
                required
                placeholder="ej. +506..."
                {...register("phone")}
              />
            </div>
            <div>
              <Label htmlFor="Ephone" value="Contacto de Emergencia" />
              <TextInput
                id="Ephone"
                placeholder="correo, Teléfono, etc..."
                {...register("ePhone")}
              />
            </div>
          </div>
        </Modal.Body>
        <ModalFooters onClose={handleClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default EnrollmentToCourse;
