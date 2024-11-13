import CardTypeAmiguito from "../components/CardTypeAmiguito";
const AmiguitosInfo = () => {
  return (
    <section
      className="w-4/5 flex flex-col items-center justify-center gap-5"
      id="Friends"
    >
      <h2 className="font-bold text-2xl">Amigos de la biblioteca</h2>
      <article className="w-full flex overflow-x-scroll lg:overflow-hidden lg:gap-6 pl-4 pr-4 scroll">
  <div className="grid grid-flow-col auto-cols-[70%]  lg:auto-cols-fr gap-8">
    <CardTypeAmiguito />
  </div>
</article>
    </section>
  );
};

export default AmiguitosInfo;
