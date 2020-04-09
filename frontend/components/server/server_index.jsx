import React from "react";

class ServerIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser, logout} = this.props;
        let initialHeader;
        if (currentUser) {
          initialHeader = () => (
            <div>
              <h3>Hello, {currentUser.username}</h3>
              <button onClick={logout}>Log Out</button>
            </div>
          );
        } 

        return(
            <>
                <h1>Welcome to Conflict!</h1>
                {initialHeader()}
            </>
        )
    }
}

export default ServerIndex;