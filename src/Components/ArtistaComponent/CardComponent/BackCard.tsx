import { Artista } from "../../../types/Artista";

const BackCard = ({ artista, onFlip }: { artista: Artista, onFlip: () => void }) => {
    return (
        <div className="p-4 text-black bg-[#557ee9] h-full rounded-lg shadow-xl" style={{height: '160%', width: '150%'}}>
            <div className="flex flex-col w-full h-full gap-4">
                <div className="flex flex-col w-full">
                    <label className="font-bold">Works:</label>
                    <span>{artista.works || "No works available"}</span>
                </div>
                <div className="flex flex-col w-full h-96">
                    <label className="font-bold">Social Links:</label>
                    <span>{artista.socialLinks?.twitter || "No Twitter available"}</span>
                    <span>{artista.socialLinks?.facebook || "No Facebook available"}</span>
                    <span>{artista.socialLinks?.instagram || "No Instagram available"}</span>
                    <span>{artista.socialLinks?.website || "No Website available"}</span>
                </div>
                <button onClick={onFlip} className="mt-auto bg-blue-700 text-white py-2 px-4 rounded-md">
                  Ocultar
                </button>
            </div>
        </div>
    );
};

export default BackCard;