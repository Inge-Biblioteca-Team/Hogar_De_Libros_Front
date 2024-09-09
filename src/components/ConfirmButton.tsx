const ConfirmButton = ({ text }: { text: string }) => {
  return (
    <button
      type="submit"
      className="bg-Bottoms
                text-white text-xl rounded-lg px-2
                hover:bg-Bottoms-dark hover:scale-105 py-1.5 max-sm:hidden"
             
   
    >
      {text}
    </button>
  );
};

export default ConfirmButton;
