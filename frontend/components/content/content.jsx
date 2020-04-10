import React from "react";
import { Switch, withRouter } from "react-router-dom";
import Modal from "react-modal";

class Content extends React.Component{
    constructor(props){
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.stopEvent = this.stopEvent.bind(this);
    }

    openModal(){
      this.props.receiveModal();
    }

    closeModal(e){
        e.stopPropagation();
        this.props.removeModal();
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

    render(){
        let serverName = ""; 
        const {currentUser, logout, currentServer} = this.props;
        const initialHeader = this.getHeader(currentUser, logout);

        // if (server.name){
        //     serverName = server.name;
        // }

        return(
            <div className="second-nav">
                <h1>{currentServer.name}</h1>
                
                <div className="logout-section">
                    {initialHeader}
                    <button className="add-server-button" onClick={this.openModal}>+</button>
                </div>

                <Modal className="server-modal" isOpen={this.props.modal} ariaHideApp={false} 
                style={{overlay:{ backgroundColor: 'rgba(0,0,0,0)'} }}>
                    <div className="modal-close-container">
                <button onClick={this.closeModal}>X</button>
              </div>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Content);