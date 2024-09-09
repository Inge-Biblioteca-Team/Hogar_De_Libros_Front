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
    const [errors, setErrors] = useState<{ email?: string; cedula?: string }>({});

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
        setCedula('');
        setErrors({});
    }

    function validateForm() {
        const newErrors: { email?: string; cedula?: string } = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'El formato del correo no es válido';
        }

        if (!/^\d{9,12}$/.test(cedula)) {
            newErrors.cedula = 'La cédula debe contener entre 9 y 12 dígitos';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    }

    function onConfirm() {
        if (validateForm()) {
            // Lógica para enviar los datos de recuperación
            console.log({ email, cedula });
        }
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
                            color={errors.email ? 'failure' : undefined}
                            helperText={errors.email && (
                                <span className="text-red-600">{errors.email}</span>
                            )}
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
                            inputMode="numeric"
                            pattern="[0-9]*"
                            color={errors.cedula ? 'failure' : undefined}
                            helperText={errors.cedula && (
                                <span className="text-red-600">{errors.cedula}</span>
                            )}
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

