import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Friend } from "../../Types/FriendType";
import UseDenyFriend from "../../hooks/UseDentFrined"; // Cambié el nombre correcto del hook

const DenyFriendModal = ({
   isDenyModalOpen,
  setDenyFriend,
  friend,
}: {
  isDenyModalOpen: boolean;
  setDenyFriend: Dispatch<SetStateAction<boolean>>;
  friend: Friend; // El amigo que se va a rechazar
}) => {
  const { mutate: rejectFriend } = UseDenyFriend();

  const handleConfirm = () => {
    rejectFriend(friend.FriendId, {
      onSuccess: () => {
        setDenyFriend(false);  // Cierra el modal
      },
    });
  };

  return (
    <Modal show={isDenyModalOpen} onClose={() => setDenyFriend(false)} popup size="md">
      <Modal.Body className="text-center">
        <div className="text-center mt-7">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        </div>
        <span>
          ¿Está seguro de rechazar la solicitud de amigo de{" "}
          <strong className="font-bold">{friend.UserFullName}</strong>?
        </span>
        <br />
        <span>Esta acción no es reversible.</span>
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center">
        <Button color="failure" onClick={() => setDenyFriend(false)}>
          Cancelar
        </Button>
        <Button color="blue" onClick={handleConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DenyFriendModal;
