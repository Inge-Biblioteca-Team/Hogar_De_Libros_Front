const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 fixed bottom-0 w-full">
            {/*Contenedor principal */}
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Biblioteca Publica Municipal de Nicoya </span>
                        </a>
                        {/*Ubicación de la empresa */}
                        <div className="mt-4">
                            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Ubicación</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <span>50 Norte del Liceo de Nicoya, frente a piscinas ANDE</span>
                                </li>
                            </ul>
                        </div>
                    </div>





                    {/* Contactos de la empresa */}

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contactos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="" className="hover:underline"> bpnicoya@sinabi.go.cr</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" className="hover:underline"> (506) 2685-4213</a>
                                </li>

                            </ul>
                        </div>


                        <div>
                            {/*Servicios de la empresa */}
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Servicios</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Prestamos</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Libros</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Salas</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Equipo tecnológico</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Cursos</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Eventos</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {/*Informacion legal de la empresa */}
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Política de privacidad</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Términos &amp; Condiciones</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024 <a href="https://flowbite.com/" className="hover:underline">BPMN™</a>. Todos los derechos Reservados.
                    </span>
                    {/*Redes sociales */}
                    <div className="flex mt-4 sm:mt-0 space-x-5">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/your-instagram-handle" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0C4.485 0 0 4.485 0 10s4.485 10 10 10 10-4.485 10-10S15.515 0 10 0zm5.938 15.938c-.3.7-.932 1.318-1.644 1.618-1.48.615-4.47.494-5.729.494s-4.25.121-5.73-.494c-.712-.3-1.343-.918-1.643-1.618-.615-1.48-.494-4.47-.494-5.73s-.121-4.25.494-5.729c.3-.712.931-1.343 1.643-1.643C4.25 2.333 7.24 2.455 8.5 2.455s4.25-.122 5.73.493c.712.3 1.343.931 1.643 1.643.615 1.48.494 4.47.494 5.73s.122 4.25-.493 5.73zM10 5.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7.5c-1.653 0-3-1.347-3-3s1.347-3 3-3 3 1.347 3 3-1.347 3-3 3zm4.5-7c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.537 11.537 0 0 1 1.38.747a3.947 3.947 0 0 0-.555 2.031 4.02 4.02 0 0 0 1.82 3.354 4.13 4.13 0 0 1-1.858-.5v.048a4.083 4.083 0 0 0 3.285 3.972 4.091 4.091 0 0 1-1.084.145c-.266 0-.526-.026-.78-.075a4.135 4.135 0 0 0 3.835 2.818 8.295 8.295 0 0 1-5.1 1.748A8.46 8.46 0 0 1 0 15.594 11.663 11.663 0 0 0 6.29 17c7.547 0 11.674-6.112 11.674-11.41 0-.174-.004-.346-.013-.517A8.274 8.274 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>

                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
