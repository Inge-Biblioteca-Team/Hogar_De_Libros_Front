import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { SidebarComponent } from "../Components/Sidebar";
import { getTrashNotes } from "../Services/SvInbox";
import { Table, Breadcrumb } from "flowbite-react";
import NoResults from "../../../components/NoResults";
import TblInbox from "../Components/TblInbox";
import { InboxResponse, Nota } from "../Types/InboxTypes";
import { PiTrash } from "react-icons/pi";
import useDeleteMulTrash from "../Hooks/Delete/useDeleteMulTrash";
import { GoUnread } from "react-icons/go";
import useRecoverMulTrash from "../Hooks/RecoverfromTrash/useRecoverMulTrash";
import { IoMdCheckboxOutline } from "react-icons/io";

const TrashNote = () => {
  const queryClient = useQueryClient();
  const { data: inboxData, isLoading, error } = useQuery<InboxResponse, Error>(
    ["TrashNotifications"],
    () => getTrashNotes(),
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
      setSelectedIds(inboxMessages.map(message => message.id_Note));
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = () => {
    if (selectedIds.length > 0) {
      deleteSelected(selectedIds, {
        onSuccess: () => {
          setSelectedIds([]);
          queryClient.invalidateQueries("TrashNotifications"); 
        }
      });
    }
  };

  const handleRecoverSelected = () => {
    if (selectedIds.length > 0) {
      recoverSelected(selectedIds, {
        onSuccess: () => {
          setSelectedIds([]);
          queryClient.invalidateQueries("TrashNotifications"); 
        }
      });
    }
  };

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar las notas de la papelera.</div>;

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
                      title="Eliminar seleccionados"
                      type="button"
                      onClick={handleDeleteSelected}
                    >
                      <PiTrash size={24} />
                    </button>
                    <div className="w-px h-6 bg-gray-300 mx-2" />
                    <button
                      title="Recuperar seleccionados"
                      type="button"
                      onClick={handleRecoverSelected}
                    >
                      <GoUnread size={24} />
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

export default TrashNote;

