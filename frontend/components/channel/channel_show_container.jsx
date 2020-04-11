import { connect } from "react-redux";
import ChannelShow from "./channel_show";
import { fetchChannel } from "../../actions/channel_actions";
import { modalReceiver, modalRemover } from "../../actions/modal_actions";
import { selectServer, selectChannel } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const placeHolderServer = { name: "Loading, please wait" };
    const placeHolderChannel = { name: "Loading, please wait" };
    let currentServer = selectServer(state, ownProps.match.params.serverId) || placeHolderServer;
    let currentChannel = selectChannel(state, ownProps.match.params.channelId) || placeHolderChannel;
    return {
        currentUser: state.entities.users[state.session.id],
        currentServer,
        currentChannel
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow)