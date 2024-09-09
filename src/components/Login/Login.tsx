import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, TextInput, Label, Alert, Modal } from 'flowbite-react';
import RecoverPasswordModal from './RecoverPasswordModal';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [showRecoverPasswordModal, setShowRecoverPasswordModal] = useState(false);

  const openRecoverPasswordModal = () => {
    setShowRecoverPasswordModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = email === 'test@ejemplo.com' && password === '123456';
    if (!isValid) {
      setErrorMessage('Correo electrónico o contraseña incorrecta.');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full bg-white shadow-lg rounded-lg">
        <div className="w-full md:w-1/2 p-8">
          <Card className="max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Iniciar Sesión</h2>
            <p className="text-sm text-gray-500 mb-4">
              ¿No posees una cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate aquí.</a>
            </p>

            {errorMessage && (
              <Alert color="failure" className="mb-4">
                {errorMessage}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" value="Correo Electrónico" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" value="Contraseña" />
                <TextInput
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" gradientMonochrome="info" fullSized>
                Iniciar Sesión
              </Button>

              <div className="flex justify-between items-center mt-4">
                <Button color="light" onClick={() => navigate('/')}>
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



