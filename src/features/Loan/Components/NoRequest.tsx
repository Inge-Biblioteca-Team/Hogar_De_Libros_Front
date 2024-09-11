const NoRequest = ({ text }: { text: string }) => {
  return (
    <>
      <div className=" w-full text-center text-3xl font-bold mt-32">{text}</div>
      <figure className=" w-full flex items-center justify-center">
        <img
          src="https://media.tenor.com/dToZwOQOtBwAAAAi/strinova-kokona.gif"
          alt=""
        />
      </figure>
    </>
  );
};

export default NoRequest;
