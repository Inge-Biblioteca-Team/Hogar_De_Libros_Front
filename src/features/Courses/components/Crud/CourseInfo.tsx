import { useLocation } from 'react-router-dom';
import { Courses } from "../../types/Courses";

const CourseInfo = () => {
    const location = useLocation();
    const course: Courses = location.state.course;

    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="flex w-full max-w-4xl">
                <figure className="w-1/3 flex items-center justify-center p-4">
                    <img
                        src={course.image || 'src/Assets/course.jpg'}
                        alt={course.courseType}
                        className="rounded-lg h-64 shadow-md w-64 object-cover"
                    />
                </figure>
                <div className="w-2/3 p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Curso: {course.courseType}
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-600">
                            <strong>Encargado:</strong> {course.instructor}
                        </p>
                        <p className="text-gray-600">
                            <strong>Fecha Inicial:</strong> {new Date(course.date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600">
                            <strong>Ubicación:</strong> {course.location}
                        </p>
                        <p className="text-gray-600">
                            <strong>Hora:</strong> {course.courseTime}
                        </p>
                        <p className="text-gray-600">
                            <strong>Cupos Disponibles:</strong> {course.capacity}
                        </p>
                        <p className="text-gray-600">
                            <strong>Rango de Edad:</strong> {course.targetAge}
                        </p>
                        <p className="text-gray-600">
                            <strong>Fecha Final:</strong> {new Date(course.endDate).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600">
                            <strong>Estado:</strong> {course.Status ? "Activo" : "Inactivo"}
                        </p>
                        <p className="text-gray-600">
                            <strong>Duración:</strong> {course.duration} Meses
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-center w-full">
                <a
                    href="/HogarDeLibros/Gestion/Cursos"
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Regresar
                </a>
            </div>
        </div>
    );
};

export default CourseInfo;
