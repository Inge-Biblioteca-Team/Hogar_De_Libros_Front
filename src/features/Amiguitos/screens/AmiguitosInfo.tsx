import CardTypeAmiguito from "../components/CardTypeAmiguito";
const AmiguitosInfo = ({ home }: { home?: boolean }) => {
  return (
    <section
      className="w-full lg:w-full pr-16 pl-16 md:pl-0 md:pr-0 max-sm:pl-0 max-sm:pr-0 lg:pl-16 lg:pr-16  md:w-full flex max-sm:w-full flex-col items-center justify-center gap-5"
      id="Friends"
    >
      <h2 className="2xl:text-4xl font-bold text-2xl lg:text-4xl pb-4">
        Amigos de la biblioteca
      </h2>
      {home && (
        <h4 className=" text-center text-md">
          Únete a la biblioteca y comparte con nosotros existen varias formas de
          hacerlos aquí te comentamos como.
        </h4>
      )}
      <article className="w-full md:w-full lg:w-full flex overflow-x-scroll justify-center lg:justify-center lg:overflow-hidden lg:gap-6 scroll">
        <div className="grid lg:w-full w-full grid-flow-col max-sm:auto-cols-[87%] max-sm:pl-14 max-sm:gap-x-10  md:pl-2 md:pr-2  md:auto-cols-[100%]  lg:auto-cols-fr gap-8">
          <CardTypeAmiguito />
        </div>
      </article>
    </section>
  );
};

export default AmiguitosInfo;
