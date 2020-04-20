import React from "react";

class HomiesWelcome extends React.Component{
    constructor(props){
        super(props);
    }

    handleErrors(errors) {
        return errors.map((error) => {
            return <li key={Math.random()}>{error}</li>
        });
    }

    componentDidUpdate(){
        const { clearServerErrors, clearMessageErrors } = this.props;
        if (this.props.errors.length) {
            setTimeout(function () {
                clearServerErrors();
                clearMessageErrors();
            }, 3000);
        }
    }

    render(){
        const errorsList = this.handleErrors(this.props.errors);
        let errorsClass = "";

        if (errorsList.length >= 1) {
            errorsClass = "session-errors";
        }

        return(
            <div className="last-container">
                <div className="welcome-container">
                    <div className="channel-title-bar">
                        <ul className={errorsClass}>
                            <li>{errorsList}</li>
                        </ul>
                    </div>
                    <h1 className="homies-welcome-text">Welcome to {`  `}
                        <img src={window.conflictlogoURL} alt="conflict"/>
                    </h1>
                </div>
            </div>
        )
    }
}

export default HomiesWelcome;