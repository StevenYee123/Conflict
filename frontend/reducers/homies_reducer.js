import { RECEIVE_HOMIE, RECEIVE_HOMIES, REMOVE_HOMIE } from "../actions/homie_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const homiesReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = [];
    switch(action.type){
        case RECEIVE_HOMIES:
            return action.homies.homies;
        case RECEIVE_HOMIE:
            newState = state.slice();
            if(!newState.includes(action.homieId.homieId)){
                newState.push(action.homieId.homieId);
            }
            return newState;
        case REMOVE_HOMIE:
            state.forEach((homieId) => {
                if(homieId !== action.homieId){
                    newState.push(homieId);
                }
            });
            return newState;
        case RECEIVE_CURRENT_USER:
            if(action.user === null){
                return [];
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default homiesReducer;