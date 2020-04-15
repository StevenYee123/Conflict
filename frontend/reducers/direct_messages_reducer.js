import { RECEIVE_DIRECT_MESSAGES, RECEIVE_DIRECT_MESSAGE } from "../actions/direct_message_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions"; 

const DirectMessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_DIRECT_MESSAGES:
            return action.messages;
        case RECEIVE_DIRECT_MESSAGE:
            return Object.assign({}, state, {[action.message.id]: action.message});
        case RECEIVE_CURRENT_USER:
            if (action.user === null){
                return {}
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default DirectMessagesReducer;