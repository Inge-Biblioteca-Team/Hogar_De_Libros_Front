import ContacInfo from "../components/ContacInfo";
import ContactForm from "../components/ContactForm";

const DirectContac = () => {
 
  return (
    <section className="space-y-4 w-11/12 pl-2 pr-2" id="ContacUs">
    <h2 className="font-bold text-4xl text-center 
          max-sm:text-xl">Contáctanos</h2>
    <div className="flex-col flex  lg:flex-row w-full gap-5 items-start justify-between">
        <ContacInfo/>
        <ContactForm/>
    </div>
  </section>

  );
};

export default DirectContac;
