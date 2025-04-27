const CategoriOPT = () => {
  const categories = [
    "Artes y Recreacion",
    "Ciencias Naturales",
    "Ciencias Naturales y Matematicas",
    "Ciencias Sociales",
    "Filosofia y Psicologia",
    "Geografia e Historia",
    "Lenguas",
    "Literatura",
    "Obras Generales",
    "Religion",
    "Tecnologia (Aplicada)",
  ];

  return (
    <>
      <option value="">Seleccione una categoría</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </>
  );
};

export default CategoriOPT;
