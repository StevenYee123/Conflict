import React from "react";
import { withRouter } from "react-router-dom";

class DeleteChannelForm extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const {currentChannel, deleteChannel, channelIds, currentServer} = this.props;
        let nextChannel = channelIds[0];
        if (parseInt(nextChannel) === currentChannel.id){
            nextChannel = this.props.channelIds[1]
        }
        
        if(channelIds.length > 1){
            deleteChannel(currentChannel.id).then(() => 
                this.props.history.push(`/channels/${currentServer.id}/${nextChannel}`));
        }
    }

    render(){
        const {currentChannel} = this.props;
        return(
            <div className="channel-options-subsection channel-delete-section">
                <h1>Delete Channel?</h1>
                <i className="far fa-angry" id="delete-channel-icon"></i>
                <strong>If you TRULY hate "{currentChannel.name}"...</strong>
                <button onClick={this.handleClick} className="delete-channel-button">Delete It</button>
            </div>
        )
    }
}

export default withRouter(DeleteChannelForm);