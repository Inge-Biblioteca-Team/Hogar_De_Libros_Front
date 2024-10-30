const loanPrivilegesMap = {
  0: "No se permite el préstamo",
  8: "Máximo 1 libro cada 8 días",
  15: "Máximo 2 libros por 15 días",
  22: "Máximo 3 libros por 22 días",
  30: "Máximo 5 libros por 30 días",
  78: "Sin límite de préstamo",
};

const getLoanPolicity = (policity: number): string => {
  return (
    loanPrivilegesMap[policity as keyof typeof loanPrivilegesMap] ??
    "Desconocido"
  );
};

export { getLoanPolicity };
