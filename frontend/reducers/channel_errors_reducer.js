import {RECEIVE_CHANNEL_ERRORS} from "../actions/channel_actions";

const channelErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CHANNEL_ERRORS:
            return Object.assign({}, state, action.errors);
        default:
            return state;
    }
}

export default channelErrorsReducer;