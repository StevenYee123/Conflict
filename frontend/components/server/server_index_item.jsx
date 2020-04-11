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
        const {server} = this.props;
        const initial = server.name.slice(0, 1);
        const path = this.props.location.pathname;
        const getNum = path.split("#")[0].split("/");
        let activeServerId;

        if(getNum.length === 3){
            activeServerId = parseInt(getNum[getNum.length - 1]);
        } else if (getNum.length > 3){
            activeServerId = parseInt(getNum[getNum.length - 2]);
        }

        let isActive = "";

        if (activeServerId === server.id) {
            isActive = "active-server";
        }

        return(
            <li id={isActive}>
                <strong onClick={() => (
                    this.props.fetchChannels(this.props.server.id)
                        .then(this.props.history.push(`/channels/${this.props.server.id}`))
                )} >{initial}</strong>
            </li>
        )
    }
}

export default withRouter(ServerIndexItem);