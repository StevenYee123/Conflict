import { connect } from "react-redux";
import ChannelShow from "./channel_show";
import React from "react";
import { fetchChannel } from "../../actions/channel_actions";
import { fetchMessages } from "../../actions/message_actions";
import { modalReceiver, modalRemover } from "../../actions/modal_actions";
import { selectServer, selectChannel, grabChannels, grabMessages } from "../../reducers/selectors";


const mapStateToProps = (state, ownProps) => {
    const placeHolderServer = { name: "Loading, please wait" };
    const placeHolderChannel = { name: "Loading, please wait" };
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    let currentChannel = selectChannel(state, ownProps.match.params.channelId) || placeHolderChannel;
    let messages = state.entities.messages;
    return {
        currentUser: state.entities.users[state.session.id],
        currentServer,
        currentChannel,
        messages
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);