import { RECEIVE_MESSAGE_ERRORS } from "../actions/message_actions";

const messagesErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_MESSAGE_ERRORS:
            return Object.assign({}, state, action.errors);
        default: 
            return state
    }
}

export default messagesErrorsReducer;