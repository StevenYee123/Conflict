import React from "react";

class JoinServerForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            invite_link: '',
        }
        this.oldLink = null;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const {joinServer} = this.props;
        if(this.oldLink !== this.state.invite_link){
            this.oldLink = this.state.invite_link;
            joinServer(this.state.invite_link);
        }
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        return (
          <div className="modal-half-container" onSubmit={this.handleSubmit}>
            <h1>Assimilation!</h1>
            <i className="far fa-handshake" id="join-server-logo"></i>
            <h1>Join a Server!</h1>
            <i className="fas fa-hand-point-down" id="point-icon"></i>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange("invite_link")} className="server-field"
              placeholder="Enter secret password"/>
              <input type="submit" value="Join Server!" id="join-server-button"/>
            </form>
          </div>
        );
    }
}

export default JoinServerForm;