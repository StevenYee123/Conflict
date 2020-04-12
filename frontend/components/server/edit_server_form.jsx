import React from "react";

class EditServerForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value});
        }
    }

    handleClick(){
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Hello from Edit!</h1>
                <input type="text" onClick={this.handleChange('name')} placeholder="Enter new Server Name!"/>
                <button onClick={this.handleClick}>Edit</button>
            </div>
        )
    }
}

export default EditServerForm;