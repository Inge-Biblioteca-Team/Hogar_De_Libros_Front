import { Label, Modal, TextInput, Select, Button, Checkbox } from "flowbite-react";
import { useState } from "react";
import UseCreateFriend from "../../Hooks/UseCreateFriend";
import { CreateFriends } from "../../types/InfoAmiguitos";
import { useForm } from "react-hook-form";

interface MainFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainFormAmigos = ({ isOpen, onClose }: MainFormProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [hasPriorKnowledge, setHasPriorKnowledge] = useState<boolean | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { register, handleSubmit } = useForm<CreateFriends>();
  const { mutate: createFriend, isLoading } = UseCreateFriend();

  const onSubmit = (data: CreateFriends) => {
    createFriend(data, {
      onSuccess: () => {
        onClose();
      },
      onError: (error) => console.error("Error al crear amigo", error),
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  const removeFile = (file: File) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const renderSubCategoryOptions = () => {
    if (selectedCategory === "Talleres") {
      return (
        <>
          <div>
            <Label htmlFor="workshopSubCategory" value="Selecciona un taller" />
            <Select
              id="workshopSubCategory"
              {...register("subCategory")}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              required
            >
              <option value="">Seleccione un taller</option>
              <option value="Lectura y Escritura">Lectura y Escritura</option>
              <option value="Emprendedurismo">Emprendedurismo</option>
              <option value="Hora del Cuento para Niños">Hora del Cuento para Niños</option>
              <option value="Manualidades">Manualidades</option>
            </Select>
          </div>
          <div className="flex flex-col custom-file-input">
            <label htmlFor="documentUpload" className="mb-1 text-sm font-medium">Cargar documentos:</label>
            <input
              id="documentUpload"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              multiple
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid row-span-2">
              {uploadedFiles.map((file) => (
                <div key={file.name} className="flex justify-between items-center">
                  <span>{file.name}</span>
                  <button type="button" onClick={() => removeFile(file)} className="text-red-500">
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

    if (selectedCategory === "Acompañamiento Administrativo") {
      return (
        <>
          <div>
            <Label htmlFor="acompannamientoSubCategory" value="Seleccione una área de acompañamiento" />
            <Select
              id="donationSubCategory"
              {...register("subCategory")}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              required
            >
              <option value="">Seleccione una área de acompañamiento</option>
              <option value="Atencion al usuario">Atención al usuario</option> 
              <option value="Ordenar la colección general e infantil">Ordenar la colección general e infantil</option>
              <option value="Acompañamiento y logística en las actividades">Acompañamiento y logística en las actividades</option>
              <option value="Visitas guiadas">Visitas guiadas</option>
              <option value="Acompañamiento de puertas abiertas">Acompañamiento de puertas abiertas</option>
              <option value="Actualización del contenido de la página web de la Biblioteca">Actualización del contenido de la página web de la Biblioteca</option>
            </Select>
          </div>
          <div className="flex flex-col custom-file-input">
            <label htmlFor="donationImages" className="mb-1 text-sm font-medium">Cargar imágenes:</label>
            <input
              id="donationImages"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-2">
              {uploadedFiles.map((file) => (
                <div key={file.name} className="flex justify-between items-center">
                  <span>{file.name}</span>
                  <button type="button" onClick={() => removeFile(file)} className="text-red-500">
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div>
      <Modal show={isOpen} onClose={onClose} size="5xl">
        <Modal.Header>Registro de Amigo de la Biblioteca</Modal.Header>
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
              <div>
                <Label htmlFor="categorySelect" value="Selecciona una categoría" />
                <Select
                  id="categorySelect"
                  {...register("principalCategory", { required: true })}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setHasPriorKnowledge(null);
                  }}
                  value={selectedCategory || ""}
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="Talleres">Talleres</option>
                  <option value="Acompañamiento Administrativo">Acompañamiento Administrativo</option>
                </Select>
              </div>
            </fieldset>

            {selectedCategory && ( 
              <div className="mt-6">
                <div className="flex items-center">
                  <Label>¿Tiene conocimientos previos en el apartado que seleccionó?</Label>
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
              </div>
            )}

            {selectedCategory && (
              <div className="grid grid-cols-2 gap-6 mt-6">
                {renderSubCategoryOptions()}

                <div className="col-span-1 row-span-2">
                  <Label htmlFor="extraInfo" value="Información Adicional" />
                  <TextInput
                    id="extraInfo"
                    placeholder="Proporcione información adicional"
                    {...register("extraInfo")}
                    disabled={selectedCategory === "Acompañamiento Administrativo" ? false : hasPriorKnowledge === false} 
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

export default MainFormAmigos;
