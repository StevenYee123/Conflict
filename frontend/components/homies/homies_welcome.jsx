import React from "react";

class HomiesWelcome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser} = this.props;
        return(
            <div className="last-container">
                <div className="welcome-container">
                    <div className="channel-title-bar"></div>
                    <h1 className="homies-welcome-text">Welcome to {`  `}
                        <img src={window.conflictlogoURL} alt="conflict"/>
                    </h1>
                </div>
                {/* <img src={window.wumpusURL} alt="wumpus.jpeg"/> */}
            </div>
        )
    }
}

export default HomiesWelcome;