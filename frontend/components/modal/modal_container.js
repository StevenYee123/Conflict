import { connect } from "react-redux";
import { modalClear } from "../../actions/modal_actions";
import Modal from "./modal";

const mapStateToProps = state => {
    return{
        modal: state.modal
    }
}

const mapDispatchToProps = dispatch => {
    return{
        clearModal: () => dispatch(modalClear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)