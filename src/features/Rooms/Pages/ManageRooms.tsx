import { useState } from "react";
import SearchRooms from "../Components/BTN/SearchRooms";
import CreateRooms from "../Components/MODALS/CreateRoms";
import UseDebounce from "../../../hooks/UseDebounce";

const ManageRooms = () => {
    const [Sname, setName] = useState<string>("");
    const [SStatus, setSStatus] = useState<string>("");
    const [SNum, setNum] = useState<string>("");

    //These are the params to use in usequery into getRooms
    const Name = UseDebounce(Sname, 100);
    const Status = UseDebounce(SStatus, 100);
    const Num = UseDebounce(SNum, 100);

    return (
        <div className="flex justify-center items-center">
            <SearchRooms RName={setName} RStatus={setSStatus} RNumber={setNum} />
            <div  className="ml-24" >
            <CreateRooms />
            </div>
        </div>
    );
};
export default ManageRooms; 