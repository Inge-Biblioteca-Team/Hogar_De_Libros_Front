import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Button,
  Checkbox,
  Label,
  Card,
  Select,
} from "flowbite-react";

const Register = () => {
  const navigate = useNavigate();

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

            <div>
              <Label htmlFor="IDNumber" value="Número de Cédula" />{" "}
              <TextInput
                id="IDNumber"
                name="IDNumber"
                inputMode="numeric"
                type="text"
                pattern="[0-9]*"
                required
              />
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="Name" value="Nombre" />
                  <TextInput id="Name" name="Name" required />
                </div>

                <div>
                  <Label htmlFor="LastName" value="Apellidos" />
                  <TextInput id="LastName" name="LastName" required />
                </div>

                <div>
                  <Label htmlFor="Email" value="Correo" />
                  <TextInput id="Email" name="Email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="PhoneNumber" value="Teléfono" />
                  <TextInput
                    id="PhoneNumber"
                    name="PhoneNumber"
                    inputMode="numeric"
                    type="number"
                    pattern="[0-9]*"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="Password" value="Contraseña" />
                  <TextInput
                    id="Password"
                    name="Password"
                    type="password"
                    required
                  />
                </div>

                <div className="relative">
                  <Label
                    htmlFor="repeatPassword"
                    value="Repita la Contraseña"
                  />
                  <TextInput
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="Province" value="Provincia" />
                  <TextInput id="Province" name="Province" required />
                </div>

                <div>
                  <Label htmlFor="District" value="Cantón" />
                  <TextInput id="District" name="District" required />
                </div>

                <div>
                  <Label htmlFor="Gender" value="Género" />
                  <Select id="Gender" name="Gender" required>
                    <option value="" disabled>
                      Selecciona tu género
                    </option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Otros">Otros</option>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="BirthDate" value="Fecha de Nacimiento" />
                  <TextInput
                    id="BirthDate"
                    name="BirthDate"
                    type="date"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="Address" value="Dirección" />
                <TextInput id="Address" name="Address" required />
              </div>

              <div className="flex items-center">
                <Checkbox
                  id="AcceptTermsAndConditions"
                  name="AcceptTermsAndConditions"
                  required
                />
                <Label htmlFor="AcceptTermsAndConditions" className="ml-2">
                  Acepto los Términos y Condiciones
                </Label>
              </div>

              <div className="flex justify-between mt-4">
                <Button
                  type="button"
                  color="failure"
                  onClick={() => navigate("/HogarDeLibros")}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  className="bg-blue-600 text-white hover:bg-blue-800"
                >
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
