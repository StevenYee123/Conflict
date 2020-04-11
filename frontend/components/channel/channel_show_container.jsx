import { connect } from "react-redux";
import ChannelShow from "./channel_show";
import { fetchChannel } from "../../actions/channel_actions";
import { modalReceiver, modalRemover } from "../../actions/modal_actions";
import { selectServer } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const placeHolderServer = { name: "Ruh Roh!" };
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    return {
        currentUser: state.entities.users[state.session.id],
        currentServer
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow)