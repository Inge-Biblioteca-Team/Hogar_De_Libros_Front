const NoMessage = ({text}:{text:string}) => {
    return (
      <div
        className="dark:bg-[#2d2d2d] flex items-center justify-center w-full bg-white rounded-b-xl text-2xl"
        style={{ height: "30rem" }}
      >
        <span>No hay mensajes en {text} </span>
      </div>
    );
  };
  
  export default NoMessage;
  