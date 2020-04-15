import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DirectMessageIndex from "./direct_message_index";
import { fetchDirectMessages } from "../../actions/direct_message_actions";
import { fetchChannel } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {

    return{
        // directMessages: Object.values(state.entites.directMessages),
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    fetchDirectMessages: () => dispatch(fetchDirectMessages()),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectMessageIndex));