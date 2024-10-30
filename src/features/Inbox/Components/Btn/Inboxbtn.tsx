import { useState } from "react";
import { PiTrash, PiEyeLight } from "react-icons/pi";
import { GoUnread, GoRead } from "react-icons/go";
import { Nota } from "../../Types/InboxTypes";
import useRead from "../../Hooks/useRead";
import useMoveToTrash from "../../Hooks/MoveToTrash/useMoveToTrash";
import useDeleteTrash from "../../Hooks/Delete/useDeleteTrash";
import useRecoverFromTrash from "../../Hooks/RecoverfromTrash/useRecoverFromTrash";
import ViewTrashNote from "../Modals/ViewTash";
import ViewRead from "../Modals/viewRead";
import ViewPending from "../Modals/viewPending";

const Inboxbtn = ({ message }: { message: Nota }) => {
    const [isRead, setIsRead] = useState(message.isRead);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { mutate: markAsRead, isLoading: isReading } = useRead();
    const { mutate: moveToTrash, isLoading: isMovingToTrash } = useMoveToTrash();
    const { mutate: deleteFromTrash, isLoading: isDeleting } = useDeleteTrash();
    const { mutate: recoverNote, isLoading: isRecovering } = useRecoverFromTrash();

    const markAsReadHandler = () => {
        markAsRead(message.id_Note, {
            onSuccess: () => setIsRead(true),
        });
    };

    const closeModalHandler = () => {
        setIsModalOpen(false);
        if (!isRead) {
            markAsReadHandler();
        }
    };

    const moveToTrashHandler = () => {
        moveToTrash(message.id_Note, {
            onSuccess: () => console.log("Nota movida a la papelera con éxito"),
        });
    };

    const deleteFromTrashHandler = () => {
        deleteFromTrash(message.id_Note, {
            onSuccess: () => console.log("Nota eliminada definitivamente con éxito"),
        });
    };

    const recoverFromTrashHandler = () => {
        recoverNote(message.id_Note, {
            onSuccess: () => console.log("Nota recuperada de la papelera con éxito"),
        });
    };

    return (
        <div className="flex gap-7 w-full items-end justify-end mr-9">
            <button
                title="Ver"
                type="button"
                onClick={() => setIsModalOpen(true)}
            >
                <PiEyeLight size={24} />
            </button>

            {!isRead && (
                <button
                    title="Marcar como leído"
                    type="button"
                    onClick={markAsReadHandler}
                    disabled={isReading}
                >
                    <GoRead size={22} />
                </button>
            )}

            {!message.trash ? (
                <button
                    title="Mover a papelera"
                    type="button"
                    onClick={moveToTrashHandler}
                    disabled={isMovingToTrash}
                >
                    <PiTrash size={24} />
                </button>
            ) : (
                <>
                    <button
                        title="Eliminar permanentemente"
                        type="button"
                        onClick={deleteFromTrashHandler}
                        disabled={isDeleting}
                    >
                        <PiTrash size={24} />
                    </button>
                    <button
                        title="Recuperar de la papelera"
                        type="button"
                        onClick={recoverFromTrashHandler}
                        disabled={isRecovering}
                    >
                        <GoUnread size={22} />
                    </button>
                </>
            )}

            {message.trash ? (
                <ViewTrashNote isOpen={isModalOpen} setIsOpen={closeModalHandler} note={message} />
            ) : isRead ? (
                <ViewRead isOpen={isModalOpen} setIsOpen={closeModalHandler} note={message} />
            ) : (
                <ViewPending isOpen={isModalOpen} setIsOpen={closeModalHandler} note={message} />
            )}
        </div>
    );
};

export default Inboxbtn;
