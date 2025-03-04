import ContacInfo from "../components/ContacInfo";
import ContactForm from "../components/ContactForm";

const DirectContac = () => {
 
  return (
    <section className="w-4/5 max-sm:w-full max-sm:pl-4 max-sm:pr-4 flex flex-col items-center justify-center" id="ContacUs">
    <h2 className="2xl:text-4xl text-2xl lg:pb-8 flex justify-evenly max-sm:pb-0 font-bold mb-4 lg:mb-0 lg:text-4xl pb-4 ">Contáctanos</h2>
    <div className="flex-col flex  lg:flex-row w-full gap-5 items-center justify-between">
        <ContacInfo/>
        <ContactForm/>
    </div>
  </section>

  );
};

export default DirectContac;
