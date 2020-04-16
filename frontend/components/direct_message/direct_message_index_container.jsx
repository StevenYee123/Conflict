import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DirectMessageIndex from "./direct_message_index";
import { fetchServers } from "../../actions/server_actions";
import { fetchMessages, createMessage, receiveMessages } from "../../actions/message_actions";
import { fetchDirectMessages } from "../../actions/direct_message_actions";
import { fetchChannel } from "../../actions/channel_actions";
import { selectChannel, selectServer } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    let placeHolderMessages = {
        body: "Loading...",
        author: { username: "Loading..." },
        created_at: "",
    };

    let placeHolderServer = {
        name: "Loading..."
    }

    let currentChannel = selectChannel(state, ownProps.match.params.channelId) || placeHolderMessages;
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    return{
        currentChannel,
        currentServer,
        currentUser: state.entities.users[state.session.id],
        channelId: ownProps.match.params.homieId,
        messages: state.entities.messages,
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    fetchServers: () => dispatch(fetchServers()),
    createMessage: (message) => dispatch(createMessage(message)),
    fetchDirectMessages: () => dispatch(fetchDirectMessages()),
    receiveMessages: (messages) => dispatch(receiveMessages(messages)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectMessageIndex));