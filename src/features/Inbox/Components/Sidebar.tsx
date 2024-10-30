import { Sidebar } from "flowbite-react";
import { HiTrash, HiInbox } from "react-icons/hi";
import { MdMarkAsUnread } from "react-icons/md";

export function SidebarComponent() {
  return (
    <Sidebar aria-label="Default sidebar example" className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup >
          <Sidebar.Item href="/HogarDeLibros/Mensajería/Recibidos" icon={HiInbox} >
            Recibidos
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Mensajería/Leídos" icon={MdMarkAsUnread}>
          Leídos
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Mensajería/Papelera" icon={HiTrash}>
            Papelera
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
