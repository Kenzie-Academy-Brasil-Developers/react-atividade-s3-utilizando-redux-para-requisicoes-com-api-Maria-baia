import { useSelector } from "react-redux"
import Digimon from "../Digimon/Digimon";

const DigimonList = () => {
    const {digimons} = useSelector((state) => state);
    return(
        <Digimon digimonCard={digimons}/>
    )
}

export default DigimonList