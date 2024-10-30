import { Checkbox, Table } from "flowbite-react";
import Inboxbtn from "./Btn/Inboxbtn";
import { formatToDMY } from "../../../components/FormatTempo";
import { Nota } from "../Types/InboxTypes";

const TblInbox = ({
    message,
    onSelect, 
    selected
}: {
    message: Nota;
    onSelect: (id_Note: number) => void; 
    selected: boolean;
}) => {
    const maxCharacters = 90; 

    const displayMessage =
        message.message.length > maxCharacters
            ? `${message.message.slice(0, maxCharacters)}...`
            : message.message;

    
            const noteDate = formatToDMY(message.date); 
    return (
        <Table.Row key={message.id_Note}>
            <Table.Cell className="p-4">
                <Checkbox 
                    checked={selected} 
                    onChange={() => onSelect(message.id_Note)} 
                />
            </Table.Cell>
            <Table.Cell className="w-35">{noteDate}</Table.Cell> 
            <Table.Cell className="w-35">{message.type}</Table.Cell>
            <Table.Cell className="w-[750px]" title={message.message}>
                {displayMessage}
            </Table.Cell>
            <Table.Cell>
                <Inboxbtn message={message} />
            </Table.Cell>
        </Table.Row>
    );
};

export default TblInbox;
