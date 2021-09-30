import axios from "axios";
import { addDigimon } from "./actions";

const addDigimonsThunck = (digimon, setError) => (dispatch) => {
    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`, dispatch)
    .then((response) => dispatch(addDigimon([response.data[0]])))
    .catch(() => setError(true))
}

export default addDigimonsThunck