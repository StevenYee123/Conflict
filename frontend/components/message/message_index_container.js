import { connect } from "react-redux";
import MessageIndex from "./message_index";
import { fetchChannel } from "../../actions/channel_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchMessages, createMessage } from "../../actions/message_actions";
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
        currentChannel,
        currentServer,
        messages,
        users: state.entities.users
    }
}

const mapDispatchToProps = dispatch => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    createMessage: (message) => dispatch(createMessage(message)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);