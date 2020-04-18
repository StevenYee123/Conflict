import React from "react";
import { NavLink, withRouter } from "react-router-dom";


class ServerIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: true
        }
    }

    render(){
        const {server, channels} = this.props;
        const initial = server.name.slice(0, 1);
        const path = this.props.location.pathname;
        const getNum = path.split("#")[0].split("/");
        let activeServerId;

        if(getNum.length === 3){
            activeServerId = parseInt(getNum[getNum.length - 1]);
        } else if (getNum.length > 3){
            activeServerId = parseInt(getNum[getNum.length - 3]);
        }

        let isActive = "";

        if (activeServerId === server.id) {
            isActive = "active-server";
        }

        return(
            <li >
                <button id={isActive} onClick={() => (
                    this.props.fetchChannels(this.props.server.id)
                    .then((resp) => 
                    this.props.history.push(`/servers/${this.props.server.id}/channel/${Object.keys(resp.channels)[0]}`)))} >{initial}</button>
            </li>
        )
    }
}

export default withRouter(ServerIndexItem);