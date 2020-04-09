import { connect } from "react-redux";
import React from "react";
import { modalCreateServer } from "../../actions/modal_actions";

function AddServerForm({ createServerModal }){
    const createServer = createServerModal;

    return (
      <div className="server-form-container">
        <h1>More Conflict!</h1>
        <div className="choices-container">
            <button onClick={createServer}>Create a Server!</button>
        </div>
      </div>
    );

}

const mapDispatchToProps = dispatch => ({
    createServerModal: (server) => dispatch(modalCreateServer(server))
})

export default connect(null, mapDispatchToProps)(AddServerForm);