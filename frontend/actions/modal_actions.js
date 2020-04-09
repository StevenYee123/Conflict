export const RECEIVE_MODAL = "RECEIVE_MODAL";
export const REMOVE_MODAL = "REMOVE_MODAL";

export const modalReceiver = (modalType) => ({
    type: RECEIVE_MODAL,
    modalType
});

export const modalRemover = (modalType) => ({
    type: REMOVE_MODAL,
    modalType
});