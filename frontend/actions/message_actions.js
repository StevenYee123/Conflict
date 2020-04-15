import * as MessageAPIUtil from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
});

export const receiveMessageErrors = (errors) => ({
    type: RECEIVE_MESSAGE_ERRORS,
    errors
})

export const fetchMessages = (channelId) => dispatch => {
    return MessageAPIUtil.fetchMessages(channelId)
        .then((messages) => dispatch(receiveMessages(messages)), 
        (errors) => dispatch(receiveMessageErrors(errors.responseJSON)));
};

export const createMessage = (message) => dispatch => {
    return MessageAPIUtil.createMessage(message)
        .then(() => {}),
        (errors) => dispatch(receiveMessageErrors(errors.responseJSON));  
};