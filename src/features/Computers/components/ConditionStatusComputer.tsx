const ConditionStatus = ({ condition }: { condition: number }) => {
    const conditionMap = {
      0: "Pendiente de evaluación",
      1: "Deplorable",
      2: "Deficiente",
      3: "Regular",
      4: "Bueno",
      5: "Optimo"
    };
    const conditionText = conditionMap[condition as keyof typeof conditionMap] ?? "Desconocido";
  
    return (
      <>
        <strong>Condición</strong>
        <span>{conditionText}</span>
      </>
    );
  };
  
  export default ConditionStatus;