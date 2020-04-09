import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {fetchServers, createServer, removeServer, updateServer} from "../../actions/server_actions";
import {logout} from "../../actions/session_actions";
import ServerIndex from "./server_index";

const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.entities.users[state.session.id],
        serverIds: Object.keys(state.entities.servers),
        errors: state.errors.session,
        servers: Object.values(state.entities.servers)
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchServers: () => dispatch(fetchServers()),
    createServer: (server) => dispatch(createServer(server))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);