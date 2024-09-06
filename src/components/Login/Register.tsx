// src/components/Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    Email: '',
    Name: '',
    LastName: '',
    PhoneNumber: '',
    Province: '',
    District: '',
    Gender: '',
    Address: '',
    BirthDate: '',
    Password: '',
    repeatPassword: '',
    AcceptTermsAndConditions: false,
  });

  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.Email) newErrors.Email = 'El correo electrónico es requerido';
    if (!formData.Name) newErrors.Name = 'El nombre es requerido';
    if (!formData.LastName) newErrors.LastName = 'Los apellidos son requeridos';
    if (!formData.PhoneNumber) newErrors.PhoneNumber = 'El número de teléfono es requerido';
    if (!formData.Province) newErrors.Province = 'La provincia es requerida';
    if (!formData.District) newErrors.District = 'El cantón es requerido';
    if (!formData.Gender) newErrors.Gender = 'El género es requerido';
    if (!formData.Address) newErrors.Address = 'La dirección es requerida';
    if (!formData.BirthDate) newErrors.BirthDate = 'La fecha de nacimiento es requerida';
    if (!formData.Password) newErrors.Password = 'La contraseña es requerida';
    if (formData.Password !== formData.repeatPassword) newErrors.repeatPassword = 'Las contraseñas no coinciden';
    if (!formData.AcceptTermsAndConditions) newErrors.AcceptTermsAndConditions = 'Debe aceptar los términos y condiciones';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('https://tu-backend.com/api/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Email: formData.Email,
            Name: formData.Name,
            LastName: formData.LastName,
            PhoneNumber: parseInt(formData.PhoneNumber),
            Province: formData.Province,
            District: formData.District,
            Gender: formData.Gender,
            Address: formData.Address,
            BirthDate: new Date(formData.BirthDate),
            Password: formData.Password,
            AccpetTermsAndConditions: formData.AcceptTermsAndConditions,
          }),
        });

        if (!response.ok) {
          throw new Error('Error al registrar el usuario');
        }

        console.log('Usuario registrado exitosamente');
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="flex flex-col md:flex-row items-center">
          <div className="register-form w-full md:w-1/2">
            <div className="card bg-white rounded-lg shadow-lg p-6 border border-gray-300">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Registro de usuario</h2>
              <p className="text-sm text-gray-500 mb-4">
                ¿Posees una cuenta? <a href="/LogIn" className="text-blue-500 hover:underline">Inicia Sesión aquí.</a>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.Name && <span className="text-red-500 text-sm">{errors.Name}</span>}
                  </div>

                  <div>
                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
                    <input
                      type="text"
                      id="LastName"
                      name="LastName"
                      value={formData.LastName}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.LastName && <span className="text-red-500 text-sm">{errors.LastName}</span>}
                  </div>

                  <div>
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Correo</label>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.Email && <span className="text-red-500 text-sm">{errors.Email}</span>}
                  </div>

                  <div>
                    <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
                    <input
                      type="tel"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      value={formData.PhoneNumber}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.PhoneNumber && <span className="text-red-500 text-sm">{errors.PhoneNumber}</span>}
                  </div>

                  <div>
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                      type="password"
                      id="Password"
                      name="Password"
                      value={formData.Password}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.Password && <span className="text-red-500 text-sm">{errors.Password}</span>}
                  </div>

                  <div>
                    <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700">Repita la Contraseña</label>
                    <input
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                      value={formData.repeatPassword}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.repeatPassword && <span className="text-red-500 text-sm">{errors.repeatPassword}</span>}
                  </div>

                  <div>
                    <label htmlFor="Province" className="block text-sm font-medium text-gray-700">Provincia</label>
                    <input
                      type="text"
                      id="Province"
                      name="Province"
                      value={formData.Province}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.Province && <span className="text-red-500 text-sm">{errors.Province}</span>}
                  </div>

                  <div>
                    <label htmlFor="District" className="block text-sm font-medium text-gray-700">Cantón</label>
                    <input
                      type="text"
                      id="District"
                      name="District"
                      value={formData.District}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.District && <span className="text-red-500 text-sm">{errors.District}</span>}
                  </div>

                  <div>
                    <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">Género</label>
                    <input
                      type="text"
                      id="Gender"
                      name="Gender"
                      value={formData.Gender}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.Gender && <span className="text-red-500 text-sm">{errors.Gender}</span>}
                  </div>

                  <div>
                    <label htmlFor="BirthDate" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                    <input
                      type="date"
                      id="BirthDate"
                      name="BirthDate"
                      value={formData.BirthDate}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full rounded"
                    />
                    {errors.BirthDate && <span className="text-red-500 text-sm">{errors.BirthDate}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="Address" className="block text-sm font-medium text-gray-700">Dirección</label>
                  <input
                    type="text"
                    id="Address"
                    name="Address"
                    value={formData.Address}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                  {errors.Address && <span className="text-red-500 text-sm">{errors.Address}</span>}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="AcceptTermsAndConditions"
                    name="AcceptTermsAndConditions"
                    checked={formData.AcceptTermsAndConditions}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="AcceptTermsAndConditions" className="ml-2 block text-sm text-gray-900">
                    Términos y Condiciones
                  </label>
                </div>
                {errors.AcceptTermsAndConditions && <span className="text-red-500 text-sm">{errors.AcceptTermsAndConditions}</span>}

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    onClick={() => navigate('/')}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Confirmar
                  </button>
                </div>
              </form>
            </div>
          </div>


          <div className="register-image w-full md:w-1/2 p-4">
            <div className="register-header">
              <h6 className="register-title ml-20 text-lg">Biblioteca Pública Municipal de Nicoya</h6>
            </div>
            <img src="src/Assets/young-woman.jpg" alt="Mujer leyendo" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
