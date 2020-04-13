import React from "react";
import MessageIndexItem from "./message_index_item";

class MessageIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            body: '',
            author_id: null,
            channel_id: null,
            location: null
        }

        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(e){
        if (e.key === "Enter"){
            this.props.createMessage(this.state);
        }
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    componentDidUpdate(){
        let channelId = parseInt(this.props.match.params.channelId);
        if (this.state.location !== channelId){
            this.setState({location : channelId}, () => {
                this.props.fetchMessages(channelId);
            })
        }

        if ((!this.state.author_id && !this.state.channel_id) && this.props.currentChannel !== {}){
            this.setState({
                author_id: this.props.currentUser.id,
                channel_id: this.props.currentChannel.id
            })
        }
    }

    render(){
        const { messages } = this.props;
        const channelMessages = Object.values(messages);
        let messageIndexItems;
        if (channelMessages.length > 0){
            messageIndexItems = channelMessages.reverse().map((message) => {
                return (
                    <MessageIndexItem key={Math.random()} message={message}/>
                )
            })
        }
        return(
            <div className="last-container-main">
                <div className="last-container-left">
                    <div className="messages-container">
                        {messageIndexItems}
                    </div>
                    <div className="enter-message-container">
                        <input type="text" className="enter-message-field" onKeyPress={this.keyPressed}
                        onChange={this.handleChange('body')} placeholder="Enter a message for your homies to see!" />
                    </div>
                </div>
                <div>
                    <h1>Members List</h1>
                </div>
            </div>
        )
    }
}

export default MessageIndex;