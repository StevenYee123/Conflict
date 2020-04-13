import React from "react";
import MessageIndexContainer from "../message/message_index_container";

class ChannelShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        const {currentChannel} = this.props;
        if(currentChannel.id){
            this.props.fetchMessages(currentChannel.id);
        }
    }

    render(){
        return(
            <div className="last-container">
                <div className="messages-header">
                    <h1>{this.props.currentChannel.name}</h1>
                </div>
                <MessageIndexContainer />
            </div>
        )
    }
}

export default ChannelShow;