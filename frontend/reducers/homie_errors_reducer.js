import { RECEIVE_HOMIE_ERRORS } from "../actions/homie_actions";

const homieErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_HOMIE_ERRORS:
            return Object.assign({}, state, action.errors);
        default: 
            return state; 
    }
}

export default homieErrorsReducer;