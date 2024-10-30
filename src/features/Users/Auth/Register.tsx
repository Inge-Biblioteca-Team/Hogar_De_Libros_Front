import { Link, useNavigate } from "react-router-dom";
import {
  TextInput,
  Button,
  Checkbox,
  Label,
  Card,
  Select,
  Popover,
  Spinner,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import UseRegister from "../Hooks/UseRegister";
import { PersonData, RegisterInfo } from "../Type/UserType";
import toast from "react-hot-toast";
import { MdOutlineError } from "react-icons/md";
import OptProvincias from "../../../components/OptProvincias";
import OptCanton from "../../../components/OptCanton";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import { getUserInformationByCedula } from "../Services/SvUsuer";
import { useEffect } from "react";
const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    setValue,
  } = useForm<RegisterInfo>({ mode: "onChange" });

  const password = watch("password");

  const { mutate: signUp } = UseRegister();

  const onSubmit = (data: RegisterInfo) => {
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

  const cedula = UseDebounce(watch("cedula"), 1000);

  const { data: User, isLoading } = useQuery<PersonData>(
    ["userInformation", cedula],
    () =>
      cedula
        ? getUserInformationByCedula(cedula)
        : Promise.reject("Cedula no encontrada"),
    {
      enabled: !!cedula,
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: 1,
    }
  );

  useEffect(() => {
    if (User && User.results && User.resultcount > 0) {
      setValue("name", User.results[0].firstname || "");
      setValue("lastName", User.results[0].lastname || "");
    }
  }, [User, setValue]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-8 max-sm:p-0 max-sm:px-2">
      <Card className="max-w-screen-lg w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Registro de usuario
            </h2>
            <p className="text-sm mb-4">
              ¿Posees una cuenta?{" "}
              <Link
                to="/IniciarSesion"
                className="text-blue-500 hover:underline"
              >
                Inicia sesión aquí.
              </Link>
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
                  <Label htmlFor="IDNumber" value="Número de cédula" />{" "}
                  <TextInput
                    placeholder="Sin guiones"
                    id="IDNumber"
                    inputMode="numeric"
                    type="number"
                    pattern="^\d{9}$"
                    required
                    {...register("cedula")}
                  />
                </div>
                <div className=" relative">
                  <Label htmlFor="Name" value="Nombre" />
                  {isLoading && (
                    <Spinner
                      color="info"
                      size="xs"
                      className="absolute right-2 top-10 z-40"
                    />
                  )}
                  <TextInput
                    className="relative"
                    id="Name"
                    required
                    {...register("name")}
                    placeholder="Primer nombre"
                  />
                </div>
                <div className=" relative">
                  {isLoading && (
                    <Spinner
                      color="info"
                      size="xs"
                      className="absolute right-2 top-10 z-40"
                    />
                  )}
                  <Label htmlFor="LastName" value="Apellidos" />
                  <TextInput
                    id="LastName"
                    required
                    {...register("lastName")}
                    placeholder="Ambos apellidos"
                  />
                </div>
                <div>
                  <Label htmlFor="BirthDate" value="Fecha de nacimiento" />
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
                    <option value="">Selecciona tu género</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="Province" value="Provincia" />
                  <Select id="Province" {...register("province")} required>
                    <OptProvincias />
                  </Select>
                </div>
              </fieldset>
              <fieldset className=" grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="District" value="Cantón" />
                  <Select id="District" required {...register("district")}>
                    <OptCanton province={watch("province")} />
                  </Select>
                </div>
                <div>
                  <Label htmlFor="Address" value="Dirección" />
                  <TextInput
                    id="Address"
                    required
                    {...register("address")}
                    placeholder="Ej. 100 metros norte..."
                  />
                </div>
              </fieldset>
              <fieldset className=" grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="PhoneNumber" value="Teléfono" />
                  <TextInput
                    placeholder="Ej. +506...."
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
                    placeholder="ej@gmail.com"
                    id="Email"
                    type="email"
                    required
                    {...register("email")}
                  />
                </div>

                <div className="relative">
                  <Label htmlFor="Password" value="Contraseña" />
                  <TextInput
                    placeholder="8 caracteres, sin caracteres especiales"
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
                      <span className="absolute left-52 top-10 text-red-600 cursor-pointer max-sm:left-32">
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
                      <span className="absolute left-52 top-10 text-red-600 cursor-pointer max-sm:left-32">
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
                  <a
                    href=""
                    className=" hover:text-Body text-blue-500 hover:underline"
                  >
                    {" "}
                    términos y condiciones
                  </a>
                </Label>
              </div>

              <div className="flex justify-between">
                <Button
                  tabIndex={2}
                  type="button"
                  color="red"
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
          <div className="md:w-1/2 p-6 flex justify-center items-center max-sm:hidden">
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
