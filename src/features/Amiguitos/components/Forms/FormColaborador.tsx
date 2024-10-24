import { Label, Modal, TextInput, Select, Button, Checkbox } from "flowbite-react";
import { useState } from "react";
import UseCreateFriend from "../../Hooks/UseCreateFriend";
import { CreateFriends } from "../../types/InfoAmiguitos";
import { useForm } from "react-hook-form";

interface MainFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormColaborador = ({ isOpen, onClose }: MainFormProps) => {
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
      onError: (error) => console.error("Error al crear colaborador", error),
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
    if (selectedCategory === "Charlas") {
      return (
        <>
          <div>
            <Label htmlFor="charlasSubCategory" value="Selecciona un tema de charla" />
            <Select
              id="charlasSubCategory"
              {...register("subCategory")}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              required
            >
              <option value="">Seleccione un tema</option>
              <option value="Afro descendencia Costarricense">Afro descendencia Costarricense</option>
              <option value="Cuidado del ambiente">Cuidado del ambiente</option>
              <option value="Cultura de paz">Cultura de paz</option>
              <option value="Derechos y deberes de los jóvenes">Derechos y deberes de los jóvenes</option>
              <option value="Igualdad y equidad de género">Igualdad y equidad de género</option>
              <option value="Historia y rescate indígena">Historia y rescate indígena</option>
              <option value="Masculinidad positiva">Masculinidad positiva</option>
              <option value="Personas con discapacidad">Personas con discapacidad</option>
              <option value="Reducción del trabajo y maltrato infantil">Reducción del trabajo y maltrato infantil</option>
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

    if (selectedCategory === "Capacitación") {
      return (
        <>
          <div>
            <Label htmlFor="capacitacionSubCategory" value="Selecciona un curso" />
            <Select
              id="capacitacionSubCategory"
              {...register("subCategory")}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              required
            >
              <option value="">Seleccione un curso</option>
              <option value="Impartir cursos (inducción, Excel, Word, PowerPoint)">Impartir cursos (inducción, Excel, Word, PowerPoint)</option>
              <option value="Formación de emprendedurismo">Formación de emprendedurismo</option>
              <option value="Cursos libres (inglés, contabilidad, marketing, publicidad, otros)">Cursos libres (inglés, contabilidad, marketing, publicidad, otros)</option>
              <option value="Actividades informativas">Actividades informativas</option>
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

    if (selectedCategory === "Cultura") {
      return (
        <>
          <div>
            <Label htmlFor="culturaSubCategory" value="Selecciona una actividad cultural" />
            <Select
              id="culturaSubCategory"
              {...register("subCategory")}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              required
            >
              <option value="">Seleccione una actividad cultural</option>
              <option value="Cuentacuentos para adultos mayores">Cuentacuentos para adultos mayores</option>
              <option value="Cuentacuentos para niños y jóvenes">Cuentacuentos para niños y jóvenes</option>
              <option value="Exposiciones artísticas">Exposiciones artísticas</option>
              <option value="Presentaciones audiovisuales">Presentaciones audiovisuales</option>
              <option value="Dirigir una tertulia con todo público">Dirigir una tertulia con todo público</option>
            </Select>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div>
      <Modal show={isOpen} onClose={onClose} size="5xl">
        <Modal.Header>Registro de Colaborador</Modal.Header>
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
                    setHasPriorKnowledge(null);
                  }}
                  value={selectedCategory || ""}
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="Charlas">Charlas</option>
                  <option value="Capacitación">Capacitación</option>
                  <option value="Cultura">Cultura</option>
                </Select>
              </div>

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

export default FormColaborador;
