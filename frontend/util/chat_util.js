import { RECEIVE_MESSAGE, RECEIVE_NEW_MESSAGE } from "../actions/message_actions";
import App from "../components/App";

const _dummyFunc = () => {};

export const createThreadSubscription = (threadId, callbacks) => {
    const {
        receiveMessage = _dummyFunc,
        receiveNewMessage = _dummyFunc
    } = callbacks;

    const received = (data) => {
        const message = JSON.parse(data.message);

        switch(data.type){
            case RECEIVE_NEW_MESSAGE:
                receiveNewMessage(message);
                break;
            case RECEIVE_MESSAGE:
                receiveMessage(message);
                break;
            default: 
                console.warn("Unknown socket response to thread subscription: ", data);
        }
    }

    return App.cable.subscriptions.create(
        {
            channel: 'ChatChannel',
            id: threadId
        },
        {
            received
        }
    );
}