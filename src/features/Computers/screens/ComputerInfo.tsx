import GeneralInfo from "../components/GeneralInfo";

const ComputerInfo = () => {
  return (
    <section className="w-full   flex flex-col items-center justify-center pt-12 lg:gap-5" id="Computers">
      <h2 className="text-2xl 2xl:text-4xl font-bold lg:text-4xl pb-4">Equipos de cómputo</h2>
      <GeneralInfo />
    </section>
  );
};

export default ComputerInfo;
