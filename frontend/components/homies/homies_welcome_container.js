import { connect } from "react-redux";
import HomiesWelcome from "./homies_welcome";

const mapStateToProps = (state) => {
    return {
      currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomiesWelcome);