
function CollaborationsForm() {
  return (
    <form className="max-w-md mx-auto p-6 bg-gray-600 rounded-md shadow-md">
      
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="Institucion" className="block text-white mb-2">Nombre de institucion</label>
        <input type="text" id="Institucion" className="w-full p-2 border rounded-md" />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="Representante" className="block text-white mb-2">Nombre de representante</label>
        <input type="text" id="Representante" className="w-full p-2 border rounded-md" />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="Genero" className="block text-white mb-2">Género del libro</label>
        <input type="text" id="Genero" className="w-full p-2 border rounded-md" />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="Comentario" className="block text-white mb-2">Algún comentario</label>
        <textarea id="Comentario" className="w-full p-2 border rounded-md"></textarea>
      </div>
      <div className="flex justify-center">
        <button className="bg-gray-700 border border-transparent rounded-md p-1 text-white" type="submit">Enviar</button>
      </div>
      
    </form>
  )
}

export default CollaborationsForm;
