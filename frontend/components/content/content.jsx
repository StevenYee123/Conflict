import React from "react";
import { Switch, withRouter } from "react-router-dom";
import Modal from "react-modal";

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
                        +
                </button>
            )
        }
    }

    render(){
        const {currentUser, logout, currentServer} = this.props;
        const initialHeader = this.getHeader(currentUser, logout);
        const leaderAbilities = this.getAbilities();
        return(
            <div className="second-nav">
                <h1>{currentServer.name}</h1>
                
                <div className="logout-section">
                    {initialHeader}
                    {leaderAbilities}
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