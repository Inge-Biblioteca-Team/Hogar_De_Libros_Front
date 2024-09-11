import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button, Label, Card, Select } from 'flowbite-react';
import axios from 'axios';

const EditUser = () => {
  const [formData, setFormData] = useState({
    Email: '',
    IDNumber: '',
    Name: '',
    LastName: '',
    PhoneNumber: 0,
    Province: '',
    District: '',
    Gender: '',
    Address: '',
    BirthDate: '',
    Password: '',
    repeatPassword: '',
    AcceptTermsAndConditions: false,
  });

  const [errors, setErrors] = useState<any>({
    repeatPassword: '',
  });

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

      if (name === 'repeatPassword') {
        if (value !== formData.Password) {
          setErrors((prevErrors: any) => ({
            ...prevErrors,
            repeatPassword: 'Las contraseñas no coinciden',
          }));
        } else {
          setErrors((prevErrors: any) => ({
            ...prevErrors,
            repeatPassword: '',
          }));
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.Password !== formData.repeatPassword) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        repeatPassword: 'Las contraseñas no coinciden',
      }));
      return;
    }

    console.log('Formulario Enviado:', formData);

    try {
      const response = await axios.put('https://tu-backend.com/api/usuarios', {
        Email: formData.Email,
        IDNumber: formData.IDNumber,
        Name: formData.Name,
        LastName: formData.LastName,
        PhoneNumber: formData.PhoneNumber,
        Province: formData.Province,
        District: formData.District,
        Gender: formData.Gender,
        Address: formData.Address,
        BirthDate: new Date(formData.BirthDate),
        Password: formData.Password,
        AcceptTermsAndConditions: formData.AcceptTermsAndConditions,
      });

      if (response.status === 200) {
        console.log('Usuario editado exitosamente');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error al editar el usuario:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <Card className="w-auto">
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Edición de usuario</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="IDNumber" value="Número de Cédula" />
                <TextInput
                  id="IDNumber"
                  name="IDNumber"
                  inputMode="numeric"
                  type="number"
                  pattern="[0-9]*"
                  value={formData.IDNumber}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div>
                <Label htmlFor="Name" value="Nombre" />
                <TextInput
                  id="Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div>
                <Label htmlFor="LastName" value="Apellidos" />
                <TextInput
                  id="LastName"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div>
                <Label htmlFor="Email" value="Correo" />
                <TextInput
                  id="Email"
                  name="Email"
                  type="email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="PhoneNumber" value="Teléfono" />
                <TextInput
                  id="PhoneNumber"
                  name="PhoneNumber"
                  inputMode="numeric"
                  type="number"
                  pattern="[0-9]*"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="Password" value="Contraseña" />
                <TextInput
                  id="Password"
                  name="Password"
                  type="password"
                  value={formData.Password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <Label htmlFor="repeatPassword" value="Repita la Contraseña" />
                <TextInput
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  required
                  color={errors.repeatPassword ? 'failure' : undefined}
                  helperText={
                    errors.repeatPassword && (
                      <span className="absolute text-red-600">{errors.repeatPassword}</span>
                    )
                  }
                />
              </div>
              <div>
                <Label htmlFor="Province" value="Provincia" />
                <TextInput
                  id="Province"
                  name="Province"
                  value={formData.Province}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="District" value="Cantón" />
                <TextInput
                  id="District"
                  name="District"
                  value={formData.District}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="Gender" value="Género" />
                <Select
                  id="Gender"
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  required
                >
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
                  value={formData.BirthDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="Address" value="Dirección" />
              <TextInput
                id="Address"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button type="button" color="failure" onClick={() => navigate('/')}>
                Cancelar
              </Button>
              <Button type="submit" color="primary" className="bg-blue-600 text-white hover:bg-blue-800">
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default EditUser;