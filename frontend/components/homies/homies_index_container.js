import { connect } from "react-redux";
import { fetchHomies, createHomie, deleteHomie } from "../../actions/homie_actions";
import { createDirectMessage } from "../../actions/direct_message_actions";
import { fetchUser } from "../../actions/user_actions";
import HomiesIndex from "./homies_index";

const mapStateToProps = (state, ownProps) => ({
    users: state.entities.users,
    homies: state.entities.homies,
    errors: state.entities.errors
});

const mapDispatchToProps = (dispatch) => ({
    fetchHomies: () => dispatch(fetchHomies()),
    removeHomie: (id) => dispatch(deleteHomie(id)),
    addHomie: (name) => dispatch(createHomie(name)),
    createDirectMessage: id => dispatch(createDirectMessage(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomiesIndex);