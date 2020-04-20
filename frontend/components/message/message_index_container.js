import { connect } from "react-redux";
import MessageIndex from "./message_index";
import { fetchChannel, clearChannelErrors } from "../../actions/channel_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchMessages, createMessage, receiveMessage,
    clearMessageErrors, receiveMessages } from "../../actions/message_actions";
import { clearServerErrors } from "../../actions/server_actions";
import { selectChannel, grabMessages, selectServer } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    let placeHolderMessages = {
        body: "Loading...",
        author: { username: "Loading..." },
        created_at: "",
    };

    let placeHolderServer = {name: "Loading..."};

    const { server, channel, message } = state.errors;
    const errors = server.concat(channel.concat(message));

    let currentChannel = selectChannel(state, ownProps.match.params.channelId) || placeHolderMessages;
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    let messages = state.entities.messages;

    return {
        currentUser: state.entities.users[state.session.id],
        channelId: ownProps.match.params.channelId,
        currentChannel,
        currentServer,
        messages,
        users: state.entities.users,
        errors
    }
}

const mapDispatchToProps = dispatch => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    createMessage: (message) => dispatch(createMessage(message)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    receiveMessages: (messages) => dispatch(receiveMessages(messages)),
    fetchUsers: () => dispatch(fetchUsers()),
    clearChannelErrors: () => dispatch(clearChannelErrors()),
    clearMessageErrors: () => dispatch(clearMessageErrors()),
    clearServerErrors: () => dispatch(clearServerErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);