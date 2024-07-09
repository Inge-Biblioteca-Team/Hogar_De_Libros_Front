
const BotonReserva = ({id}:{id:number}) => {

  const idLibro = id
  console.log(idLibro)
  
  return (
    <div className="w-full flex items-center justify-center pt-4">
      <button type="button" className="bg-Bottoms text-Text text-lg rounded-lg p-1 
      hover:bg-Bottoms-dark hover:scale-125">Reservar Ahora</button>
    </div>
  )
}

export default BotonReserva
