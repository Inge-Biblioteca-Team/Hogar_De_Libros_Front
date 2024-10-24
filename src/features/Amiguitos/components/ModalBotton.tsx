import { Button } from "flowbite-react";
import { useState } from "react";
import FormModal from "./Modals/FormModal";

const ModalButtonAM = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  
    return (
      <div>
        
        <Button 
        type="submit"
        className="bg-Bottoms text-Text text-lg rounded-lg p-1 
        hover:bg-Bottoms-dark hover:scale-105
        max-sm:text-sm"
        onClick={openModal}>
          Participar +
        </Button>
  
        
        <FormModal isOpen={isOpen} onClose={closeModal} />
      </div>
    );
  };
  
  export default ModalButtonAM;