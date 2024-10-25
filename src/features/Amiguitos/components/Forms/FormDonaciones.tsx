import { Label, Modal, TextInput, Select, Button } from "flowbite-react";
import { useState } from "react";
import { Donation } from "../../types/InfoAmiguitos";
import { useForm } from "react-hook-form";
import useDonation from "../../Hooks/useDonation";
import { addDay, format } from "@formkit/tempo";
import InfoDonation from "../Popover/InfoDonation";

interface MainFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormDonaciones = ({ isOpen, onClose }: MainFormProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const { register, handleSubmit } = useForm<Donation>();
  const { mutate: createFriend, isLoading } = useDonation();

  const onSubmit = (data: Donation) => {
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

  const tomorrow = addDay(new Date());

  const toDay = format({
    date: tomorrow,
    format: "YYYY-MM-DD",
    tz: "America/Costa_Rica",
  });

  return (
    <div>
      <Modal show={isOpen} onClose={onClose} size="5xl">
        <Modal.Header className="flex justify-between items-center">
          <span>Donaciones</span>
          <InfoDonation />
        </Modal.Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <fieldset className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="userFullName" value="Nombre Completo" />
                <TextInput
                  id="userFullName"
                  placeholder="Nombre Completo"
                  required
                  {...register("UserFullName")}
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
                  {...register("UserCedula")}
                />
              </div>
              <div>
                <Label htmlFor="userBirthDate" value="Fecha de Nacimiento" />
                <TextInput
                  id="userBirthDate"
                  type="date"
                  {...register("UserBirthDate")}
                />
              </div>
              <div>
                <Label htmlFor="userPhone" value="Número de teléfono" />
                <TextInput
                  id="userPhone"
                  type="tel"
                  placeholder="Número de teléfono"
                  required
                  {...register("UserPhone")}
                />
              </div>
              <div>
                <Label htmlFor="userEmail" value="Email" />
                <TextInput
                  id="userEmail"
                  type="email"
                  placeholder="Email"
                  {...register("UserEmail")}
                />
              </div>
              <div>
                <Label htmlFor="userAddress" value="Dirección" />
                <TextInput
                  id="userAddress"
                  placeholder="Dirección"
                  required
                  {...register("UserAddress")}
                />
              </div>
            </fieldset>
            <div className="pt-3">
              <Label htmlFor="categorySelect" value="Selecciona una categoría" />
              <Select
                id="categorySelect"
                {...register("SubCategory", { required: true })}
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
                <div>
                  <Label htmlFor="Resourcecondition" value="Proporcione información del condición del libro" />
                  <Select
                    id="Resourcecondition"
                    {...register("ResourceCondition")}
                    required
                  >
                    <option value="">Seleccione la condición</option>
                    <option value="Mala">Mala</option>
                    <option value="Deficiente">Deficiente</option>
                    <option value="Regular">Regular</option>
                    <option value="Bueno">Bueno</option>
                    <option value="Optimo">Optimo</option>
                  </Select>
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
                    {...register("ItemDescription")}
                  />
                </div>
                <div>
                  <Label htmlFor="Date" value="Fecha y hora de la entrega del libro" />
                  <TextInput
                    id="Date"
                    type="date"
                    min={toDay}
                    required
                    {...register("dateRecolatedDonation")}
                  />
                </div>
              </div>
            )}

            {selectedCategory === "Mobiliario" && (
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <Label htmlFor="Resourcecondition" value="Proporcione información del condición del mobiliario" />
                  <Select
                    id="Resourcecondition"
                    {...register("ResourceCondition")}
                    required
                  >
                    <option value="">Seleccione la condición</option>
                    <option value="Mala">Mala</option>
                    <option value="Deficiente">Deficiente</option>
                    <option value="Regular">Regular</option>
                    <option value="Bueno">Bueno</option>
                    <option value="Optimo">Optimo</option>
                  </Select>
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
                    {...register("ItemDescription")}
                  />
                </div>
                <div>
                  <Label htmlFor="Date" value="Fecha y hora de la entrega del mobiliario" />
                  <TextInput
                    id="Date"
                    type="date"
                    min={toDay}
                    required
                    {...register("dateRecolatedDonation")}
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
