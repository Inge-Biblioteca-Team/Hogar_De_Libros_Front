import { Button, Modal, ModalBody, ModalFooter, ModalHeader, TextInput } from "flowbite-react";
import { ModalOpen } from "../../../Types/GlobalTypes";

const OPACAsistencia = ({ open, setOpen }: ModalOpen)=> {
 return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <ModalHeader>
        <div>Registro de asistencia</div>
      </ModalHeader>
      <ModalBody className="grid grid-cols-1 bg-white lg:grid-cols-2 gap-x-5 gap-y-4">
        <div>
          <label className="block mb-2">Cédula</label>
          <TextInput type="number" />
        </div>
        <div>
          <label className="block mb-2">Nombre Completo</label>
          <TextInput />
        </div>
        <div className="lg:col-span-2">
          <label className="block mb-2">Género</label>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="gender-m"
                  type="radio"
                  name="genero"
                  value="M"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="gender-m" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  M
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="gender-f"
                  type="radio"
                  name="genero"
                  value="F"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="gender-f" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  F
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <label className="block mb-2">Rango de edad</label>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="edad-0-6"
                  type="radio"
                  name="edad"
                  value="0 a 6"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="edad-0-6" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  0 a 6
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="edad-6-12"
                  type="radio"
                  name="edad"
                  value="6 a 12"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="edad-6-12" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  6 a 12
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="edad-13-17"
                  type="radio"
                  name="edad"
                  value="13 a 17"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="edad-13-17" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  13 a 17
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="edad-18-35"
                  type="radio"
                  name="edad"
                  value="18 a 35"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="edad-18-35" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  18 a 35
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="edad-36-64"
                  type="radio"
                  name="edad"
                  value="36 a 64"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="edad-36-64" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  36 a 64
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="edad-65"
                  type="radio"
                  name="edad"
                  value="65 a mas"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label htmlFor="edad-65" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  65 a más
                </label>
              </div>
            </li>
          </ul>
        </div>
      </ModalBody>
      <ModalFooter className="flex justify-center">
        <Button color={"blue"}>Enviar</Button>
      </ModalFooter>
    </Modal>
 );
};
export default OPACAsistencia;