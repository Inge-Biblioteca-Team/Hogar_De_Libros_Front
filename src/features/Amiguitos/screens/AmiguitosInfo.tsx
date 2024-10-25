import CardTypeAmiguito from "../components/CardTypeAmiguito";
const AmiguitosInfo = () => {
  return (
    <section
      className="w-4/5 flex flex-col items-center justify-center gap-5"
      id="Friends"
    >
      <h2 className="font-bold text-3xl">Amigos de la biblioteca</h2>
      <article className=" flex justify-between gap-6">
        <CardTypeAmiguito />
      </article>
    </section>
  );
};

export default AmiguitosInfo;
