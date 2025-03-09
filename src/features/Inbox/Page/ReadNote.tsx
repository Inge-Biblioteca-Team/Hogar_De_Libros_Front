import { useState } from "react";
import { useQuery } from "react-query";
import { getReadNotes } from "../Services/SvInbox";
import { Button, ButtonGroup, Table } from "flowbite-react";
import TblInbox from "../Components/TblInbox";
import { InboxResponse, Nota } from "../Types/InboxTypes";
import { PiTrash } from "react-icons/pi";
import { IoMdCheckboxOutline } from "react-icons/io";
import useMultipleMoveTrassh from "../Hooks/MoveToTrash/useMultipleMoveTrassh";
import NoMessage from "../Components/NoMessage";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

const ReadNote = () => {
  const {
    data: inboxData,
    isLoading,
    error,
  } = useQuery<InboxResponse, Error>(
    ["ReadNotifications"],
    () => getReadNotes(),
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

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

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
      moveToTrash(selectedIds);
      setSelectedIds([]);
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
            color={"grey"}
            title={selectAll ? "Desmarcar todos" : "Seleccionar todos"}
            type="button"
            onClick={handleSelectAll}
          >
            <IoMdCheckboxOutline size={23} />
          </Button>
          {selectedIds.length > 0 && (
            <Button
              size={"sm"}
              color={"grey"}
              title="Mover a papelera"
              type="button"
              onClick={handleDeleteSelected}
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
        <NoMessage text="leído" />
      )}
    </>
  );
};

export default ReadNote;
