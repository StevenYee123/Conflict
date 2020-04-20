import { connect } from "react-redux";
import HomiesWelcome from "./homies_welcome";
import { clearServerErrors } from "../../actions/server_actions";
import { clearMessageErrors } from "../../actions/message_actions";

const mapStateToProps = (state) => {
    const { server, homie, message } = state.errors;
    const errors = server.concat(homie.concat(message));
    return {
      currentUser: state.entities.users[state.session.id],
      errors
    };
}

const mapDispatchToProps = dispatch => {
    return{
      clearServerErrors: () => dispatch(clearServerErrors()),
      clearMessageErrors: () => dispatch(clearMessageErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomiesWelcome);