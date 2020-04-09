import React from "react";
import { Switch, Router, withRouter } from "react-router-dom";
import ServerIndexItem from "./server_index_item";
import Modal from "react-modal";

class ServerIndex extends React.Component{
    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.createServer = this.createServer.bind(this);
    }

    componentDidMount(){
        this.props.fetchServers();
    }

    createServer(e){
        e.preventDefault();
        debugger;
        this.props.addServerModal();
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
        const {currentUser, logout} = this.props;
        const initialHeader = this.getHeader(currentUser, logout);
        let serversList;
        if (this.props.servers){
            serversList = this.props.servers.map((server) => {
              return <ServerIndexItem key={Math.random()} server={server} />;
            });
        }
        
        return (
          <div className="channels-main">
            <div className="server-nav">
              <ul className="server-icons">
                <li>
                  <i className="fas fa-users" id="user-icon"></i>
                </li>
                {serversList}
                <button className="add-server-button" onClick={this.createServer}>+</button>
              </ul>
            </div>

            <div className="channels-nav">
                <div></div>
                {initialHeader}
            </div>
          </div>
        );
    }
}

export default withRouter(ServerIndex);