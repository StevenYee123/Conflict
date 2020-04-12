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
            <div>
                <h1>Edit a channel!</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter your New Channel Name</h3>
                    <input type="text" onChange={this.handleChange('name')}/>
                    <input type="submit" value="Edit!"/>
                </form>
            </div>
        )
    }
}

export default EditChannelForm;