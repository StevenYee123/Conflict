import React from "react";

class ServerIndex extends React.Component{
    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
    }

    componentDidMount(){
        this.props.fetchServers();
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
        const serversList = this.props.servers.map((server) => {
            return (
                <div></div>
            )
        })
        

        return(
            <div className="channels-main">
                <div className="server-nav">

                </div>
                {initialHeader}
            </div>
        )
    }
}

export default ServerIndex;