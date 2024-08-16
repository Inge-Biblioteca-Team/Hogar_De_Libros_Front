import banner from "../Assets/image.png";
const LandingBanner = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-cover bg-center gap-6 h-72 text-slate-50"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="text-3xl max-sm:text-2xl max-sm:text-center">
        Bienvenidos a la Biblioteca Pública Municipal de Nicoya
      </h1>
      <p className="text-xl max-sm:text-lg max-sm:text-center">Descubra un mundo de conocimiento y explore</p>
      <button
        type="button"
        className="bg-Bottoms text-Text text-lg rounded-lg p-1 
        hover:bg-Bottoms-dark hover:scale-105 max-sm:text-sm"
      >
        Quiénes Somos
      </button>
    </div>
  );
};

export default LandingBanner;
