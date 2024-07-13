import { Artista } from "../../../types/Artista";

const FrontCard = ({ artista, onFlip }: { artista: Artista, onFlip: () => void }) => {
    return (
        <div className="p-4 text-black bg-[#557ee9] h-full rounded-lg shadow-xl" style={{height: '160%', width: '150%'}}>
            <div className="flex flex-col w-full h-full gap-4">
                <div className="flex flex-col items-center">
                    <img className= "h-40 w- border-t border-transparent rounded-t-md object-cover"
                    src={artista.image} />
                </div>
                <div className="flex flex-col w-full ">
                    <label className="font-bold">Name:</label>
                    <span>{artista.name || "No name available"}</span>
                </div>
                <div className="flex flex-col w-full">
                    <label className="font-bold">Biography:</label>
                    <span>{artista.biography || "No biography available"}</span>
                </div>
                <button onClick={onFlip} className="mt-auto bg-blue-700 text-white py-2 px-4 rounded-md">
                    Ver más 
                </button>
            </div>
        </div>
    );
};
export default FrontCard;