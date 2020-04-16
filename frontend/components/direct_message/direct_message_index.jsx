import React from "react";
import DirectMessageIndexItem from "./direct_message_index_item";

class DirectMessageIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentChannelId: null,
            body: '',
            author_id: null,
            channel_id: null
        }

        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(e) {
        const currentState = this.state;
        if (e.key === "Enter") {
            this.setState({ body: "" }, () => this.props.createMessage(currentState));
        }
    }

    componentDidUpdate(){
        const { fetchMessages, fetchServers } = this.props;
        const channelId = parseInt(this.props.channelId);

        if (this.state.currentChannelId !== channelId){
            this.setState({currentChannelId: channelId}, 
                () => fetchMessages(channelId).then(() => fetchServers().then(() => this.createSocket())));
        }
        
        if ((!this.state.author_id && !this.state.channel_id)
            && this.props.currentChannel !== {} && this.state.channel_id !== channelId) {
            this.setState({
                author_id: this.props.currentUser.id,
                channel_id: channelId
            });
        }
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
            create: function (chatContent) {
                this.perform('create', {
                    content: chatContent
                });
            },
            load: function () {
                return this.perform("load")
            }
        });
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value});
        }
    }

    componentDidMount(){
        const {channelId, fetchMessages} = this.props;
        fetchMessages(channelId).then(() => this.setState({currentChannelId: channelId}));
    }

    render(){
        const { messages, currentChannel, currentUser, currentServer } = this.props;
        let messageIndexItems;
        if(Object.values(messages).length){
            messageIndexItems = Object.values(messages).reverse().map((message) => (
                <DirectMessageIndexItem key={Math.random()} message={message} />
            ))
        }
        const splitNames = currentServer.name.split("/");

        let dmName;
        currentUser.username === splitNames[0] ? dmName = splitNames[1] : dmName = splitNames[0];

        return(
            <div className="last-container">
                <div className="channel-title-bar">
                    <h1><strong>#</strong>{dmName}</h1>
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
                </div>
            </div>
        )
    }
}

export default DirectMessageIndex;