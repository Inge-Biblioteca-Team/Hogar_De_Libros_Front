import { Dispatch, SetStateAction } from "react";
import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";

const BtnAccion = ({
  setSee,
  setDenyFriend,
  setAproveFriend,
}: {
  setSee: Dispatch<SetStateAction<boolean>>;
  setDenyFriend: Dispatch<SetStateAction<boolean>>;
  setAproveFriend: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full flex gap-3 items-center justify-center text-3xl">
      <button
        type="button"
        title="Ver Información de solicitud de amigo"
        onClick={() => setSee(true)}
      >
        <PiEyeLight size={24} />
      </button>
      <button
        type="button"
        title="Rechazar solicitud de amigo"
        onClick={() => setDenyFriend(true)} 
      >
        <PiPencilDuotone size={24} />
      </button>
      <button
        type="button"
        title="Aprobar solicitud de amigo"
        onClick={() => setAproveFriend(true)}
      >
        <PiTrash size={24} />
      </button>
    </div>
  );
};

export default BtnAccion;
