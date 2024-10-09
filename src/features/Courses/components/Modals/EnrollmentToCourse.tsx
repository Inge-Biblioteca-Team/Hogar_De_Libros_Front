import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Enrollment } from "../../types/Enroll";
import UseEnrollToCourse from "../../Hooks/UseEnrollToCourse";
import { NextCourses } from "../../types/Courses";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../../../Users/Type/UserType";
import { useQuery } from "react-query";
import { GetUserData } from "../../services/SvCourses";

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

  const { mutate: EnrollMe } = UseEnrollToCourse();

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
    }
  }, [User, setValue]);

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
      <Modal.Header>Matricula de Curso</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className=" flex flex-col gap-2">
          {course.materials == "" ? (
            ""
          ) : (
            <span className=" font-bold">
              Te recordamos que para el curso {course.courseName} necesitaras lo
              siguiente: {course.materials}{" "}
            </span>
          )}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label
                htmlFor="Cedula"
                value="Cédula  de la persona asistente al curso"
              />
              <TextInput
                id="Cedula"
                placeholder="Cedula"
                onChange={handleCedula}
              />
            </div>
            <div>
              <Label htmlFor="name" value="Nombre" />
              <TextInput
                id="name"
                placeholder="Nombre"
                {...register("UserName")}
              />
            </div>
            <div>
              <Label htmlFor="direcction" value="Lugar de residencia" />
              <TextInput
                id="direcction"
                placeholder="Lugar"
                {...register("direction")}
              />
            </div>
            <div>
              <Label htmlFor="email" value="Correo" />
              <TextInput
                id="emai"
                placeholder="Correo"
                {...register("email")}
              />
            </div>
            <div>
              <Label htmlFor="phone" value="Teléfono" />
              <TextInput
                id="phone"
                placeholder="Teléfono"
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
        <Modal.Footer className=" flex items-center justify-center">
          <Button color={"failure"} tabIndex={2} onClick={handleClose}>
            Cancelar
          </Button>
          <Button color={"blue"} type="submit">
            Confirmar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default EnrollmentToCourse;
