import React from "react";
import MessageIndexItem from "./message_index_item";
import MembersIndex from "../users/members_index";

class MessageIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            body: '',
            author_id: null,
            channel_id: null
        }

        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(e){
        const currentState = this.state;
        const channelId = parseInt(this.props.currentChannel.id);
        if (e.key === "Enter"){
            this.chats.create(this.state);
            this.setState({body: ''}, () => {
                this.props.fetchMessages(this.props.currentChannel.id);
            });
            // this.props.createMessage(this.state).then(() => {
            //     this.setState({body: ''}, () => {
            //         this.chats.create(currentState);
            //     });
            // });
        }
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    componentDidUpdate(){
        let channelId = parseInt(this.props.match.params.channelId);
        if (this.state.channel_id !== channelId){
            this.setState({channel_id : channelId}, () => {
                this.props.fetchMessages(channelId);
                // this.createSocket();
            })
        }

        if ((!this.state.author_id && !this.state.channel_id) 
        && this.props.currentChannel !== {} && this.state.channel_id !== channelId){
            this.setState({
                author_id: this.props.currentUser.id,
                channel_id: channelId
            })
        }
    }

    componentWillMount(){
        this.createSocket();
    }

    createSocket() {
        let cable = ActionCable.createConsumer();
        this.chats = cable.subscriptions.create({
        channel: 'ChatChannel'
        }, {
        connected: () => {},
        received: (message) => {
            this.props.receiveMessage(message);
        },
        create: function(chatContent) {
            this.perform('create', {
            content: chatContent
            });
        }
        });
    }

    render(){
        const { messages, currentChannel, fetchUsers, currentServer, users } = this.props;
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
            <div className="last-container">
                <div className="channel-title-bar">
                    <h1><strong>#</strong>{currentChannel.name}</h1>
                </div>
                <div className="last-container-main">
                    <div className="last-container-left">
                        <div className="messages-container">
                            {messageIndexItems}
                        </div>
                        <div className="enter-message-container">
                            <input type="text" className="enter-message-field" onKeyPress={this.keyPressed} value={this.state.body}
                            onChange={this.handleChange('body')} placeholder="Enter a message for your homies to see!" />
                        </div>
                    </div>
                    <MembersIndex fetchUsers={fetchUsers} currentServer={currentServer} users={users}/>
                </div>
            </div>
        )
    }
}

export default MessageIndex;