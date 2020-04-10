import {connect} from "react-redux";
import {fetchServer, createServer, joinServer, removeServer, updateServer} from "../../actions/server_actions";
import {modalReceiver, modalRemover} from "../../actions/modal_actions";
import { selectServer } from "../../reducers/selectors";
import {logout} from "../../actions/session_actions";
import Content from "./content";

const mapStateToProps = (state, ownProps) => {
    const placeHolderServer = {name: "Ruh Roh!"};
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    return {
        currentUser: state.entities.users[state.session.id],
        currentServer,
        contentModal: state.modal.contentModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout()),
      fetchServer: (serverId) => dispatch(fetchServer(serverId)),
      leaveServer: (serverId) => dispatch(leaveServer(serverId)),
      receiveModal: (modalType) => dispatch(modalReceiver(modalType)),
      removeModal: (modalType) => dispatch(modalRemover(modalType))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);