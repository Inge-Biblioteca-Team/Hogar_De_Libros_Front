import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='login'>
                <Link to="/login">Iniciar Sesión</Link>
            </div>
            <div className='books'>
                <Link to="/books">Libros</Link>
            </div>
            <div className='room'>
                <Link to="/rooms">Salas</Link>
            </div>
            <div className='technoteams'>
                <Link to="/technoteams">Equipo Tecnológico</Link>
            </div>
            <div className='courses'>
                <Link to="/courses">Cursos</Link>
            </div>
            <div className='events'>
                <Link to="/events">Eventos</Link>
            </div>
            <div className='libraryfriends'>
                <Link to="/libraryfriends">Amiguitos de la biblioteca</Link>
            </div>
        </div>
    )

}


export default Navbar;

