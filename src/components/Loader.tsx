
import loader from "../Assets/LoaderOPAC.gif"

const Loader = () => {
  return (
    <div className=" w-full flex items-center justify-center">
    <figure>
      <img width={400} src={loader} alt="...Cargando" />
      <figcaption className=" text-center">...Cargando</figcaption>
    </figure>
  </div>
  )
}

export default Loader
