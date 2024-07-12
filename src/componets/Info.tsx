
export default function Info() {
  return (
    // Contenedor principal con clases para estilos y espaciado
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        {/* Sección de encabezado */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Programas Externos</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Información acerca de programas externos a la biblioteca que te pueden interesar...
          </p>
        </div>
        {/* Contenedor para los elementos */}
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {[
            {
              imgSrc: "https://crc891.com/wp-content/uploads/2022/07/163_1_166649180_117266390433882_2556754158474704118_n.jpg",
              altText: "",
              category: " Bienestar de la Salud",
              title: "Ejercicio y Bienestar",
              description: "Programa enfocado en promover la actividad física y hábitos saludables. Incluye clases de yoga, aeróbicos y rutinas de ejercicio adaptadas para diferentes niveles de condición física.",
              author: "Mario Rodríguez ",
              authorImgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
              date: "2024-08-16",
              descriptionAuthor: "10 años de experiencia.",
              
            },
            {
              imgSrc: "https://semanariouniversidad.com/wp-content/uploads/2023/07/FOTO01-1024x681.png",
              altText: "",
              category: "Arte",
              title: "Artes Escénicas y Música",
              description: " Programa que ofrece clases de canto, danza y teatro. Los participantes aprenden técnicas vocales, coreografías y actuación, culminando en presentaciones en vivo para la comunidad.",
              author: "Laura Serrano",
              authorImgSrc: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
              date: "2024-08-10",
              descriptionAuthor: "Músico y directora de teatro "
            },
            {
              imgSrc: "https://www.dircultura.go.cr/sites/default/files/media/img/main/fgastronomica-9-1600_0.jpg",
              altText: "",
              category: "Cultura Nicoyana",
              title: "Cultura y Tradiciones Nicoyanas",
              description: "Programa dedicado a la exploración y preservación de la cultura de Nicoya. Incluye talleres sobre creación de mascaradas, historia local y gastronomía tradicional. Los participantes tendrán la oportunidad de crear sus propias mascaradas y participar en eventos culturales.",
              author: "Daniela Fernández",
              authorImgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
              date: "2024-08-12",
              descriptionAuthor: "antropóloga y experta en culturas centroamericanas"
            }
            // Mapea los datos de los programas externos en un array y los renderiza en tarjetas.
          ].map((post, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imgSrc} alt={post.altText} />
              </div>
          
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="hover:underline">{post.category}</a>
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">{post.author}</span>
                      <img className="h-10 w-10 rounded-full" src={post.authorImgSrc} alt={post.author} />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline">{post.author}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.descriptionAuthor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
