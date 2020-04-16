import { connect } from "react-redux";
import { fetchHomies, createHomie, deleteHomie } from "../../actions/homie_actions";
import { createDirectMessage } from "../../actions/direct_message_actions";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { fetchServers } from "../../actions/server_actions";
import HomiesIndex from "./homies_index";
import { modalReceiver, modalRemover } from "../../actions/modal_actions";
import { fetchDirectMessages } from "../../actions/direct_message_actions";
import { fetchChannel } from "../../actions/channel_actions";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        directMessages: state.entities.directMessages,
        addHomieModal: state.modal.addHomieModal,
        servers: state.entities.servers,
        users: state.entities.users,
        homies: state.entities.homies,
        errors: state.entities.errors
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchDirectMessages: () => dispatch(fetchDirectMessages()),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchHomies: () => dispatch(fetchHomies()),
    removeHomie: (id) => dispatch(deleteHomie(id)),
    addHomie: (name) => dispatch(createHomie(name)),
    createDirectMessage: id => dispatch(createDirectMessage(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchServers: () => dispatch(fetchServers()),
    receiveModal: (modalType) => dispatch(modalReceiver(modalType)),
    removeModal: (modalType) => dispatch(modalRemover(modalType))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomiesIndex);