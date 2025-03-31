import { FaBookBookmark } from "react-icons/fa6";
import { IoAccessibilitySharp } from "react-icons/io5";
const MisionVision = () => {
  return (
    <section className=" w-11/12 text-lg mt-2">
      <h2 className=" text-center text-3xl font-bold mb-5">Sobre Nosotros</h2>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-3 text-right">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
            <FaBookBookmark className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Misión</h3>
          <p className="text-muted-foreground leading-relaxed">
            Proporcionar acceso libre y equitativo a recursos informativos,
            educativos y culturales para todos los miembros de la comunidad.
            Promovemos el amor por la lectura, el aprendizaje continuo y la
            inclusión social, ofreciendo un espacio seguro y acogedor donde los
            ciudadanos puedan explorar, aprender y conectarse con el mundo que
            les rodea.
          </p>
        </div>

        <div className="space-y-3 text-left">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
            <IoAccessibilitySharp className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Visión</h3>
          <p className="text-muted-foreground leading-relaxed">
            Ser el centro de referencia y conocimiento de la comunidad, un lugar
            de encuentro vibrante y dinámico que inspire a los ciudadanos a
            desarrollar sus potenciales individuales y colectivos. Aspiramos a
            fortalecer el tejido social y cultural de nuestra comunidad,
            adaptándonos a las nuevas tecnologías y necesidades para ofrecer
            servicios innovadores y de alta calidad que enriquezcan la vida de
            todos los habitantes del municipio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
