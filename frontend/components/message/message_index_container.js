import { connect } from "react-redux";
import MessageIndex from "./message_index";
import { fetchChannel } from "../../actions/channel_actions";
import { fetchMessages, createMessage } from "../../actions/message_actions";
import { selectChannel, grabMessages } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    let placeHolderMessages = {
        body: "Loading...",
        author: { username: "Loading..." },
        created_at: "",
    };

    let currentChannel = selectChannel(state, ownProps.match.params.channelId) || placeHolderMessages;
    let messages = state.entities.messages;
    return {
        currentUser: state.entities.users[state.session.id],
        currentChannel,
        messages
    }
}

const mapDispatchToProps = dispatch => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    createMessage: (message) => dispatch(createMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);