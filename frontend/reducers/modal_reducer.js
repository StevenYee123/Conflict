import { MODAL_ADD_SERVER, MODAL_CREATE_SERVER, MODAL_CLEAR } from "../actions/modal_actions";

const modalReducer = (state = { type: null }, action) => {
    Object.freeze(state);
    switch(action.type){
        case MODAL_ADD_SERVER:
            return { type: action.type };
        case MODAL_CREATE_SERVER:
            return { type: action.type };
        case MODAL_CLEAR:
            return { type: null };
        default: 
            return state;
    }
}

export default modalReducer;