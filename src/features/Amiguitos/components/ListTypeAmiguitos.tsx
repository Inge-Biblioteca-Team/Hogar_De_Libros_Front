import { useQuery } from "react-query";
import CardTypeAmiguito from "./CardTypeAmiguito";
import { GetTypesAmiguitos } from "../services/SvAmiguitos";
import { Amigos } from "../types/InfoAmiguitos";

const ListTypeAmiguitos = () => {
  const {
    data: AmiguitosInf,
    isLoading,
    error
  } = useQuery<Amigos[], Error>(["Amigi"], GetTypesAmiguitos);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;


  return (
    <article>
      <div>
      <div className="flex w-full gap-5 items-center justify-center max-sm:gap-2">
        {AmiguitosInf?.map(( amigi: Amigos, index: number) => (
          <CardTypeAmiguito Amiguito={amigi} key={index}  />
        ))}
      </div>
      </div>
    </article>
  );
};

export default ListTypeAmiguitos;
