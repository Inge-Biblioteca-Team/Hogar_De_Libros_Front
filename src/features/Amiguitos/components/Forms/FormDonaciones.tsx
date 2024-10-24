import { Label, Modal, TextInput, Select, Button, Checkbox } from "flowbite-react"; 
import { useState } from "react";
import UseCreateFriend from "../../Hooks/UseCreateFriend";
import { CreateFriends } from "../../types/InfoAmiguitos";
import { useForm } from "react-hook-form";

interface MainFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormDonaciones = ({ isOpen, onClose }: MainFormProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const { register, handleSubmit } = useForm<CreateFriends>();
  const { mutate: createFriend, isLoading } = UseCreateFriend();
  const [hasPriorKnowledge, setHasPriorKnowledge] = useState<boolean | null>(null);

  const onSubmit = (data: CreateFriends) => {
    createFriend(data, {
      onSuccess: () => {
        onClose();
      },
      onError: (error) => console.error("Error al crear donación", error),
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setUploadedImages((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  const removeFile = (file: File) => {
    setUploadedImages((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <div>
      <Modal show={isOpen} onClose={onClose} size="5xl">
        <Modal.Header>Registro de Donación</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <fieldset className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="userFullName" value="Nombre Completo" />
                <TextInput
                  id="userFullName"
                  placeholder="Nombre Completo"
                  required
                  {...register("userFullName")}
                />
              </div>
              <div>
                <Label htmlFor="userCedula" value="Número de Cédula" />
                <TextInput
                  id="userCedula"
                  placeholder="Número de cédula"
                  inputMode="numeric"
                  type="text"
                  pattern="[0-9]*"
                  required
                  {...register("userCedula")}
                />
              </div>
              <div>
                <Label htmlFor="userBirthDate" value="Fecha de Nacimiento" />
                <TextInput
                  id="userBirthDate"
                  type="date"
                  {...register("userBirthDate")}
                />
              </div>
              <div>
                <Label htmlFor="userPhone" value="Número de teléfono" />
                <TextInput
                  id="userPhone"
                  type="tel"
                  placeholder="Número de teléfono"
                  required
                  {...register("userPhone")}
                />
              </div>
              <div>
                <Label htmlFor="userEmail" value="Email" />
                <TextInput
                  id="userEmail"
                  type="email"
                  placeholder="Email"
                  {...register("userEmail")}
                />
              </div>
              <div>
                <Label htmlFor="userAddress" value="Dirección" />
                <TextInput
                  id="userAddress"
                  placeholder="Dirección"
                  required
                  {...register("userAddress")}
                />
              </div>
            </fieldset>
            <div>
                <Label htmlFor="categorySelect" value="Selecciona una categoría" />
                <Select
                  id="categorySelect"
                  {...register("principalCategory", { required: true })}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                  }}
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="Libros">Libros</option>
                  <option value="Mobiliario">Mobiliario</option>
                </Select>
              </div>

            {selectedCategory === "Libros" && (
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="flex items-center">
                  <Label htmlFor="bookCondition" value="¿El libro está en buenas condiciones?" />
                  <Checkbox
                    id="priorKnowledgeYes"
                    checked={hasPriorKnowledge === true}
                    onChange={() => setHasPriorKnowledge(true)}
                    className="ml-4"
                  />
                  <Label htmlFor="priorKnowledgeYes" className="ml-2">Sí</Label>

                    <Checkbox
                    id="priorKnowledgeNo"
                    checked={hasPriorKnowledge === false}
                    onChange={() => setHasPriorKnowledge(false)}
                    className="ml-4"
                  />
                  <Label htmlFor="priorKnowledgeNo" className="ml-2">No</Label>
                </div>
                <div className="flex flex-col custom-file-input">
                  <label htmlFor="bookImages" className="mb-1 text-sm font-medium">Cargar imágenes del libro:</label>
                  <input
                    id="bookImages"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="grid row-span-2">
                    {uploadedImages.map((file) => (
                      <div key={file.name} className="flex justify-between items-center">
                        <span>{file.name}</span>
                        <button type="button" onClick={() => removeFile(file)} className="text-red-500">
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="bookExtraInfo" value="Información adicional del libro" />
                  <TextInput
                    id="bookExtraInfo"
                    placeholder="Proporcione información adicional"
                    {...register("extraInfo")}
                  />
                </div>
              </div>
            )}

            {selectedCategory === "Mobiliario" && (
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="flex items-center">
                  <Label htmlFor="furnitureCondition" value="¿El mobiliario está en buenas condiciones?" />
                  <Checkbox
                    id="priorKnowledgeYes"
                    checked={hasPriorKnowledge === true}
                    onChange={() => setHasPriorKnowledge(true)}
                    className="ml-4"
                  />
                  <Label htmlFor="priorKnowledgeYes" className="ml-2">Sí</Label>

                  <Checkbox
                    id="priorKnowledgeNo"
                    checked={hasPriorKnowledge === false}
                    onChange={() => setHasPriorKnowledge(false)}
                    className="ml-4"
                  />
                  <Label htmlFor="priorKnowledgeNo" className="ml-2">No</Label>
                  
                </div>
                <div className="flex flex-col custom-file-input">
                  <label htmlFor="furnitureImages" className="mb-1 text-sm font-medium">Cargar imágenes del mobiliario:</label>
                  <input
                    id="furnitureImages"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="grid row-span-2">
                    {uploadedImages.map((file) => (
                      <div key={file.name} className="flex justify-between items-center">
                        <span>{file.name}</span>
                        <button type="button" onClick={() => removeFile(file)} className="text-red-500">
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="furnitureExtraInfo" value="Información adicional del mobiliario" />
                  <TextInput
                    id="furnitureExtraInfo"
                    placeholder="Proporcione información adicional"
                    {...register("extraInfo")}
                  />
                </div>
              </div>
            )}
          </Modal.Body>

          <Modal.Footer className="flex w-full items-center justify-center">
            <Button color="failure" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              color="blue"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              {isLoading ? "Guardando..." : "Guardar"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default FormDonaciones;
