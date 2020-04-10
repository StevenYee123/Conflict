import React from "react";

class JoinServerForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const {joinServer} = this.props;
        joinServer(this.state.name);
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        return (
          <div className="join-server-form" onSubmit={this.handleSubmit}>
            <h1>Assimilation!</h1>
            <i className="fas fa-american-sign-language-interpreting"></i>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange("name")} />
              <input type="submit" value="Join Server!" />
            </form>
          </div>
        );
    }
}

export default JoinServerForm;