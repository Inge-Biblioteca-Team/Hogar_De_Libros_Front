
function DonationsForm() { // Formulario de donaciones
  return (
    <form className="max-w-md mx-auto  p-6 bg-gray-600 rounded-md shadow-md">
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="Autor" className="block text-white mb-2">Nombre de autor</label>
        <input type="text" id="Autor" className="w-full p-2 border rounded-md" />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="Titulo" className="block text-white mb-2">Nombre del libro</label>
        <input type="text" id="Titulo" className="w-full p-2 border rounded-md" />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="Genero" className="block text-white mb-2">Género del libro</label>
        <input type="text" id="Genero" className="w-full p-2 border rounded-md" />
      </div>
      <div className="flex justify-center">
      <button className="bg-gray-700 border border-transparent rounded-md p-1" type="submit"> Enviar </button>
      </div>
    </form>
  )
}

export default DonationsForm

//* Puede ser utilizado en un futuro