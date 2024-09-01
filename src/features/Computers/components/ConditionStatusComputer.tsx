const ConditionStatus = ({ condition }: { condition: number }) => {
    const conditionMap = {
      "": "Pendiente de evaluación",
      1: "Bueno",
      2: "Medio",
      3: "Aceptable",
      4: "Malo"
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