import ReactFlipCard from "reactjs-flip-card";
import FrontCard from "../../ArtistaComponent/CardComponent/FrontCard";
import BackCard from "../../ArtistaComponent/CardComponent/BackCard";
import { useState } from "react";
import { Artista } from "../../../types/Artista";

const CardFlipp = ({ artista }: { artista: Artista }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const flipCardStyle = {
        height: '300px',
        width: '200px',
        perspective: '1000px'
    };

    return (
        <ReactFlipCard
            flipByProp={isFlipped}
            flipTrigger="disabled"
            containerStyle={flipCardStyle}
            containerCss="w-full"
            frontComponent={<FrontCard artista={artista} onFlip={handleFlip} />}
            backComponent={<BackCard artista={artista} onFlip={handleFlip} />}
        />
    );
};

export default CardFlipp;