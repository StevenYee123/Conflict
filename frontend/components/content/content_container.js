import {connect} from "react-redux";
import {fetchServer, createServer, joinServer, deleteServer, updateServer} from "../../actions/server_actions";
import {fetchChannels, createChannel} from "../../actions/channel_actions";
import {modalReceiver, modalRemover} from "../../actions/modal_actions";
import { selectServer, grabChannels, grabServers } from "../../reducers/selectors";
import {logout} from "../../actions/session_actions";
import Content from "./content";

const mapStateToProps = (state, ownProps) => {
    const placeHolderServer = {name: "Loading, please wait"};
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    let channels = grabChannels(state);
    let servers = grabServers(state);
    return {
        currentUser: state.entities.users[state.session.id],
        currentServer,
        contentModal: state.modal.contentModal,
        inviteModal: state.modal.inviteModal,
        editServerModal: state.modal.editServerModal,
        deleteServerModal: state.modal.deleteServerModal,
        channels,
        servers
    }
}

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout()),
      fetchServer: (serverId) => dispatch(fetchServer(serverId)),
      updateServer: (server) => dispatch(updateServer(server)),
      deleteServer: (serverId) => dispatch(deleteServer(serverId)),
      leaveServer: (serverId) => dispatch(leaveServer(serverId)),
      receiveModal: (modalType) => dispatch(modalReceiver(modalType)),
      removeModal: (modalType) => dispatch(modalRemover(modalType)),
      fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
      createChannel: (channel) => dispatch(createChannel(channel))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);