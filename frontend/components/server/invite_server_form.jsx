import React from "react";

class InviteServerForm extends React.Component{
    render(){
        return(
            <div className="invite-container">
                <h1>Inviting Homies?</h1>
                <strong><i className="fas fa-crow" id="invite-crow-logo"></i></strong>
                <h3>Send them this Invite Link!</h3>
                <input type="text" readOnly={true} id="invite-link" value={this.props.currentServer.invite_link}/>
            </div>
        )
    }
}

export default InviteServerForm;