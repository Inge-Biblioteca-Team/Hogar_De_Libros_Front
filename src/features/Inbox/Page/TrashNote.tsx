import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getTrashNotes } from "../Services/SvInbox";
import { Button, ButtonGroup, Table } from "flowbite-react";
import TblInbox from "../Components/TblInbox";
import { InboxResponse, Nota } from "../Types/InboxTypes";
import { PiTrash } from "react-icons/pi";
import useDeleteMulTrash from "../Hooks/Delete/useDeleteMulTrash";
import { GoUnread } from "react-icons/go";
import useRecoverMulTrash from "../Hooks/RecoverfromTrash/useRecoverMulTrash";
import { IoMdCheckboxOutline } from "react-icons/io";
import NoMessage from "../Components/NoMessage";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

const TrashNote = () => {
  const queryClient = useQueryClient();
  const {
    data: inboxData,
    isLoading,
   
  } = useQuery<InboxResponse, Error>(
    ["TrashNotifications"],
    () => getTrashNotes(),
    {
      staleTime: 600,
      keepPreviousData: true,
    }
  );

  const inboxMessages: Nota[] =
    inboxData?.data.map((item: Nota) => ({
      id_Note: item.id_Note,
      date: item.date,
      message: item.message,
      type: item.type,
      isRead: item.isRead,
      trash: item.trash,
    })) || [];

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const { mutate: deleteSelected } = useDeleteMulTrash();
  const { mutate: recoverSelected } = useRecoverMulTrash();

  const handleSelectMessage = (id: number) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(inboxMessages.map((message) => message.id_Note));
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = () => {
    if (selectedIds.length > 0) {
      deleteSelected(selectedIds, {
        onSuccess: () => {
          setSelectedIds([]);
          queryClient.invalidateQueries("TrashNotifications");
        },
      });
    }
  };

  const handleRecoverSelected = () => {
    if (selectedIds.length > 0) {
      recoverSelected(selectedIds, {
        onSuccess: () => {
          setSelectedIds([]);
          queryClient.invalidateQueries("TrashNotifications");
        },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center mt-12">
        <figure>
          <img width={200} src={Loader} alt="Cargando..." />
          <figcaption className="text-center">Cargando...</figcaption>
        </figure>
      </div>
    );
  }
  return (
    <>
      <div className="dark:bg-[#2d2d2d]  bg-white p-4 flex items-center pb-4 rounded-t-xl">
        <ButtonGroup>
          <Button
            size={"sm"}
            title={selectAll ? "Desmarcar todos" : "Seleccionar todos"}
            type="button"
            onClick={handleSelectAll}
            color={"grey"}
          >
            <IoMdCheckboxOutline size={23} />
          </Button>
          {selectedIds.length > 0 && (
            <Button
              size={"sm"}
              color={"grey"}
              title="Eliminar seleccionados"
              type="button"
              onClick={handleDeleteSelected}
            >
              <PiTrash size={23} />
            </Button>
          )}
          {selectedIds.length > 0 && (
            <Button
              size={"sm"}
              color={"grey"}
              title="Recuperar seleccionados"
              type="button"
              onClick={handleRecoverSelected}
            >
              <GoUnread size={24} />
            </Button>
          )}
        </ButtonGroup>
      </div>
      {inboxData && inboxData.count > 0 ? (
        <div className="overflow-hidden rounded-b-2xl">
          <div className="dark:bg-[#2d2d2d] max-h-[40rem] min-h-[40rem] bg-white overflow-y-auto ">
            <Table hoverable className="dark:bg-[#2d2d2d]  text-center text-lg">
              <Table.Body className="dark:bg-[#2d2d2d] dark:text-white">
                {inboxMessages.map((message: Nota) => (
                  <TblInbox
                    key={message.id_Note}
                    message={message}
                    onSelect={handleSelectMessage}
                    selected={selectedIds.includes(message.id_Note)}
                  />
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      ) : (
        <NoMessage text="recibidos" />
      )}
    </>
  );
};

export default TrashNote;
