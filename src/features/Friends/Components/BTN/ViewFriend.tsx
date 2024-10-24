import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Friend } from "../../Types/FriendType";

const ViewFriend = ({
    see,
    setSee,
    friend,
  }: {
    see: boolean;
    setSee: Dispatch<SetStateAction<boolean>>;
    friend: Friend; 
  }) => {
    return (
      <Modal show={see} onClose={() => setSee(false)} size-40>
        <Modal.Header>
          <span>Solicitud de amigo de la biblioteca: </span>
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-2">
          <div className="flex-col flex gap-2 text-left justify-start">
          <strong className="text-center p-2">Información del solicitante: </strong>
          <span>
            <strong>Nombre:</strong> {friend.UserFullName}
          </span>
          <span>
            <strong>Cedula:</strong> {friend.UserCedula}
          </span>
          <span>
            <strong>Fecha de nacimiento:</strong> {new Date(friend.UserBirthDate).toLocaleDateString()}
          </span>
          <span>
            <strong>Número de telefono:</strong> {friend.UserPhone}
          </span>
          <span>
            <strong>Correo electrónico:</strong> {friend.UserEmail}
          </span>
        
          <span>
            <strong>Direccion de residencia:</strong> {friend.UserAddress}
          </span>
          <strong className="text-center p-2">Información de la solicitud: </strong>

          <span>
            <strong>Categoría solicitada :</strong> {friend.PrincipalCategory}
          </span>

          <span>
            <strong>Categoría solicitada :</strong> {friend.PrincipalCategory}
          </span>

          <span>
            <strong>Sub categoría solicitada :</strong> {friend.SubCategory}
          </span>
          {friend.Experience != null ? (
            <span>
             <strong>Experiencia del solicitante :</strong> {friend.Experience}
            </span>
            ) : (
            <span>
             <strong>Experiencia del solicitante :</strong> 'No tiene experiencia'
             </span>
            )}
            <span>
            <strong>Fecha de solicitud :</strong> {new Date(friend.DateGenerated).toLocaleDateString()}
          </span>
        {friend.ExtraInfo != null?(
            <span>
            <strong>Información extra :</strong> {friend.ExtraInfo}
            </span>
        ):(
            <span>
            <strong>Información extra :</strong> 'El solicitante no proporciono información extra'
            </span>
        )}

          </div>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-center">
          <Button color={"blue"} onClick={() => setSee(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ViewFriend;