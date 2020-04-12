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
            <div>
                <h1>Hello from Edit!</h1>
                <input type="text" onChange={this.handleChange('name')} 
                placeholder="Enter new Server Name!"/>
                <button onClick={this.handleClick}>Edit</button>
            </div>
        )
    }
}

export default EditServerForm;