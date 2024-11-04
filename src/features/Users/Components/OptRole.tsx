const OptRole = () => {
  return (
    <>
      <option value={""} >Seleccione el rol del usuario</option>
      <option value="external_user">Usuario externo</option>
      <option value="reception">Recepción(OPAC)</option>
      <option value="asistente">Interno</option>
      <option value="admin">Administrador</option>
      <option value="institucional">Institucional</option>
    </>
  );
};

export default OptRole;
