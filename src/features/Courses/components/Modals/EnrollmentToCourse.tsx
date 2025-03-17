import { Label, Modal, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Enrollment } from "../../types/Enroll";
import UseEnrollToCourse from "../../Hooks/UseEnrollToCourse";
import { NextCourses } from "../../types/Courses";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../../../Users/Type/UserType";
import { useQuery } from "react-query";
import { GetUserData } from "../../services/SvCourses";
import ModalFooters from "../../../../components/ModalFooters";

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

  const handleCedula = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNCedula(event.target.value);
    setValue("userCedula", NCedula);
  };

  const { data: User } = useQuery<User, Error>(
    ["UserEnrol", NCedula],
    () => {
      return GetUserData(NCedula);
    },
    { enabled: !!NCedula }
  );

  const { register, handleSubmit, setValue, reset } = useForm<Enrollment>();

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
    <Modal show={open} onClose={handleClose}>
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
                value="Cédula de la persona que asistirá a las sesiones"
              />
              <TextInput
                id="Cedula"
                required
                placeholder="Sin guiones"
                onChange={handleCedula}
              />
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
