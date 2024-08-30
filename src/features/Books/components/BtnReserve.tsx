
const BtnReserve = ({ text, Goto }: { id: string, text:string, Goto:()=> void }) => {

  return (
    <button
      type="button"
      className="bg-Bottoms text-Text text-lg rounded-lg p-1 
        hover:bg-Bottoms-dark hover:scale-105
         mt-4 max-sm:hidden"
      onClick={Goto}
    >
      {text}
    </button>
  );
};

export default BtnReserve;
