import { ADD_DIGIMON } from "./actionsTypes";

const digimonsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_DIGIMON:
            return action.digimon;
        default:
            return state;
    }
}

export default digimonsReducer