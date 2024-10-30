const OptCanton = ({ province }: { province: string }) => {
  const district: Record<string, string[]> = {
    San_José: [
      "San José",
      "Escazú",
      "Desamparados",
      "Puriscal",
      "Tarrazú",
      "Aserrí",
      "Mora",
      "Goicoechea",
      "Santa Ana",
      "Alajuelita",
      "Vásquez de Coronado",
      "Acosta",
      "Tibás",
      "Moravia",
      "Montes de Oca",
      "Turrubares",
      "Dota",
      "Curridabat",
      "Pérez Zeledón",
      "León Cortés",
    ],
    Alajuela: [
      "Alajuela",
      "San Ramón",
      "Grecia",
      "San Mateo",
      "Atenas",
      "Naranjo",
      "Palmares",
      "Poás",
      "Orotina",
      "San Carlos",
      "Zarcero",
      "Valverde Vega",
      "Upala",
      "Los Chiles",
      "Guatuso",
      "Río Cuarto",
    ],
    Cartago: [
      "Cartago",
      "Paraíso",
      "La Unión",
      "Jiménez",
      "Turrialba",
      "Alvarado",
      "Oreamuno",
      "El Guarco",
    ],
    Heredia: [
      "Heredia",
      "Barva",
      "Santo Domingo",
      "Santa Bárbara",
      "San Rafael",
      "San Isidro",
      "Belén",
      "Flores",
      "San Pablo",
      "Sarapiquí",
    ],
    Guanacaste: [
      "Liberia",
      "Nicoya",
      "Santa Cruz",
      "Bagaces",
      "Carrillo",
      "Cañas",
      "Abangares",
      "Tilarán",
      "Nandayure",
      "La Cruz",
      "Hojancha",
    ],
    Puntarenas: [
      "Puntarenas",
      "Esparza",
      "Buenos Aires",
      "Montes de Oro",
      "Osa",
      "Quepos",
      "Golfito",
      "Coto Brus",
      "Parrita",
      "Corredores",
      "Garabito",
    ],
    Limón: ["Limón", "Pococí", "Siquirres", "Talamanca", "Matina", "Guácimo"],
  };
  return (
    <>
      <option value="">Seleccione un cantón</option>
      {province &&
        district[province]?.map((canton) => (
          <option key={canton} value={canton}>
            {canton}
          </option>
        ))}
    </>
  );
};

export default OptCanton;
