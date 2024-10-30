import { useQuery } from "react-query"; 
import { SidebarComponent } from "../Components/Sidebar";
import { getPendingNotes } from "../Services/SvInbox";
import { Table, Breadcrumb } from "flowbite-react";
import NoResults from "../../../components/NoResults";
import TblInbox from "../Components/TblInbox";
import { InboxResponse, Nota } from "../Types/InboxTypes";
import { GoRead } from "react-icons/go";
import { PiTrash } from "react-icons/pi";
import useRead from "../Hooks/useRead";
import { useState } from "react"; 
import useMultipleMoveTrassh from "../Hooks/MoveToTrash/useMultipleMoveTrassh";
import { IoMdCheckboxOutline } from "react-icons/io";

const PendingNote = () => {
  const { data: inboxData, isLoading, error } = useQuery<InboxResponse, Error>(
    ["Notifications"],
    () => getPendingNotes(), 
    {
      staleTime: 600,
      keepPreviousData: true,
    }
  );

  const inboxMessages: Nota[] = inboxData?.data.map((item: Nota) => ({
    id_Note: item.id_Note,
    date: item.date,
    message: item.message,
    type: item.type,
    isRead: item.isRead,
    trash: item.trash
  })) || [];

  const { mutate: moveToTrash } = useMultipleMoveTrassh(); 
  const { mutate: markAsRead } = useRead(); 

  const [selectedIds, setSelectedIds] = useState<number[]>([]); 
  const [selectAll, setSelectAll] = useState(false); 

  const handleSelectMessage = (id: number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(selectedId => selectedId !== id); 
      } else {
        return [...prev, id]; 
      }
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]); 
    } else {
      setSelectedIds(inboxMessages.map(message => message.id_Note));
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
      selectedIds.forEach(id => markAsRead(id)); 
      setSelectedIds([]);
      setSelectAll(false); 
    }
  };

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar las notas.</div>;

  return (
    <div className="flex">
      <Breadcrumb.Item></Breadcrumb.Item>
      <div className="flex">
        <SidebarComponent />
        <div className="flex-grow p-8">
          <main className="flex flex-col w-full gap-4">
            <section className="w-full">
              <div className="bg-white p-4 shadow-md h-[3rem] w-[84rem] rounded-2xl flex items-center pb-4">
                <button
                  title={selectAll ? "Deseleccionar todos" : "Seleccionar todos"}
                  type="button"
                  onClick={handleSelectAll}
                >
                  <IoMdCheckboxOutline size={23} />
                </button>
                {selectedIds.length > 0 && (
                  <>
                    <div className="w-px h-6 bg-gray-300 mx-2" />
                    <button 
                      title="Marcar como leídos"
                      type="button"
                      onClick={handleMarkAsRead} 
                    >
                      <GoRead size={22} />
                    </button>
                    <div className="w-px h-6 bg-gray-300 mx-2" />
                    <button
                      title="Mover a papelera"
                      type="button"
                      onClick={handleDeleteSelected}
                    >
                      <PiTrash size={24} />
                    </button>
                  </>
                )}
              </div>

              <div className="pt-4">
              {inboxData && inboxData.count > 0 ? (
                <div className="overflow-hidden rounded-2xl pt-4 w-[84rem]">
                  <div className="max-h-[40rem] overflow-y-auto">
                    <Table hoverable className="text-center">
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
                <NoResults />
              )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PendingNote;