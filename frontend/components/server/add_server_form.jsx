import { connect } from "react-redux";
import React from "react";
import { modalCreateServer } from "../../actions/modal_actions";

function AddServerForm({ createServerModal }){
    const createServer = createServerModal;

    return (
      <div className="server-form-container">
        <h1>More Conflict!</h1>
        <div className="choices-container">

        </div>
      </div>
    );

}

const mapDispatchToProps = dispatch => ({
    createServerModal: (server) => dispatch(createServerModal(server))
})

export default connect(null, mapDispatchToProps)(AddServerForm);