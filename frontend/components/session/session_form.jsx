import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    // Some logic to render differently based on formType
    const that = this;
    const { formType } = this.props;
    let header;
    let link;

      header = <h1>{formType}</h1>;
      if (formType === 'Sign Up'){
        link = "/login";
      } else {
        link = `/signup`
      }


    const errorList = () => {
      return that.props.errors.map((error) => {
        return <li>{error}</li>;
      });
    };

    return (
      <div>
        {header}
        <form>
          <label>
            Email:
            <input type="text" onChange={this.handleChange("email")} />
          </label>
          <label>
            Password:
            <input type="password" onChange={this.handleChange("password")} />
          </label>
          <button type="button" onClick={this.handleSubmit}>
            {formType}
          </button>
        </form>

        {this.props.navLink}

        <ul>{errorList()}</ul>
      </div>
    );
  }
}

export default SessionForm;
