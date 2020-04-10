import { RECEIVE_MODAL, REMOVE_MODAL } from "../actions/modal_actions";

const defaultModal = false;

const modalReducer = (state = false, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_MODAL:
            return true;
        case REMOVE_MODAL:
            return false
        default: 
            return defaultModal;
    }
}

export default modalReducer;