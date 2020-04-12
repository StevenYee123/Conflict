import React from "react";

class EditChannelForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.currentChannel.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateChannel(this.state);
    }

    render(){
        return(
            <div className="channel-options-subsection" id="edit-channel-container">
                <h1>Edit a channel!</h1>
                <form onSubmit={this.handleSubmit} className="edit-channel-form">
                    <i className="fas fa-marker" id="edit-channel-icon"></i>
                    <h3>Enter your New Channel Name</h3>
                    <input type="text" onChange={this.handleChange('name')} 
                        className="edit-channel-field" placeholder="Enter new Name!"/>
                    <input type="submit" value="Edit!" className="edit-channel-button"/>
                </form>
            </div>
        )
    }
}

export default EditChannelForm;