import { useParams } from 'react-router-dom';

const AdminComputerInformation = () => {
  const { id } = useParams<{ id?: string }>();

  return (
    <>
      <div
        className="w-full grid text-xl gap-14 place-content-center mt-10"
        style={{ gridTemplateColumns: '35% 20% 25%' }}
      >
        <span className="inline-grid ">
          <strong>Marca</strong>
          <span>{computer?.brand}</span>
          <strong>Código Único</strong>
          <span>{computer?.uniqueCode}</span>
          <strong>Tipo de Computadora</strong>
          <span>{computer?.type}</span>
          <strong>Estado</strong>
          {computer?.status}
          <strong>Observaciones</strong>
          <span>{computer?.observations}</span>
        </span>
        <span className="inline-grid ">
          <strong>Número de Serie</strong>
          <span>{computer?.serial}</span>
          <strong>Número de Equipo</strong>
          <span>{computer?.equipmentNumber}</span>
          <strong>Condición</strong>
          <span>{computer?.condition}</span>
          <strong>Categoría</strong>
          <span>{computer?.category}</span>
        </span>
      </div>
    </>
  );
};

export default AdminComputerInformation;