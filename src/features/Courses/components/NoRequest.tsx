const NoRequest = ({ text }: { text: string }) => {
    return (
      <div className="flex justify-center items-center w-full h-48">
            <div className="text-center text-2xl font-bold ml-10">{text}</div>
      </div>
    );
  };
  
  export default NoRequest;