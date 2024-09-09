import { Programs } from "../types/Programs";

const CardProgram = ({ program }: { program: Programs }) => {
  return (
    <figure
      className="rounded-md w-full shadow-lg flex flex-col justify-center items-center mb-2 min-w-96 mx-5
       max-sm:ml-0 max-sm:min-w-80
    "
    >
      <img
        className="h-48 w-full mb-8 border-t border-transparent rounded-t-md object
            max-sm:h-48 max-sm:rounded-md"
        src={program.Image}
        alt={program.Name}
      />
      <figcaption className=" text-lg break-words max-w-96 px-4 
      max-sm:text-sm h-80 flex flex-col items-baseline justify-between">
        <p>
        <strong>{program.Name}</strong>
        <br />
        <span className=" text-base">
          Descripción del programa: {program.Description}
        </span>
        </p>
        <button
          className="bg-Bottoms text-Text text-lg rounded-lg p-1.5 mt-5 mb-5
      hover:bg-Bottoms-dark hover:scale-105
      max-sm:text-sm"
          type="button"
        >
          Matricular -&gt;{" "}
        </button>
      </figcaption>
    </figure>
  );
};
export default CardProgram;
