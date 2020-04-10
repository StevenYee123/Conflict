import React from "react";
import { Switch, withRouter } from "react-router-dom";

class Content extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const serverId = this.props.match.params.serverId;
        this.props.fetchServer(serverId);
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
                </div>
            </div>
        )
    }
}

export default withRouter(Content);