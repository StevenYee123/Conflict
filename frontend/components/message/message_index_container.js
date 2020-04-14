import { connect } from "react-redux";
import MessageIndex from "./message_index";
import { fetchChannel } from "../../actions/channel_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchMessages, createChannelMessage, 
    receiveNewMessage, receiveMessage } from "../../actions/message_actions";
import { createThreadSubscription } from "../../util/chat_util";
import { selectChannel, grabMessages, selectServer } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    let placeHolderMessages = {
        body: "Loading...",
        author: { username: "Loading..." },
        created_at: "",
    };

    let placeHolderServer = {name: "Loading..."}

    let currentChannel = selectChannel(state, ownProps.match.params.channelId) || placeHolderMessages;
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    let messages = state.entities.messages;

    return {
        currentUser: state.entities.users[state.session.id],
        threadId: ownProps.match.params.channelId,
        currentChannel,
        currentServer,
        messages,
        users: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    const subscriptionOptions = {
        receiveNewMessage: (message) => dispatch(receiveNewMessage(message)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
    };
    
    return {
        createThreadSubscription: (threadId) => createThreadSubscription(threadId, subscriptionOptions),
        fetchThread: (channelId) => dispatch(fetchChannel(channelId)),
        fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
        submitMessage: (message) => dispatch(createChannelMessage(message)),
        receiveNewMessage: (message) => dispatch(receiveNewMessage(message)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);