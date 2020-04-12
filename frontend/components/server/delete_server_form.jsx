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
            this.props.history.push(`/channels`));
        }
    }

    render(){
        return(
            <div>
                <h1>Delete Server</h1>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}

export default withRouter(DeleteServerForm);