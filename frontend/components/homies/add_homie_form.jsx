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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Enter the homie ID to slide into those DMs</h1>
                    <input type="text" placeholder="#Enter the Homie Id!" onChange={this.handleChange('id')}/>
                    <input type="submit" value="Slide"/>
                </form>
            </div>
        )
    }
}

export default withRouter(AddHomieForm);