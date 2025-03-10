import { useQuery } from "react-query";
import { getPendingNotes } from "../Services/SvInbox";
import { Button, ButtonGroup, Table } from "flowbite-react";
import TblInbox from "../Components/TblInbox";
import { InboxResponse, Nota } from "../Types/InboxTypes";
import { GoRead } from "react-icons/go";
import { PiTrash } from "react-icons/pi";
import { useState } from "react";
import useMultipleMoveTrassh from "../Hooks/MoveToTrash/useMultipleMoveTrassh";
import { IoMdCheckboxOutline } from "react-icons/io";
import NoMessage from "../Components/NoMessage";
import UseMarkMultipleAsRead from "../Hooks/UseMarkMultipleAsRead";
import Loader from '../../OPAC/Assets/LoaderOPAC.gif';

const PendingNote = () => {
  const {
    data: inboxData,
    isLoading,
    
  } = useQuery<InboxResponse, Error>(
    ["Notifications"],
    () => getPendingNotes(),
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

  const { mutate: moveToTrash } = useMultipleMoveTrassh();
  const { mutate: markMulRead } = UseMarkMultipleAsRead();

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectMessage = (id: number) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((selectedId) => selectedId !== id);
      } else {
        return [...prev, id];
      }
    });
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
      moveToTrash(selectedIds);
      setSelectedIds([]);
      setSelectAll(false);
    }
  };

  const handleMarkAsRead = () => {
    if (selectedIds.length > 0) {
      markMulRead(selectedIds);
      setSelectedIds([]);
      setSelectAll(false);
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
      <div className="bg-white p-4 flex items-center pb-4 rounded-t-xl">
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
              title="Marcar como leídos"
              type="button"
              onClick={handleMarkAsRead}
              color={"grey"}
            >
              <GoRead size={23} />
            </Button>
          )}
          {selectedIds.length > 0 && (
            <Button
              size={"sm"}
              title="Mover a papelera"
              type="button"
              onClick={handleDeleteSelected}
              color={"grey"}
            >
              <PiTrash size={23} />
            </Button>
          )}
        </ButtonGroup>
      </div>
      {inboxData && inboxData.count > 0 ? (
        <div className="overflow-hidden rounded-b-2xl">
          <div className="max-h-[40rem] min-h-[40rem] bg-white overflow-y-auto ">
            <Table hoverable className="text-center text-lg">
              <Table.Body>
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

export default PendingNote;
