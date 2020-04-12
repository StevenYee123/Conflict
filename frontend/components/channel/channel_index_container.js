import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import { fetchChannel, updateChannel, deleteChannel } from "../../actions/channel_actions";
import { modalReceiver, modalRemover } from "../../actions/modal_actions";
import { selectServer, selectChannel } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const placeHolderServer = { name: "Loading, please wait" };
    const placeHolderChannel = { name: "Loading, please wait" };
    const ids = ownProps.path.split("/");
    let currentServer = selectServer(state, parseInt(ids[ids.length - 2])) || placeHolderServer;
    let currentChannel = selectChannel(state, parseInt(ids[ids.length - 1])) || placeHolderChannel;
  return {
    currentUser: state.entities.users[state.session.id],
    editChannelModal: state.modal.editChannelModal,
    deleteChannelModal: state.modal.deleteChannelModal,
    currentServer, 
    currentChannel,
    channelIds: Object.keys(state.entities.channels)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    receiveModal: (modalType) => dispatch(modalReceiver(modalType)),
    removeModal: (modalType) => dispatch(modalRemover(modalType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
