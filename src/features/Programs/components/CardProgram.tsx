import { Program } from "../types/Programs";

const CardProgram = ({ program }: { program: Program }) => {
  return (
    <>
      <div
        className="w-full
            bg-white flex rounded-md h-full justify-end text-right dark:text-black"
        style={{ WebkitLineClamp: 12, overflow: "hidden" }}
      >
        <span className="m-3 !bg-transparent ml-9">
          <h3 className="text-2xl font-bold max-md:text-lg">
            {program.programName}
          </h3>
          <div className=" text-lg ml-7">
            <p
              className="text-gray-600 max-sm:text-sm line-clamp-1"
              style={{ WebkitLineClamp: 12, overflow: "hidden" }}
            >
              Busca {program.description.toLocaleLowerCase()}
            </p>
          </div>
        </span>
        <img
          src={program.image}
          alt={program.programName}
          className="w-1/2 max-lg:w-1/2"
        />
      </div>
    </>
  );
};
export default CardProgram;
