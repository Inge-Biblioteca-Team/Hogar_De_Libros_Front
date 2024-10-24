import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Friend } from "../../Types/FriendType";
import UseDenyFriend from "../../hooks/UseDentFrined";

const AproveFriendModal = ({
  AproveFriend,
  setAproveFriend,
  friend,
}: {
    AproveFriend: boolean;
    setAproveFriend: Dispatch<SetStateAction<boolean>>;
  friend: Friend;
}) => {
  const { mutate: PatchStatus } = UseDenyFriend();
  const handleConfirm = () => {
    PatchStatus(friend.FriendId, {
      onSuccess: () => {
        setAproveFriend(false);
      },
    });
  };

  return (
    <Modal show={AproveFriend} onClose={() => setAproveFriend(false)} popup size={"md"}>
      <Modal.Body className="text-center">
        <div className="text-center mt-7">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        </div>
        <span>
          ¿Esta seguro de aceptar la solicitu de amgio de {" "}
          <strong className=" font-bold">{friend.UserFullName}</strong>?
        </span>
        <br />
        <span>Esta acción no es revertible!!!</span>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"failure"} onClick={() => setAproveFriend(false)}>
          Cancelar
        </Button>
        <Button color={"blue"} onClick={handleConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AproveFriendModal;
