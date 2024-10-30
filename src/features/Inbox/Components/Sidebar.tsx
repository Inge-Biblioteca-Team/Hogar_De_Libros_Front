import { Sidebar } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiTrash, HiInbox } from "react-icons/hi";
import { MdMarkAsUnread } from "react-icons/md";

export function SidebarComponent({
  setOption,
  option,
}: {
  setOption: Dispatch<SetStateAction<string>>;
  option: string;
}) {
  return (
    <Sidebar aria-label="Default sidebar example" className="h-[88vh]">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            onClick={() => setOption("Recibidos")}
            icon={HiInbox}
            className={`${
              option == "Recibidos" ? "bg-[#dfe2e6]" : ""
            } cursor-pointer  `}
          >
            Recibidos
          </Sidebar.Item>
          <Sidebar.Item
            className={`${
              option == "Leidos" ? "bg-[#dfe2e6]" : ""
            } cursor-pointer  `}
            onClick={() => setOption("Leidos")}
            icon={MdMarkAsUnread}
          >
            Leídos
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() => setOption("Papelera")}
            icon={HiTrash}
            className={`${
              option == "Papelera" ? "bg-[#dfe2e6]" : ""
            } cursor-pointer  `}
          >
            Papelera
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
