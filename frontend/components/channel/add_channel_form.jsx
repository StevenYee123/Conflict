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
            <div className="add-channel-container">
                <h1>Create a new channel!</h1>
                <form onSubmit={this.handleSubmit} className="add-channel-form">
                    <i className="fas fa-comments" id="message-icon"></i>
                    <label htmlFor="channel-name-field" className="add-channel-text" >
                        Enter a new Channel name!
                    </label>
                    <i className="fas fa-hand-point-down" id="add-channel-pointer"></i>
                    <input type="text" onChange={this.handleChange("name")} id="channel-name-field"
                        placeholder="Enter Channel Name?" maxLength="50"/>
                    <input type="submit" value="Create!" className="add-channel-button"/>
                </form>
            </div>
        )
    }
}

export default AddChannelForm;