import React from "react";
import { Link, withRouter } from "react-router-dom";

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
    
    const dummy = {
      email: "sallyseashell@gmail.com",
      password: "password"
    };
    this.props
      .manualLogin(dummy)
      .then(() => this.props.history.push("/servers/@me"));
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
    const numbers = ["one", "two", "three", "four", "five", "six"];
    const that = this;
    const { formType } = this.props;
    let header, subMessage, footerText, link, usernameField, classname;
    let buttonText;
    formType === "Sign Up" ? buttonText = "Login" : buttonText = "Sign Up";
    const selector = numbers[this.props.classNum];
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
            <input type="text" id="username" onChange={this.handleChange("username")} 
            maxLength="12" className="session-input"/>
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
        return <li class={Math.random()} key={Math.random()}>{error}</li>;
      });
    };

    const errors = errorList();
    let errorsClass = "";

    if (errors.length >= 1) {errorsClass = "session-errors"}; 
    
    return (
      <div className={`session-page ${selector}`}>
        <div className="session-logo">
          <Link to="/"><img src={window.brentURL} alt="logo.png" /></Link>
          <Link to="/"><img src={window.conflictlogoURL} alt="conflict.png" /></Link>
        </div>
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
            <div>
              <p>{footerText}</p>
              <button id="login-signup-button" onClick={() => this.props.history.push(this.props.navLink)}>
                {buttonText}
              </button>
            </div>
            <button onClick={this.guestLogin} id="guest-login">Guest Login</button>
          </div>
          
        </div>
        <br/>
        <ul className={errorsClass}>{errors}</ul>
      </div>
    );
  }
}

export default withRouter(SessionForm);
