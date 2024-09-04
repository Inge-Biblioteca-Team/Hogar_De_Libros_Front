const ConditionStatus = ({ condition }: { condition: number }) => {
  const conditionMap = {
    "": "Pendiente de evaluación",
    1: "Óptimo",
    2: "Bueno",
    3: "Regular",
    4: "Deficiente",
    5: "Deplorable"
  };
  const conditionText = conditionMap[condition as keyof typeof conditionMap] ?? "Desconocido";

  return (
    <>
      <strong>Estado</strong>
      <span>{conditionText}</span>
    </>
  );
};

export default ConditionStatus;
