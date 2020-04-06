import React from "react";
import {Link} from "react-router-dom";

class Splash extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const {user} = this.props; 
        let initialHeader;
        if (user){
            initialHeader = () => (
                <>
                    <h3>Hello, {user.username}</h3>
                    <button onClick={this.props.logout}>Log Out</button>
                </>
            )
        } else {
            initialHeader = () => (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            );
        }
        return(
            <>
                {initialHeader()}
            </>
        )
    }
}

export default Splash;