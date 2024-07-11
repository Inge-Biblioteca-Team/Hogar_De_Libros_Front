import  CollaborationsForm from "../Components/CollaborationsForm";

function Collaborations() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-3">Colaboraciones</h1>
        <h2 className="text-lg ">¿Que son las colaboraciones?</h2>
        <div className=" mt-5 max-w-md mx-auto">
          <p className="text-center mb-5">
           Las colaboraciones son una manera de fomentar a  la comunidad
           a participar en actividades que benefician al aprendizaje de manera
           recreativa y educativa de una manera mas amplica colaborando con la 
           biblioteca y su institucion benefiandonos ambos de esta colaboracion 
           mediante publicadad de ambas instituciones dandonos a conocer a la 
           comunidad
          </p>
        </div>
        <h3 className="text-lg mb-5">Se parte de nuestros colaboradores rellenando el formulario</h3>
       < CollaborationsForm/>
      </div>
    </>
  );
}

export default Collaborations;
