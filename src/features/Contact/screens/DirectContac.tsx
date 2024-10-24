import ContacInfo from "../components/ContacInfo";
import ContactForm from "../components/ContactForm";

const DirectContac = () => {
 
  return (
    <section className="w-4/5 flex flex-col items-center justify-center" id="ContacUs">
    <h2 className="text-3xl pb-8 flex justify-evenly max-sm:pb-0 font-bold">Contáctanos</h2>
    <div className="flex w-full gap-5 items-center justify-between">
        <ContacInfo/>
        <ContactForm/>
    </div>
  </section>

  );
};

export default DirectContac;
