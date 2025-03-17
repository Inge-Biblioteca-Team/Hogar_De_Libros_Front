import { useState } from "react";
import { SidebarComponent } from "../Components/Sidebar";
import PendingNote from "./PendingNote";
import ReadNote from "./ReadNote";
import TrashNote from "./TrashNote";

const Inbox = () => {
  const [option, setOption] = useState<string>("Recibidos");

  return (
    <div className="flex w-full gap-8 items-center">
      <SidebarComponent setOption={setOption} option={option} />
      <main className="flex flex-col w-[79%]">
        <section className="w-full">
          {option == "Recibidos" && <PendingNote />}
          {option == "Leídos" && <ReadNote />}
          {option == "Papelera" && <TrashNote />}
        </section>
      </main>
    </div>
  );
};

export default Inbox;
