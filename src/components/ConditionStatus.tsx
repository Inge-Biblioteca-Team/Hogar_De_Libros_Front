const ConditionStatus = ({ condition }: { condition: number }) => {
  const conditionMap = {
    1: "Pendiente de evaluación",
    2: "Bueno",
    3: "Medio",
    4: "Malo",
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
