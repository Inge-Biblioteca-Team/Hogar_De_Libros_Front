import { Button } from "flowbite-react";

const LandingBanner = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-cover bg-center gap-6 h-96 text-slate-50 
       "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.01),90%, #dfe2e6), url(${"https://sicultura-live.s3.amazonaws.com/public/media/nicoyafachada1.jpg"})`,
      }}
    >
      <h1 className="text-3xl max-sm:text-2xl max-sm:text-center">
        Bienvenidos a la Biblioteca Pública Municipal de Nicoya
      </h1>
      <p className="text-xl max-sm:text-lg max-sm:text-center">
        Descubra un mundo de conocimiento y explore
      </p>
      <Button type="button" color={"blue"}  size={"xl"}>
        Quiénes Somos
      </Button>
    </div>
  );
};

export default LandingBanner;
