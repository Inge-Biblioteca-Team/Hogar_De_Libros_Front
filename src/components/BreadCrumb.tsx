import { Breadcrumb } from "flowbite-react"
import { HiHome } from "react-icons/hi";

const HomeCrumb= ()=>{
    return(
        <>
        <Breadcrumb.Item href="/HogarDeLibros/Computo" icon={HiHome}>
        Inicio
        </Breadcrumb.Item>
        </>
    )

}
const ManageCrumb= ()=>{
    return(
        <>
        <Breadcrumb.Item href="/HogarDeLibros/Gestion">Gestión</Breadcrumb.Item>
        </>
    )
}

const LastCrumb =({ CurrentPage }: { CurrentPage: string }) => {
    return (
      <>
        <Breadcrumb.Item>{CurrentPage}</Breadcrumb.Item>
      </>
    );
  };
export {ManageCrumb, HomeCrumb, LastCrumb}