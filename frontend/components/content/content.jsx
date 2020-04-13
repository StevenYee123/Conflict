import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import Modal from "react-modal";
import ChannelIndexContainer from "../channel/channel_index_container";
import AddChannelForm from "../channel/add_channel_form";
import InviteServerForm from "../server/invite_server_form"
import EditServerForm from "../server/edit_server_form";
import DeleteServerForm from "../server/delete_server_form";

class Content extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hideOptions: ""
        }

        this.closeModal = this.closeModal.bind(this);
        this.getAbilities = this.getAbilities.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.editDetails = this.editDetails.bind(this);
        this.deleteDetails = this.deleteDetails.bind(this);
    }
    
    closeModal(form){
      return e => {
        e.stopPropagation();
        this.props.removeModal(form);
      }
    }

    componentDidMount() {
        const serverId = this.props.match.params.serverId;
        this.props.fetchServer(serverId);
        if(serverId){
            this.props.fetchChannels(serverId);
        }
    }

    getHeader(userInfo, logout){
        if (userInfo) {
          return (
            <div className="logout-section">
              <span className="user-initial">{userInfo.username.slice(0, 1).toUpperCase()}</span>
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
                <button className="channel-options-button" onClick={() => 
                    this.props.receiveModal('contentModal')}>
                    Create a Channel!
                    <i className="fas fa-comments" id="message-icon-button"></i>
                </button>
            )
        }
    }

    inviteDetails(){
        return (
                <button className="channel-options-button" onClick={() => 
                    this.props.receiveModal('inviteModal')}> 
                    Invite some Homies!
                    <i className="fas fa-user-friends" id="friends-icon-button"></i>
                </button>
        )
    }

    editDetails(){
        return(
                <button className="channel-options-button" onClick={() => 
                    this.props.receiveModal('editServerModal')}>
                    Edit your Server!
                    <i className="fas fa-edit" id="edit-icon-button"></i>
                </button>
        )
    }

    deleteDetails(){
        return(
                <button className="channel-options-button" id="delete-server-option"
                    onClick={() => this.props.receiveModal('deleteServerModal')}>
                <strong>Delete your Server?</strong> 
                <i className="fas fa-trash-alt" id="delete-icon-button"></i>
                </button>
        )
    }
    showOptions(){
        if (this.state.hideOptions === "show"){
            this.setState({hideOptions: ""});
        } else {
            this.setState({hideOptions: "show"});
        }
    }

    render(){
        const { currentUser, logout, currentServer,
                channels, fetchChannels, createChannel,
                deleteServer, updateServer, servers } = this.props;
        const initialHeader = this.getHeader(currentUser, logout);

        let leaderOptions; 
        if (currentUser.id === currentServer.leader_id){
            leaderOptions = 
                <>
                    <button className="options-dropdown-button" onClick={this.showOptions}>
                        <i className="fas fa-chevron-circle-down" id="dropdown-icon"></i>
                        <div id="leader-options-preview">
                            <span>
                                Leader Options! :o
                            </span>
                        </div>
                    </button>
                    <div className={`channel-header-options ${this.state.hideOptions}`} id={this.state.hideOptions}>
                        <ul onClick={this.showOptions}>
                            <li>{this.getAbilities()}</li>
                            <li>{this.inviteDetails()}</li>
                            <li>{this.editDetails()}</li>
                            <li>{this.deleteDetails()}</li>
                        </ul>
                    </div>
                </>
        }
        
        return(
            <div className="second-nav">
                <div className="channel-header">
                    <strong>{currentServer.name}</strong>
                    {leaderOptions}
                </div>
                <div className="channels-container">
                    <ChannelIndexContainer path={this.props.location.pathname} currentServer={currentServer} channels={channels}/> 
                </div>
                <div className="logout-section">
                    {initialHeader}
                </div>


                <Modal className="channel-modal" isOpen={this.props.contentModal} ariaHideApp={false} 
                    style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)', zIndex: '999' } }} >
                    <div className="channel-modal-close-container">
                        <button onClick={this.closeModal('contentModal')}>X</button>
                    </div>
                    <div>
                        <AddChannelForm currentServer={currentServer} createChannel={createChannel}/>
                    </div>
                </Modal>

                <Modal className="channel-modal" isOpen={this.props.inviteModal} ariaHideApp={false}
                    style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)', zIndex: '999' } }}>
                        <button onClick={() => this.props.removeModal('inviteModal')} className="invite-close-button">
                            X
                        </button>
                        <InviteServerForm currentServer={currentServer} />
                </Modal>

                <Modal className="channel-modal" isOpen={this.props.editServerModal} ariaHideApp={false}
                    style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)', zIndex: '999' } }}>
                    <div className="edit-server-container">
                        <button onClick={this.closeModal('editServerModal')} className="edit-server-close-button">X</button>
                        <EditServerForm currentServer={currentServer} updateServer={updateServer}/>
                    </div>
                </Modal>

                <Modal className="channel-modal" isOpen={this.props.deleteServerModal} ariaHideApp={false}
                    style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)', zIndex: '999' } }}>
                    <div className="delete-server-container">
                        <button onClick={this.closeModal('deleteServerModal')} className="delete-server-close-button">
                            X
                        </button>
                        <DeleteServerForm deleteServer={deleteServer} currentServer={currentServer}
                            fetchChannels={fetchChannels} servers={servers} />
                    </div>
                </Modal>                
            </div>
        )
    }
}

export default withRouter(Content);