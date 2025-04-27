import ContacInfo from "../components/ContacInfo";
import ContactForm from "../components/ContactForm";

const DirectContac = () => {
  return (
    <>
      <h2
        className="font-bold text-4xl text-center 
          max-sm:text-xl"
      >
        Contáctanos
      </h2>
      <div
        className="flex justify-between  w-full gap-5 items-start 
      max-lg:flex-col"
      >
        <ContacInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default DirectContac;
