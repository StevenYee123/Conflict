import React from "react";

class AddChannelForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            server_id: this.props.currentServer.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createChannel(this.state);
    }

    render(){
        return (
            <div className="add-channel-form">
                <h1>Create a new channel!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="channel-name-field">Enter a new Channel name!</label>
                    <input type="text" onChange={this.handleChange("name")} id="channel-name-field"/>
                    <input type="submit" value="Create!"/>
                </form>
            </div>
        )
    }
}

export default AddChannelForm;