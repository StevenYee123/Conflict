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
        this.handleErrors = this.handleErrors.bind(this);
    }

    keyPressed(e){
        const currentState = this.state;
        if (e.key === "Enter"){
            this.setState({body: ""}, () => this.props.createMessage(currentState));
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
                this.props.fetchMessages(channelId).then(() => this.createSocket());
            });
        }

        if ((!this.state.author_id && !this.state.channel_id) 
        && this.props.currentChannel !== {} && this.state.channel_id !== channelId){
            this.setState({
                author_id: this.props.currentUser.id,
                channel_id: channelId
            })
        }

        const { clearServerErrors } = this.props;
        if (this.props.errors.length) {
            setTimeout(function () {
                clearServerErrors();
            }, 3000);
        }
    }

    handleErrors(errors){
        return errors.map((error) => {
            return <li key={Math.random()}>{error}</li>
        });
    }

    createSocket() {
        let cable = ActionCable.createConsumer();
        this.chats = cable.subscriptions.create({
        channel: 'ChatChannel'
        }, {
        connected: () => {
        },
        received: (messages) => {
            this.props.receiveMessages(messages);
        },
        create: function(chatContent) {
            this.perform('create', {
            content: chatContent
            });
        },
        load: function(){
            return this.perform("load")
        }
        });
    }

    render(){
        const { messages, currentChannel, fetchUsers, currentServer, users } = this.props;
        const channelMessages = Object.values(messages);
        let placeHolder;
        let messageIndexItems;
        if (channelMessages.length > 0){
            messageIndexItems = channelMessages.reverse().map((message) => {
                return (
                    <MessageIndexItem key={Math.random()} message={message}/>
                )
            })
        } else {
            placeHolder = <h1 className="message-placeholder-text">
                <i className="fas fa-wind"></i>
                Man it's lonely here, why dontcha say something?
                <i className="fas fa-laugh-wink"></i>
            </h1>
        }

        const errorsList = this.handleErrors(this.props.errors);
        let errorsClass = "";

        if(errorsList.length >= 1){
            errorsClass = "session-errors";
        }

        return(
            <div className="last-container">
                <div className="channel-title-bar">
                    <ul className={errorsClass}>
                        {errorsList}
                    </ul>
                    <h1><strong>#</strong>{currentChannel.name}</h1>
                </div>
                <div className="last-container-main">
                    <div className="last-container-left">
                        <div className="messages-container">
                            {placeHolder}
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