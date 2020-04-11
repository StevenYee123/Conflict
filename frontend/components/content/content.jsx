import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import Modal from "react-modal";
import ChannelIndex from "../channel/channel_index";
import ChannelShow from "../channel/channel_show";

class Content extends React.Component{
    constructor(props){
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.stopEvent = this.stopEvent.bind(this);
        this.getAbilities = this.getAbilities.bind(this);
    }

    openModal(form){
      this.props.receiveModal(form);
    }

    closeModal(form){
      return e => {
        e.stopPropagation();
        this.props.removeModal(form);
      }
    }

    stopEvent(e){
      e.stopPropagation();
    }

    componentDidMount() {
        const serverId = this.props.match.params.serverId;
        this.props.fetchServer(serverId);
        if(serverId){
            this.props.fetchChannels(serverId);
        }
    }
    
    stopEvent(e){
        e.stopPropagation();
    }

    getHeader(userInfo, logout){
        if (userInfo) {
          return (
            <div className="logout-section">
              <strong>{userInfo.username}</strong>
              <button onClick={logout}>Log Out</button>
            </div>
          );
        }
    }

    getAbilities(){
        const {currentUser, currentServer} = this.props;
        if(currentUser.id === currentServer.leader_id){
            return(
                <button className="add-server-button" onClick={() => this.props.receiveModal('contentModal')}>
                    <i className="fas fa-chevron-circle-down"></i>
                </button>
            )
        }
    }

    render(){
        const {currentUser, logout, currentServer, channels, fetchChannels} = this.props;
        const initialHeader = this.getHeader(currentUser, logout);
        const leaderAbilities = this.getAbilities();
        return(
            <div className="second-nav">
                <div className="channel-header">
                    <strong>{currentServer.name}</strong>
                    {leaderAbilities}
                    <div className="channel-header-options">
                        <ul>
                            <li>La</li>
                            <li>la</li>
                            <li>la</li>
                        </ul>
                    </div>
                </div>
                <div className="channels-container">
                    <ChannelIndex channels={channels} currentServer={currentServer} 
                    currentUser={currentUser} fetchChannels={fetchChannels}/>
                </div>
                <div className="logout-section">
                    {initialHeader}
                </div>


                <Modal className="server-modal" isOpen={this.props.contentModal} ariaHideApp={false} 
                style={{overlay:{ backgroundColor: 'rgba(0,0,0,0)'} }}>
                    <div className="modal-close-container">
                        <button onClick={this.closeModal('contentModal')}>X</button>
                    </div>
                    <div>
                        <h1>Invite Peeps!</h1>
                        {currentServer.invite_link}
                    </div>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Content);