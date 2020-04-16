import React from "react";
import { withRouter } from "react-router-dom";

class AddHomieForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const { createDirectMessage } = this.props;
        createDirectMessage(this.state.id).then((res) => {
            this.props.history.push(`/servers/@me/${res.id}/${res.channelId}`);
        })
    }

    render(){
        return(
            <div className="homie-modal-container">
                <div className="homie-dm-text-container">
                    <h1>Trying to slide into some DM's eh?</h1>
                    <i className="fas fa-home" id="homie-home-icon"></i>
                    <h1>Add a homie via homie #id!</h1>
                    <h1>ExampleName#24 <i className="fas fa-arrow-left"></i></h1>
                    <i className="fas fa-hand-point-down" id="point-icon"></i>
                </div>
                <form onSubmit={this.handleSubmit} className="homie-add-form">
                    <input type="text" placeholder="#Enter the Homie Id!" className="homie-add-field"
                    onChange={this.handleChange('id')}/>
                    <input type="submit" value="Slide" className="homie-add-button" />
                </form>
            </div>
        )
    }
}

export default withRouter(AddHomieForm);