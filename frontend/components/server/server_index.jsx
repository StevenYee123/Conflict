import React, { useState } from "react";
import { Switch, Router, withRouter, NavLink, Route } from "react-router-dom";
import ServerIndexItem from "./server_index_item";
import AddServerForm from "./add_server_form";
import JoinServerForm from "./join_server_form";
import Modal from "react-modal";

class ServerIndex extends React.Component{
    constructor(props){
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.stopEvent = this.stopEvent.bind(this);
    }

    componentDidMount(){
        this.props.fetchServers();
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


    render(){
        const {currentUser, logout, createServer, 
          joinServer, fetchChannels, channels, fetchMessages} = this.props;
        let serversList, errorsList;
        if (this.props.servers){
            serversList = this.props.servers.map((server) => {
              if(!server.private_status){
                return (
                  <div className="server-index-item" key={Math.random()} >
                    <ServerIndexItem server={server} fetchMessages={fetchMessages}
                      fetchChannels={fetchChannels} channels={channels} />
                    <div id="server-name-preview">
                      <strong>{server.name}</strong>
                    </div>
                  </div>
                );
              }
            });
        }

        const generateErrors = () => {
          return this.props.errors.map((error) => {
            return <li class={Math.random()} key={Math.random()}>{error}</li>;
          });
        };
        
        errorsList = generateErrors();

        return (
          <main className="channels-main">
            <div className="server-nav">
              <ul className="server-icons">
                <li>
                  <NavLink className='me' activeClassName='selected-server' to='/servers/@me'>
                    <i className="fas fa-users" id="user-icon"></i>
                  </NavLink>
                </li>
                {serversList}
                <button className="add-server-button" onClick={() => this.props.receiveModal('serverFormModalOpen')}>
                  +
                </button>
              </ul>
            </div>
            {errorsList}

            <Modal className="server-modal" isOpen={this.props.serverFormModalOpen} ariaHideApp={false} 
            style={{overlay:{ backgroundColor: 'rgba(0,0,0,.5)', zIndex: 999}}} >
              <div className="servers-modal-container">
                <div className="modal-close-container">
                  <button onClick={this.closeModal('serverFormModalOpen')}>X</button>
                </div>
                <div className="modal-content-header">
                  <h1>More Conflict is Good!</h1>
                </div>

                <div className="server-modal-content">
                  <AddServerForm currentUser={currentUser} createServer={createServer} />
                  <JoinServerForm joinServer={joinServer} />
                </div>
              </div>
            </Modal>

          </main>
        );
    }
}

export default withRouter(ServerIndex);