import React from "react";
import { withRouter } from "react-router-dom";

class DeleteServerForm extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const {deleteServer, currentServer, servers} = this.props;
        const serverIds = Object.keys(servers);
        let selectedId = parseInt(serverIds[0]);

        if (currentServer.id === selectedId){
            selectedId = parseInt(serverIds[1]);
        }

        if(serverIds.length > 1){
            deleteServer(currentServer.id).then(() => 
            this.props.history.push(`/servers/@me`));
        }
    }

    render(){
        const {currentServer} = this.props;
        return(
            <div className="delete-server-content">
                <h1>Delete Server</h1>
                <i className="fas fa-trash-alt" id="delete-server-icon"></i>
                <strong>Delete {currentServer.name}? This is irreversable! :(</strong>
                <button onClick={this.handleClick} className="delete-server-button">Delete</button>
            </div>
        )
    }
}

export default withRouter(DeleteServerForm);