import { useState } from "react";
import { Modal, Button, Label, TextInput, Checkbox, Dropdown, Select } from "flowbite-react";

const EditUserAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [formData, setFormData] = useState({ //Testing testiiiiiiiiiiing
    cedula: "504430491",
    nombre: "Nazareth",
    apellidos: "Gómez Gómez",
    genero: "Mujer",
    edad: 21,
    salas: false,
    privilegiosLibros: "Medio"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
  
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [target.name]: target.checked,  
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [target.name]: target.value,  
      }));
    }
  };
  

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenConfirm = () => setIsConfirmOpen(true);
  const handleCloseConfirm = () => setIsConfirmOpen(false);
  const handleSave = () => {
    handleOpenConfirm(); 
  };

  const handleConfirmSave = () => {
    console.log("Información guardada:", formData);
    handleCloseConfirm();
    handleCloseModal();
  };

  return (
    <>
      <Button onClick={handleOpenModal}>Editar Usuario</Button>

      <Modal show={isOpen} onClose={handleCloseModal} size="lg">
        <Modal.Header className="bg-blue-950"><h6 className="text-white font-bold ">Editar Usuario</h6></Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4">
            <div>
              <Label htmlFor="cedula" value="Cédula" />
              <TextInput id="cedula" name="cedula" value={formData.cedula} disabled={true} />
            </div>
            <div>
              <Label htmlFor="nombre" value="Nombre" />
              <TextInput id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="apellidos" value="Apellidos" />
              <TextInput id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="genero" value="Género" />
              <Dropdown inline={true} label={formData.genero}>
                {["Hombre", "Mujer", "Otros"].map((genero) => (
                  <Dropdown.Item key={genero} onClick={() => setFormData({ ...formData, genero })}>
                    {genero}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
            <div>
              <Label htmlFor="edad" value="Edad" />
              <TextInput id="edad" name="edad" type="number" value={formData.edad} onChange={handleInputChange} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="salas" name="salas" checked={formData.salas} onChange={handleInputChange} />
              <Label htmlFor="salas" value="Préstamo de Salas" />
            </div>
            <div>
              <Label htmlFor="privilegiosLibros" value="Préstamo de Libros" />
              <Select id="privilegiosLibros" name="privilegiosLibros" value={formData.privilegiosLibros} onChange={handleInputChange}>
                <option value="Minimo">Mínimo (8/1)</option>
                <option value="Medio">Medio (15/2)</option>
                <option value="Alto">Alto (22/3)</option>
                <option value="Total">Total (30/5)</option>
              </Select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Guardar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isConfirmOpen} onClose={handleCloseConfirm} size="md">
        <Modal.Header className="bg-amber-300"><h6 className="font-bold">Confirmar Guardado</h6></Modal.Header>
        <Modal.Body>
          <h6 className="text-center text-slate-950 font-semibold">¿Seguro que quieres guardar la siguiente información?</h6>
          <ul className="list-disc pl-5">
            <li>Cédula: {formData.cedula}</li>
            <li>Nombre: {formData.nombre}</li>
            <li>Apellidos: {formData.apellidos}</li>
            <li>Género: {formData.genero}</li>
            <li>Edad: {formData.edad}</li>
            <li>Préstamo de Salas: {formData.salas ? "Sí" : "No"}</li>
            <li>Préstamo de Libros: {formData.privilegiosLibros}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button color="green" onClick={handleConfirmSave}>
            Sí, estoy seguro
          </Button>
          <Button color="red" onClick={handleCloseConfirm}>
            No, cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditUserAdmin;
