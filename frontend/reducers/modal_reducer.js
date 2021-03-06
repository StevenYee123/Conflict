import { RECEIVE_MODAL, REMOVE_MODAL } from "../actions/modal_actions";

const defaultModal = false;

const modalReducer = (state = false, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_MODAL:
            return Object.assign({}, state, {[action.modalType]: true});
        case REMOVE_MODAL:
            return Object.assign({}, state, { [action.modalType]: false });
        default: 
            return {};
    }
}

export default modalReducer;