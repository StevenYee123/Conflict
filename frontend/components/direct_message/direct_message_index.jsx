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
        this.handleErrors = this.handleErrors.bind(this);
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

        const { clearServerErrors, clearMessageErrors } = this.props;
        if (this.props.errors.length) {
            setTimeout(function () {
                clearServerErrors();
                clearMessageErrors();
            }, 3000);
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

    handleErrors(errors) {
        return errors.map((error) => {
            return <li key={Math.random()}>{error}</li>
        });
    }

    componentDidMount(){
        const {channelId, fetchMessages} = this.props;
        fetchMessages(channelId).then(() => this.setState({currentChannelId: channelId}));
    }

    render(){
        const { messages, currentChannel, currentUser, currentServer } = this.props;
        let messageIndexItems;
        let placeHolder;
        if(Object.values(messages).length){
            messageIndexItems = Object.values(messages).reverse().map((message) => (
                <DirectMessageIndexItem key={Math.random()} message={message} />
            ))
        } else {
            placeHolder = <h1 className="message-placeholder-text">
                            <i className="fas fa-wind"></i>
                            Man it's lonely here, why dontcha say something?
                            <i className="fas fa-laugh-wink"></i>
                        </h1>
        }
        const splitNames = currentServer.name.split("/");

        let dmName;
        currentUser.username === splitNames[0] ? dmName = splitNames[1] : dmName = splitNames[0];

        const errorsList = this.handleErrors(this.props.errors);
        let errorsClass = "";

        if (errorsList.length >= 1) {
            errorsClass = "session-errors";
        }

        return(
            <div className="last-container">
                <div className="channel-title-bar">
                    <ul className={errorsClass}>
                        {errorsList}
                    </ul>
                    <h1><strong>#</strong>{dmName}</h1>
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
                </div>
            </div>
        )
    }
}

export default DirectMessageIndex;