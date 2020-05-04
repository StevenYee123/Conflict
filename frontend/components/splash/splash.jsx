import React from "react";
import {Link} from "react-router-dom";
import SplashArt from "./splash_art";

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
              </>
            );
        }
        return (
          <div className="splash">
            <header className="splash-nav">
              <div className="left">
                <img
                  src={window.brentURL}
                  alt="discord_logo"
                  className="splash-logo"
                />
                <img src={window.conflictlogoURL} alt="conflict-logo" id="splash-text"/>
              </div>
              <div className="right">
                <a href="https://github.com/stevenYee123/" id="splash-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="http://www.linkedin.com/in/steven-yee-284731139" id="splash-icon">
                  <i class="fab fa-linkedin"></i>
                </a>
                {initialHeader()}
              </div>
            </header>
            <div className="splash-mid">
                <h1>Welcome to the world of Conflict</h1>
                <br/>
                <p>
                  Conflict is the easiest way to communicate over voice, video,
                  and text, whether you’re part of a school club, a nightly
                  gaming group, a worldwide art community, or just a handful of
                  friends that want to hang out.
                </p>
                <br/>
              <div className="bottom">
                <Link to="/signup" className="signup-button">Sign Up</Link>
                <Link to="/signup" className="homepage-button">Try the Demo</Link>
              </div>
            </div>
            <SplashArt />
          </div>
        );
    }
}

export default Splash;