import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import { fetchServer } from "../../actions/server_actions";
import { fetchChannel, fetchChannels, updateChannel, deleteChannel, 
  receiveChannel, createChannel, removeChannel, receiveChannelErrors } from "../../actions/channel_actions";
import { updateServer, deleteServer } from "../../actions/server_actions";
import { fetchMessages } from "../../actions/message_actions";
import { logout } from "../../actions/session_actions";
import { modalReceiver, modalRemover } from "../../actions/modal_actions";
import { selectServer, selectChannel, grabServers } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const placeHolderServer = { name: "Loading, please wait" };
    const placeHolderChannel = { name: "Loading, please wait" };
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    let currentChannel = selectChannel(state, ownProps.match.params.channelId) || placeHolderChannel;
    const servers = grabServers(state);
  return {
    activeChannel: ownProps.match.params.channelId,
    currentUser: state.entities.users[state.session.id],
    editChannelModal: state.modal.editChannelModal,
    deleteChannelModal: state.modal.deleteChannelModal,
    contentModal: state.modal.contentModal,
    inviteModal: state.modal.inviteModal,
    editServerModal: state.modal.editServerModal,
    deleteServerModal: state.modal.deleteServerModal,
    serverId: ownProps.match.params.serverId,
    channelId: ownProps.match.params.channelId,
    channels: state.entities.channels,
    currentServer,
    currentChannel,
    channelIds: Object.keys(state.entities.channels),
    servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    updateServer: (server) => dispatch(updateServer(server)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    receiveChannel: (channel) => dispatch(receiveChannel(channel)),
    receiveChannelErrors: (errors) => dispatch(receiveChannelErrors(errors)),
    removeChannel: (channelId) => dispatch(removeChannel(channelId)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    receiveModal: (modalType) => dispatch(modalReceiver(modalType)),
    removeModal: (modalType) => dispatch(modalRemover(modalType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
