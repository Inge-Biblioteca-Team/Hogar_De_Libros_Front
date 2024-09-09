"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

interface RecoverPasswordModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const RecoverPasswordModal: React.FC<RecoverPasswordModalProps> = ({
    openModal,
    setOpenModal,
}) => {
    const [email, setEmail] = useState('');
    const [cedula, setCedula] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
        setCedula('');
    }

    function onConfirm() {
        // Lógica para enviar los datos de recuperación
        console.log({ email, cedula });
    }

    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Recuperar Contraseña
                    </h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Correo Electrónico" />
                        </div>
                        <TextInput
                            id="email"
                            placeholder="nombre@ejemplo.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="cedula" value="Cédula" />
                        </div>
                        <TextInput
                            id="cedula"
                            placeholder="Número de cédula"
                            value={cedula}
                            onChange={(event) => setCedula(event.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-between mt-4 space-x-2">
                        <Button
                            color="gray"
                            className="w-full transition-transform hover:scale-105"
                            onClick={onCloseModal}
                        >
                            Cancelar
                        </Button>
                        <Button
                            color="blue"
                            className="w-full transition-transform hover:scale-105"
                            onClick={onConfirm}
                        >
                            Confirmar
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default RecoverPasswordModal;
