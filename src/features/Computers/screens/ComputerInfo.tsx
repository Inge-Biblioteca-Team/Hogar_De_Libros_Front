import GeneralInfo from "../components/GeneralInfo";

const ComputerInfo = () => {
  return (
    <section className="w-full lg:w-full xl:w-full 2xl:w-full  md:w-full flex flex-col items-center justify-center pt-12 max-sm:pt-0 lg:gap-5" id="Computers">
      <h2 className="text-2xl lg:text-3xl 2xl:text-3xl font-bold pb-4">Equipos de cómputo</h2>
      <GeneralInfo />
    </section>
  );
};

export default ComputerInfo;
