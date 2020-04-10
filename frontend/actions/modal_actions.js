export const RECEIVE_MODAL = "RECEIVE_MODAL";
export const REMOVE_MODAL = "REMOVE_MODAL";

export const modalReceiver = () => ({
    type: RECEIVE_MODAL
});

export const modalRemover = () => ({
    type: REMOVE_MODAL
});