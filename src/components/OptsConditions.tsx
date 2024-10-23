const OptsConditions = () => {
  return (
    <>
      <option value={0}>Pendiente de evaluación</option>
      <option value={5}>Óptimo</option>
      <option value={4}>Bueno</option>
      <option value={3}>Regular</option>
      <option value={2}>Deficiente</option>
      <option value={1}>Deplorable</option>
    </>
  );
};

export default OptsConditions;
