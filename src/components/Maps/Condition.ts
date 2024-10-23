const conditionMap = {
  0: "Pendiente de evaluación",
  1: "Deplorable",
  2: "Deficiente",
  3: "Regular",
  4: "Bueno",
  5: "Optimo",
};

const getConditionStatusText = (condition: number): string => {
  return conditionMap[condition as keyof typeof conditionMap] ?? "Desconocido";
};

export { getConditionStatusText };
