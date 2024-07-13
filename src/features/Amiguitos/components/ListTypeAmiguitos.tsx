import { useQuery } from "react-query";
import CardTypeAmiguito from "./CardTypeAmiguito";
import { GetTypesAmiguitos } from "../services/SvAmiguitos";
import { IVolunteeringPrograms } from "../types/InfoAmiguitos";

const ListTypeAmiguitos = () => {
  const {
    data: AmiguitosInf,
    isLoading,
    error
  } = useQuery<IVolunteeringPrograms[], Error>(["Amigi"], GetTypesAmiguitos);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <article>
      <div className="flex w-full gap-5 items-center justify-center">
        {AmiguitosInf?.map(( amigi: IVolunteeringPrograms, index: number) => (
          <CardTypeAmiguito Amiguito={amigi} key={index} />
        ))}
      </div>
    </article>
  );
};

export default ListTypeAmiguitos;
