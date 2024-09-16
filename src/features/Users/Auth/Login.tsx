import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, TextInput, Label, Modal } from 'flowbite-react';
import RecoverPasswordModal from './RecoverPasswordModal';
import { useForm } from 'react-hook-form';
import { signIn } from '../Services/SvUsuer';
import { SingIng } from '../Type/UserType';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [showRecoverPasswordModal, setShowRecoverPasswordModal] = useState(false);

  const openRecoverPasswordModal = () => {
    setShowRecoverPasswordModal(true);
  };


  const {register, handleSubmit, reset}=useForm<SingIng>()

  const onSubmit = (data:SingIng)=>{
    mutation.mutate({
      username: data.username,
      password: data.password,
    });
    signIn(data.username, data.password)
  }
  const mutation = useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      signIn(username, password), 
    onSuccess: (data) => {
      console.log('Inicio de sesión exitoso:', data.access_token);
      sessionStorage.setItem('token', data.access_token);
    },
    onError: () => {
      navigate("/HogarDeLibros")
      reset()
      toast.success("Inicio de sesión Exitoso")
    },
  });


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full bg-white shadow-lg rounded-lg">
        <div className="w-full md:w-1/2 p-8">
          <Card className="max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Iniciar Sesión</h2>
            <p className="text-sm text-gray-500 mb-4">
              ¿No posees una cuenta? <a href="/Registro" className="text-blue-500 hover:underline">Regístrate aquí.</a>
            </p>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="email" value="Correo Electrónico" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Tucorreo@ejemplo.com"
                  required
                  {...register("username")}
                />
              </div>

              <div>
                <Label htmlFor="password" value="Contraseña" />
                <TextInput
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  {...register("password")}
                />
              </div>

              <Button type="submit" gradientMonochrome="info" fullSized>
                Iniciar Sesión
              </Button>

              <div className="flex justify-between items-center mt-4">
                <Button color="light" onClick={() => navigate('/HogarDeLibros')}>
                  Regresar
                </Button>
                <Button color="light" onClick={openRecoverPasswordModal}>
                  ¿Olvidó su contraseña?
                </Button>
              </div>
            </form>

            {showRecoverPasswordModal && (
              <Modal
                show={showRecoverPasswordModal}
                onClose={() => setShowRecoverPasswordModal(false)}
              >
                <RecoverPasswordModal
                  openModal={showRecoverPasswordModal}
                  setOpenModal={setShowRecoverPasswordModal}
                />
              </Modal>
            )}
          </Card>
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
          <h6 className="text-blue-600 text-lg font-semibold mb-2">
            Biblioteca Pública Municipal de Nicoya
          </h6>
          <img
            src="src/Assets/image copy.png"
            alt="Mujer leyendo"
            className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;



