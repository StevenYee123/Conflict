import React from "react";
import { render } from "react-dom";

class AddServerForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      leader_id: this.props.currentUser.id,
      private_status: false
    }

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
      <div className="add-server-container">
        <h1>Create some Conflict!</h1>
        <i className="fab fa-battle-net" id="add-server-logo"></i>
        <h1>Make a Server!</h1>
        <form className="add-server-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange('name')} id="add-server-field"/>
          <input type="submit" value="Create Server!" id="add-server-button"/>
        </form>
      </div>
    );
  }
  
}

export default AddServerForm;