import { Breadcrumb } from "flowbite-react"
import { HiHome } from "react-icons/hi";

const HomeComputerRouter= ()=>{
    return(
        <>
        <Breadcrumb.Item href="/HogarDeLibros/Computo" icon={HiHome}>
        Inicio
        </Breadcrumb.Item>
        </>
    )

}
const ManagerRouter= ()=>{
    return(
        <>
        <Breadcrumb.Item href="/HogarDeLibros/Gestion">Gestión</Breadcrumb.Item>
        </>
    )
}
const NwComputerRouter= ()=>{
    return(
        <>
        <Breadcrumb.Item href="/HogarDeLibros/Gestion/AñadirEquipo">Añadir Equipo</Breadcrumb.Item>
        </>
    )
}
const EditComputerRouter= ()=>{
    return(
        <>
        <Breadcrumb.Item href="/HogarDeLibros/Gestion/EditarComputadora">Editar</Breadcrumb.Item>
        </>
    )
}


 export{ManagerRouter,HomeComputerRouter,NwComputerRouter}