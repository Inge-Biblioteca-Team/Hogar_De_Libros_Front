import CardTypeAmiguito from "../components/CardTypeAmiguito";
const AmiguitosInfo = ({ home }: { home?: boolean }) => {
  return (
    <>
      <h2
        className="font-bold text-4xl text-center 
          max-sm:text-xl"
      >
        Amigos de la biblioteca
      </h2>
      {home && (
        <h4 className=" text-center text-md max-lg:pl-10 max-lg:pr-10">
          Únete a la biblioteca y comparte con nosotros. Existen varias formas de
          hacerlo, aquí te comentamos cómo.
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
          className="w-full lg:w-full xl:w-full 2xl:w-full grid grid-flow-col gap-4 
        lg:gap-4  xl:gap-4 xl:pl-2 xl:pr-2 2xl:gap-4 2xl:pl-2 2xl:pr-2"
        >
          <CardTypeAmiguito />
        </div>
      </article>
    </>
  );
};

export default AmiguitosInfo;
