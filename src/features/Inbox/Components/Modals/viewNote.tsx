import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { formatToDMY } from "../../../../components/FormatTempo"; 
import {Nota} from "../../Types/InboxTypes"

const ViewNote = ({
    isOpen,
    setIsOpen,
    note,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    note: Nota; 
}) => {

    const noteDate = formatToDMY(note.date); 

    return (
        <Modal dismissible show={isOpen} onClose={() => setIsOpen(false)} size="md">
            <Modal.Header className="dark:bg-neutral-900">
            <strong>Tipo: {note.type} </strong>
            </Modal.Header>
            <Modal.Body className="dark:bg-[#2d2d2d] flex flex-col gap-2">
                <div className="flex-col flex gap-2 text-left justify-start">
                    <strong className="text-center p-2">Detalles de la notificación</strong>
                    <span>
                        <strong>Fecha:</strong> {noteDate}
                    </span>
                    <span>
                       <strong>Mensaje:</strong>{note.message}
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
                <Button color={"blue"} onClick={() => setIsOpen(false)}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewNote;
