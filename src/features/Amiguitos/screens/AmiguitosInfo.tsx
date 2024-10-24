import ListTypeAmiguitos from "../components/ListTypeAmiguitos"
import icono from "../assets/AL_Volutariado_LOGO_Positivo.png";
const AmiguitosInfo = () => {
  return (
    <section className="w-4/5 flex flex-col items-center justify-center" id="Friends">
      <h2 className="font-bold text-2xl">Amigos de la biblioteca</h2>
        <div className="flex items-center mr-32 max-sm:m-0 ">
          <img className="w-40 h-40 max-sm:h-20 max-sm:hidden" src={icono} alt="Amiguitos De La Biblioteca" />
          <p className="text-center max-w-md max-sm:text-sm max-sm:mt-4">
            "Amigos de la Biblioteca" es un programa de voluntariado dedicado
            a apoyar las actividades y servicios de nuestra biblioteca local.
            Nuestra misión es promover la lectura recreativa y la cultura a
            través de la participación comunitaria y el apoyo voluntario.
          </p>
        </div>
        <ListTypeAmiguitos/>
    </section>
  )
}

export default AmiguitosInfo
