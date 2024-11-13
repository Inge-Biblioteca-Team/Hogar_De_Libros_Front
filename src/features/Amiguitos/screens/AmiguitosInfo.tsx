import CardTypeAmiguito from "../components/CardTypeAmiguito";
const AmiguitosInfo = ({ home }: { home?: boolean }) => {
  return (
    <section
      className="w-4/5 flex flex-col items-center justify-center gap-5"
      id="Friends"
    >
      <h2 className="font-bold text-2xl">Amigos de la biblioteca</h2>
      {home&&
      <h4 className=" text-center text-md">Únete a la biblioteca y comparte con nosotros existen varias formas de hacerlos aquí te comentamos como.</h4>
      }
      <article className=" max-sm:w-full flex overflow-x-scroll lg:overflow-hidden lg:gap-6 pl-4 pr-4 scroll">
  <div className="grid grid-flow-col auto-cols-[70%]  lg:auto-cols-fr gap-8">
    <CardTypeAmiguito />
  </div>
</article>
    </section>
  );
};

export default AmiguitosInfo;
