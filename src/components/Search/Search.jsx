import { useState } from "react"
import { useDispatch } from "react-redux";
import addDigimonsThunck from "../../store/modules/digimons/thunk";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Search = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSearch = () => {
        setError(false)
        dispatch(addDigimonsThunck(input, setError));
        if(error === true){
            toast.error("Digimon inexistente.")
        }
        setInput("");
    }

    return (
        <div>
            <h1>Procure pelo seu Digimon!</h1>
            <div>
                <input value={input} onChange={(event) => setInput(event.target.value)}
                placeholder="Procure pelo seu Digimon"></input>
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Search