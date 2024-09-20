import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Button,
  Checkbox,
  Label,
  Card,
  Select,
  Popover,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import UseRegister from "../Hooks/UseRegister";
import { RegisterInfo } from "../Type/UserType";
import toast from "react-hot-toast";
import { MdOutlineError } from "react-icons/md";
const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<RegisterInfo>({ mode: "onChange" });

  const password = watch("password");

  const { mutate: signUp } = UseRegister();

  const onSubmit = (data: RegisterInfo) => {
    console.log(data);
    signUp(data);
  };
  const handleValidationErrors = async () => {
    const result = await trigger();
    if (!result) {
      toast.error(
        "Por favor, corregir los errores antes de enviar el formulario"
      );
    }

    return result;
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-8">
      <Card className="max-w-screen-lg w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Registro de usuario
            </h2>
            <p className="text-sm mb-4">
              ¿Posees una cuenta?{" "}
              <a
                href="/IniciarSesion"
                className="text-blue-500 hover:underline"
              >
                Inicia Sesión aquí.
              </a>
            </p>

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();

                const isValid = await handleValidationErrors();

                if (isValid) {
                  handleSubmit(onSubmit)();
                }
              }}
            >
              <fieldset className=" grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="IDNumber" value="Número de Cédula" />{" "}
                  <TextInput
                    id="IDNumber"
                    inputMode="numeric"
                    type="text"
                    pattern="[0-9]*"
                    required
                    {...register("cedula")}
                  />
                </div>
                <div>
                  <Label htmlFor="Name" value="Nombre" />
                  <TextInput id="Name" required {...register("name")} />
                </div>
                <div>
                  <Label htmlFor="LastName" value="Apellidos" />
                  <TextInput id="LastName" required {...register("lastName")} />
                </div>
                <div>
                  <Label htmlFor="BirthDate" value="Fecha de Nacimiento" />
                  <TextInput
                    id="BirthDate"
                    type="date"
                    required
                    {...register("birthDate")}
                  />
                </div>
                <div>
                  <Label htmlFor="Gender" value="Género" />
                  <Select id="Gender" required {...register("gender")}>
                    <option value="" disabled>
                      Selecciona tu género
                    </option>
                    <option value="H">Hombre</option>
                    <option value="M">Mujer</option>
                    <option value="Otros">Otros</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="Province" value="Provincia" />
                  <TextInput id="Province" required {...register("province")} />
                </div>
              </fieldset>

              <fieldset className=" grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="District" value="Cantón" />
                  <TextInput id="District" required {...register("district")} />
                </div>
                <div>
                  <Label htmlFor="Address" value="Dirección" />
                  <TextInput id="Address" required {...register("address")} />
                </div>
              </fieldset>
              <fieldset className=" grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="PhoneNumber" value="Teléfono" />
                  <TextInput
                    id="PhoneNumber"
                    inputMode="numeric"
                    type="number"
                    pattern="[0-9]*"
                    required
                    {...register("phoneNumber")}
                  />
                </div>
                <div>
                  <Label htmlFor="Email" value="Correo" />
                  <TextInput
                    id="Email"
                    type="email"
                    required
                    {...register("email")}
                  />
                </div>

                <div className="relative" >
                  <Label htmlFor="Password" value="Contraseña" />
                  <TextInput
                    id="Password"
                    type="password"
                    required
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                      minLength: {
                        value: 8,
                        message:
                          "La contraseña debe tener al menos 8 caracteres",
                      },
                      pattern: {
                        value: /^[A-Za-z0-9]+$/,
                        message:
                          "La contraseña solo puede contener letras y números",
                      },
                    })}
                    className={`border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-lg`}
                  />
                   {errors.password && (
                    <Popover
                      trigger="hover"
                      placement="top"
                      content={
                        <div className="bg-slate-50 text-red-600 p-1 text-sm">
                          {errors.password.message}
                        </div>
                      }
                      className="z-10"
                    >
                      <span className="absolute left-52 top-10 text-red-600 cursor-pointer">
                        <MdOutlineError />
                      </span>
                    </Popover>
                  )}
                </div>
                <div className=" relative">
                  <Label
                    htmlFor="repeatPassword"
                    value="Repita la Contraseña"
                  />
                  <TextInput
                    id="repeatPassword"
                    type="password"
                    className={`border ${
                      errors.repeatPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg `}
                    required
                    {...register("repeatPassword", {
                      required: "Debe repetir la contraseña",
                      validate: (value) => {
                        if (value !== password) {
                          return "Las contraseñas no coinciden";
                        }
                        return true;
                      },
                    })}
                  />
                  {errors.repeatPassword && (
                    <Popover
                      trigger="hover"
                      placement="top"
                      content={
                        <div className="bg-slate-50 text-red-600 p-2 text-sm ">
                          {errors.repeatPassword.message}
                        </div>
                      }
                      className="z-10"
                    >
                      <span className="absolute left-52 top-10 text-red-600 cursor-pointer">
                        <MdOutlineError />
                      </span>
                    </Popover>
                  )}
                </div>
              </fieldset>
              <div className="flex items-center">
                <Checkbox
                  id="AcceptTermsAndConditions"
                  required
                  {...register("acceptTermsAndConditions")}
                />
                <Label htmlFor="AcceptTermsAndConditions" className="ml-2">
                  Acepto los{" "}
                  <a href="" className=" hover:text-Body">
                    {" "}
                    Términos y Condiciones
                  </a>
                </Label>
              </div>

              <div className="flex justify-between">
                <Button
                  tabIndex={2}
                  type="button"
                  color="failure"
                  onClick={() => navigate("/HogarDeLibros")}
                >
                  Cancelar
                </Button>
                <Button type="submit" color="blue">
                  Confirmar
                </Button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 p-6 flex justify-center items-center">
            <div className="text-center">
              <h6 className="text-lg font-bold text-blue-600 mb-4">
                Biblioteca Pública Municipal de Nicoya
              </h6>
              <img
                src="src/Assets/young-woman.jpg"
                alt="Mujer leyendo"
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
