import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from "../actions/message_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_MESSAGES:
            return action.messages;
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {[action.message.id]: action.message})
        case RECEIVE_CURRENT_USER:
            if (action.currentUser === {}){
                return {}
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default messagesReducer;