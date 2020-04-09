export const MODAL_ADD_SERVER = "MODAL_ADD_SERVER";
export const MODAL_CREATE_SERVER = "MODAL_ADD_SERVER";
export const MODAL_SERVER_INVITE = "MODAL_SERVER_INVITE";
export const MODAL_CREATE_CHANNEL = "MODAL_CREATE_CHANNEL";
export const MODAL_CLEAR;

export const modalAddServer = () => ({
    type: MODAL_ADD_SERVER
});

export const modalCreateServer = () => ({
    type: MODAL_CREATE_SERVER
});

export const modalClear = () => ({
    type: MODAL_CLEAR
})