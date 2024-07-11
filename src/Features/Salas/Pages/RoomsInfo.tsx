import imagen from '../assets/Biblioteca.jpg'
import RoomsInfoText from '../Components/RoomsInfoText'

function RoomsInfo() {
    // Este componente es la pantalla de informacion de las salas
  return (
    <>
    <div className='flex justify-evenly -space-x-20 items-center'>
        <img className='w-1/3 ' src={imagen} alt="" />
        <RoomsInfoText />
    </div>
      
    </>
  )
}

export default RoomsInfo
