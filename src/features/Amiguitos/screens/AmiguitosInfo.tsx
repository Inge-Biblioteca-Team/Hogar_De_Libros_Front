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
      <article className="lg:hidden xl:hidden 2xl:hidden w-full md:w-full  flex overflow-x-scroll justify-center scroll">
        <div
          className=" max-sm:w-full max-sm:pl-4 max-sm:pr-4  gap-6
        md:w-full md:pl-2  grid grid-flow-col auto-cols-[99%] "
        >
          <CardTypeAmiguito />
        </div>
      </article>

      <article className=" hidden lg:block xl:block 2xl:block  w-full lg:w-full xl:w-full 2xl:w-full">
        <div
          className="w-full lg:w-full xl:w-full 2xl:w-full grid grid-flow-col gap-4 pl-2 pr-2
        lg:gap-4 lg:pl-2 lg:pr-2 xl:gap-4 xl:pl-2 xl:pr-2 2xl:gap-4 2xl:pl-2 2xl:pr-2"
        >
          <CardTypeAmiguito />
        </div>
      </article>
    </section>
  );
};

export default AmiguitosInfo;
