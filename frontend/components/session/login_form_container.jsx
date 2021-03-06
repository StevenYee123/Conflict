import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, clearSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: "Login",
    navLink: "/signup",
    classNum: Math.floor(Math.random() * 6)
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    manualLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);