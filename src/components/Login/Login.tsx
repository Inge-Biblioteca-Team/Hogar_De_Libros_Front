import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
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
    <div className="login-container">
      <div className="login-card">
        <div className="flex flex-col md:flex-row items-center">
          <div className="login-form w-full md:w-1/2">
            <div className="card bg-white rounded-lg shadow-lg p-8 border border-gray-300">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Iniciar Sesión</h2>
              <p className="text-sm text-gray-500 mb-4">
                No posees una cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate aquí.</a>
              </p>

              {errorMessage && (
                <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Tucorreo@ejemplo.com"
                    className="border border-gray-300 p-2 w-full rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="********"
                    className="border border-gray-300 p-2 w-full rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Iniciar Sesión
                </button>

                <div className="flex justify-between items-center mt-4">
                  <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={() => navigate('/')}
                  >
                    Regresar
                  </button>
                  <div className="flex justify-end">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={openRecoverPasswordModal}
                    >
                      ¿Olvidó su contraseña?
                    </button>
                  </div>

                  {showRecoverPasswordModal && (
                    <RecoverPasswordModal
                      openModal={showRecoverPasswordModal}
                      setOpenModal={setShowRecoverPasswordModal}
                    />
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="login-image w-full md:w-1/2 p-4">
            <div className="register-header">
              <h6 className="register-title ml-10 text-sm">Biblioteca Pública Municipal de Nicoya</h6>
            </div>
            <img src="src/Assets/image copy.png" alt="Mujer leyendo" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
