import React from "react";
import { withRouter } from "react-router-dom";

class DeleteChannelForm extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // const channelId = this.props.currentChannel.id;
        // const channelIds = Object.values
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
        return(
            <div>
                <h1>Delete a Channel!</h1>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}

export default withRouter(DeleteChannelForm);