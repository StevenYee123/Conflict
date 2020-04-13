import React from "react";
import MessageIndexContainer from "../message/message_index_container";

class ChannelShow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { messages, currentChannel } = this.props;
        return(
            <div className="channel-title-bar">
                <h1><strong>#</strong>{this.props.currentChannel.name}</h1>
            </div>
        )
    }
}

export default ChannelShow;