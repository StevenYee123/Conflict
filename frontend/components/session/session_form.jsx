import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  guestLogin(e) {
    e.preventDefault();
    
    debugger;
    const dummy = {
      email: "sallyseashell@gmail.com",
      password: "password"
    };
    this.props.manualLogin(dummy);
  }

  componentDidMount(){
    this.props.clearErrors();
    this.setState({
      email: "",
      username: "",
      password: "",
    });
  }

  render() {
    // Some logic to render differently based on formType
    const that = this;
    const { formType } = this.props;
    let header, subMessage, footerText, link, usernameField, classname;

      if (formType === 'Sign Up'){
        link = "/login";
        classname = "signup";
        header = "Welcome Aboard!"
        subMessage = "You'll make a fine addition to our ranks"
        footerText = "Already part of the conflict?"
        usernameField = (
          <>
            <label htmlFor="username" className="frontpage-label">Username</label>
            <br/>
            <input type="text" id="username" onChange={this.handleChange("username")} className="session-input"/>
          </>
        );
      } else {
        link = `/signup`;
        classname = "login";
        header = "Welcome Back!"
        subMessage = "We're so glad to see you again!"
        footerText = "Don't have an account yet?"
        usernameField = (
          null
        )
      }

    const errorList = () => {
      return that.props.errors.map((error) => {
        return <li>{error}</li>;
      });
    };

    return (
      <div className="session-page">
        <img src={window.brentURL} className="session-logo" alt="logo.png"/>
        <div className="fields-form">
          <form className="session-form">
          <div className="welcome-text">
            <h1>{header}</h1>
            <strong>{subMessage}</strong>
          </div>
          <div className="fields-container">
            <label id="email" className="frontpage-label">Email:</label>
            <br/>
            <input type="text" id="email" onChange={this.handleChange("email")} className="session-input"/>
            <br/>
            {usernameField}
            <label htmlFor="password" className="frontpage-label">Password</label>
            <br/>
            <input type="password" id="password" onChange={this.handleChange("password")} className="session-input" />
            <button type="button" onClick={this.handleSubmit}>
              {formType}
            </button>
          </div>
          </form>
          <div className="session-footer">
            <p>{footerText} {this.props.navLink}</p>
            <button onClick={this.guestLogin} id="guest-login">Guest Login</button>
          </div>
          
        </div>
        <br/>
        <ul>{errorList()}</ul>
      </div>
    );
  }
}

export default SessionForm;
