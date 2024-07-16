import image from "../assets/image.png";
const LandingBanner = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-cover bg-center gap-6 h-72 text-slate-50"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-3xl">
        Bienvenidos A La Biblioteca Publica Municipal De Nicoya
      </h1>
      <p className="text-xl">Descubra un mundo de conocimiento y explore</p>
      <button
        type="button"
        className="bg-Bottoms text-Text text-lg rounded-lg p-1 
        hover:bg-Bottoms-dark hover:scale-105"
      >
        Quienes Somos
      </button>
    </div>
  );
};

export default LandingBanner;
