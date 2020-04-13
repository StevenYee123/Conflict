import React from "react";

class EditServerForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id: this.props.currentServer.id,
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.keyPressed = this.keyPressed.bind(this);
    }

    // keyPressed(e){
    //     if (e.key === "Enter"){
    //         debugger;
    //     }
    // }

    /* onKeyPress={this.keyPressed} */

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value});
        }
    }

    handleClick(){
        this.props.updateServer(this.state);
    }
    
    render(){
        return(
            <div className="edit-server-content">
                <h1>Edit this Server?</h1>
                <i className="fas fa-pen-fancy" id="edit-server-icon"></i>
                <input type="text" className="edit-server-field" 
                    onChange={this.handleChange('name')} placeholder="Enter new Server Name!" maxLength="10"/>
                <button onClick={this.handleClick} className="edit-server-button">Edit</button>
            </div>
        )
    }
}

export default EditServerForm;