import { RECEIVE_HOMIE_ERRORS, CLEAR_HOMIE_ERRORS } from "../actions/homie_actions";

const homieErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_HOMIE_ERRORS:
            return action.errors;
        case CLEAR_HOMIE_ERRORS:
            return [];
        default: 
            return state; 
    }
}

export default homieErrorsReducer;