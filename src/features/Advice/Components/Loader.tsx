
import loadingImg from "../../OPAC/Assets/LoaderOPAC.gif";

const Loader = () => {
  return (
    <figure>
      <img width={400} src={loadingImg} alt="... Cargando" />
      <figcaption className=" text-center">... cargando</figcaption>
    </figure>
  );
};

export default Loader;
