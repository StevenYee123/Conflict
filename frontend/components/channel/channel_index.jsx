import React from "react";
import { Link, withRouter } from "react-router-dom";
import Modal from "react-modal";
import AddChannelForm from "./add_channel_form";
import EditChannelForm from "./edit_channel_form";
import DeleteChannelForm from "./delete_channel_form";
import DeleteServerForm from "../server/delete_server_form";
import InviteServerForm from "../server/invite_server_form";
import EditServerForm from "../server/edit_server_form";

class ChannelIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hideOptions: "",
            server_id: null,
            currentChannelId: null
        }

        this.closeModal = this.closeModal.bind(this);
        this.getAbilities = this.getAbilities.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.editDetails = this.editDetails.bind(this);
        this.deleteDetails = this.deleteDetails.bind(this);
    }

    componentDidMount() {
        const { channelId, serverId, channels } = this.props;
        if (this.state.currentChannelId !== channelId){
            this.props.fetchMessages(channelId).then((res) => {
                this.setState({ currentChannelId: Object.values(res.messages)[0].channelId.toString()})
            });
            if (!Object.values(channels).length){
                this.props.fetchChannels(serverId);
            }
        }
    }

    closeModal(form){
      return e => {
        e.stopPropagation();
        this.props.removeModal(form);
      }
    }

    getHeader(userInfo, logout){
        if (userInfo) {
          return (
            <div className="logout-section">
              <span className="user-initial">{userInfo.username.slice(0, 1).toUpperCase()}</span>
                <strong>{userInfo.username}{`#${userInfo.id}`}</strong>
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
                <span>Delete your Server?</span> 
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
        const {updateServer, deleteServer, channelIds, currentUser, currentServer, createChannel,
            currentChannel, updateChannel, deleteChannel, servers, logout} = this.props;
        const currentChannelId = this.props.match.params.channelId;
        const channelVals = Object.values(this.props.channels);
        let leaderChannelOptions;
        const channelLinks = channelVals.map((channel) => {
        let isActive = "";
        if (channel.id === parseInt(currentChannelId)){
            isActive = "active-channel"
        }

        if (currentUser.id === currentServer.leader_id){
            leaderChannelOptions = 
                <button id="channel-option-icon" onClick={() => this.props.receiveModal('editChannelModal')}>
                    <i className="fas fa-cog"></i>
                </button>
        }

        return (
            <div id="activate-channel" className={isActive} key={Math.random()}>
                <Link to={`/servers/${currentServer.id}/channel/${channel.id}`}>
                    <span id="pound-sign">#</span>  
                    {channel.name}
                </Link>
                {leaderChannelOptions}
            </div>
            )
        });

        let initialHeader = this.getHeader(currentUser, logout);

        let leaderServerOptions;
            if (currentUser.id === currentServer.leader_id){
                leaderServerOptions = 
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
                    {leaderServerOptions}
                </div>
                <div className="channels-container">
                    <strong>Text-Channels</strong>
                    {channelLinks}
                </div>
                <div className="logout-section">
                    {initialHeader}
                </div>

                <Modal className="channel-options-modal" isOpen={this.props.editChannelModal} ariaHideApp={false}
                    style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)', zIndex: '999' } }}>
                        <button onClick={() => this.props.removeModal('editChannelModal')} className="channel-close-button">
                            X
                        </button>
                        <div className="channel-options-container">
                            <EditChannelForm currentChannel={currentChannel} updateChannel={updateChannel} />
                            <DeleteChannelForm currentChannel={currentChannel} deleteChannel={deleteChannel}
                                 channelIds={channelIds} currentServer={currentServer} />
                        </div>
                </Modal>

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
                        <DeleteServerForm deleteServer={deleteServer} currentServer={currentServer} servers={servers} />
                    </div>
                </Modal>       
            </div>
        )
    }
}

export default withRouter(ChannelIndex);