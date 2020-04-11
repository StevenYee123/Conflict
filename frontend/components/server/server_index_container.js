import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {fetchServers, createServer, joinServer, removeServer, updateServer} from "../../actions/server_actions";
import {fetchChannels} from "../../actions/channel_actions";
import {logout} from "../../actions/session_actions";
import {modalReceiver, modalRemover} from "../../actions/modal_actions";
import ServerIndex from "./server_index";

const mapStateToProps = (state, ownProps) => {
    return {
      currentUser: state.entities.users[state.session.id],
      serverIds: Object.keys(state.entities.servers),
      errors: state.errors.session,
      servers: Object.values(state.entities.servers),
      serverFormModalOpen: state.modal.serverFormModalOpen,
      channels: Object.values(state.entities.channels)
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchServers: () => dispatch(fetchServers()),
    createServer: (server) => dispatch(createServer(server)),
    joinServer: (inviteLink) => dispatch(joinServer(inviteLink)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    receiveModal: (modalType) => dispatch(modalReceiver(modalType)),
    removeModal: (modalType) => dispatch(modalRemover(modalType))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);