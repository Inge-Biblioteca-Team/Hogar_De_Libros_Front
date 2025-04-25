import { Sidebar } from 'flowbite-react'
import SidebarContext from '../../../Context/NavBarContext/NavbarContext';
import { useContext } from 'react';

const ProfileOptions = () => {
    const { handleNavigation } = useContext(SidebarContext);
  return (
        <Sidebar.Collapse label="Perfil" id="profile" className=" hidden max-sm:flex">
           <Sidebar.Item
             className=" hidden max-sm:block"
             onClick={() => handleNavigation("/HogarDeLibros/Perfil/EditarPerfil")}
           >
             Editar Perfil
           </Sidebar.Item>
           <Sidebar.Item
             className=" hidden max-sm:block"
             onClick={() => handleNavigation("/HogarDeLibros/Perfil/MisPréstamos")}
           >
             Mis prestamos
           </Sidebar.Item>
           <Sidebar.Item
             className=" hidden max-sm:block"
             onClick={() => handleNavigation("/HogarDeLibros/Perfil/CursosMatriculados")}
           >
             Cursos matriculados
           </Sidebar.Item>
         </Sidebar.Collapse>
  )
}

export default ProfileOptions
