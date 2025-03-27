import { Button, Label, Modal, Popover, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import UseRecovery from "../Hooks/UseRecovery";
import { useForm } from "react-hook-form";
import { recovery } from "../Type/Recovery";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineError } from "react-icons/md";
import { useEffect } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface Payload extends JwtPayload {
  id: string;
  email: string;
  role: string;
}

const ChangePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<recovery>({ mode: "onChange" });

  const password = watch("newPassword");

  const { mutate: change } = UseRecovery();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get("token");
    if (tokenFromUrl) {
      try {
        const decodedToken: Payload = jwtDecode<Payload>(tokenFromUrl);
        const Tcedula = decodedToken.id;
        setValue("token", tokenFromUrl);
        setValue("cedula", Tcedula);
      } catch (error) {
        console.error("Error al decodificar el token", error);
      }
    }
  }, [location, setValue]);

  const onSubmit = (data: recovery) => {
    change(data);
  };

  const handleValidationErrors = async () => {
    const result = await trigger();
    if (!result) {
      toast.error("Por favor, corregir los errores antes de confirmar");
    }

    return result;
  };
  return (
    <div className=" h-screen w-full bg-black">
      <Modal dismissible show onClose={() => navigate("/IniciarSesion", { replace: true })}>
        <Modal.Header>Recuperación de Contraseña</Modal.Header>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const isValid = await handleValidationErrors();

            if (isValid) {
              handleSubmit(onSubmit)();
            }
          }}
        >
          <Modal.Body className=" grid grid-cols-2 gap-3">
            <div className=" relative">
              <Label htmlFor="password" value="Nueva Contraseña" />
              <TextInput
                placeholder="Nueva Contraseña"
                type="password"
                required
                {...register("newPassword", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message:
                      "La contraseña solo puede contener letras y números",
                  },
                })}
                className={`border ${
                  errors.newPassword ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
              />
              {errors.newPassword && (
                <Popover
                  trigger="hover"
                  placement="top"
                  content={
                    <div className="bg-slate-50 text-red-600 p-1 text-sm">
                      {errors.newPassword.message}
                    </div>
                  }
                  className="z-50"
                >
                  <span className="absolute left-64 top-10 text-red-600 cursor-pointer">
                    <MdOutlineError />
                  </span>
                </Popover>
              )}
            </div>
            <div className=" relative">
              <Label htmlFor="repeatPassword" value="Repita la Contraseña" />
              <TextInput
                placeholder="Repita la contraseña"
                id="repeatPassword"
                type="password"
                className={`border ${
                  errors.repeatPasword ? "border-red-500" : "border-gray-300"
                } rounded-lg `}
                required
                {...register("repeatPasword", {
                  required: "Debe repetir la contraseña",
                  validate: (value) => {
                    if (value !== password) {
                      return "Las contraseñas no coinciden";
                    }
                    return true;
                  },
                })}
              />
              {errors.repeatPasword && (
                <Popover
                  trigger="hover"
                  placement="top"
                  content={
                    <div className="bg-slate-50 text-red-600 p-2 text-sm ">
                      {errors.repeatPasword.message}
                    </div>
                  }
                  className="z-10"
                >
                  <span className="absolute left-64 top-10 text-red-600 cursor-pointer">
                    <MdOutlineError />
                  </span>
                </Popover>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer className=" flex items-center justify-center">
            <Button
              color={"red"}
              onClick={() => navigate("/IniciarSesion", { replace: true })}
            >
              Cancelar
            </Button>
            <Button color={"blue"} type="submit">
              Confirmar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ChangePassword;
