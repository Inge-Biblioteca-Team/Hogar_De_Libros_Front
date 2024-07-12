import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (

        <nav className="bg-[#557EE9] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col items-center">
                <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faBookOpen} className="text-white h-6 w-6" /> {/*Icono del libro*/}
                    <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">Biblioteca Publica Municipal de Nicoya</span>
                </div>
                {/*Menú*/}
                <div className="w-full">
                    <ul className="flex flex-wrap justify-center mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:border-0 md:bg-[#557EE9] dark:bg-gray-800 md:dark:bg-[#557EE9] dark:border-gray-700">
                        <li>
                            <Link to="/login" className="block py-2 px-3 text-white hover:underline" aria-current="page">Iniciar Sesion</Link>
                        </li>
                        <li>
                            <Link to="/books" className="block py-2 px-3 text-white hover:underline">Libros</Link>
                        </li>
                        <li>
                            <Link to="/rooms" className="block py-2 px-3 text-white hover:underline">Salas</Link>
                        </li>
                        <li>
                            <Link to="/technoteams" className="block py-2 px-3 text-white hover:underline">Equipo Tecnológico</Link>
                        </li>
                        <li>
                            <Link to="/curses" className="block py-2 px-3 text-white hover:underline">Cursos</Link>
                        </li>
                        <li>
                            <Link to="/events" className="block py-2 px-3 text-white hover:underline">Eventos</Link>
                        </li>
                        <li>
                            <Link to="/libraryfriends" className="block py-2 px-3 text-white hover:underline">Amiguitos de la biblioteca</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;

