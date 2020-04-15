import React from "react";
import { render } from "react-dom";

class AddServerForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      leader_id: this.props.currentUser.id,
      private_status: false,
      invite_link: Math.random().toString(18).slice(2)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createServer(this.state);
  }

  handleChange(field){
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  render(){
    return (
      <div className="modal-half-container">
        <h1>Create some Conflict!</h1>
        <i className="fab fa-battle-net" id="add-server-logo"></i>
        <h1>Make a Server!</h1>
        <i className="fas fa-hand-point-down" id="point-icon"></i>
        <form className="add-server-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange('name')} className="server-field" 
          placeholder="Name your Conflict!" maxLength="17"/>
          <input type="submit" value="Create Server!" id="add-server-button"/>
        </form>
      </div>
    );
  }
  
}

export default AddServerForm;