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
        const activeServerId = parseInt(path.slice(path.length - 2));
        let isActive = "";

        if (activeServerId === server.id) isActive = "active-server";

        return(
            <li id={isActive}>
                <NavLink
                    activeClassName={`selected-server`}
                    to={`/channels/${server.id}`}>
                    <strong>{initial}</strong>
                </NavLink>
            </li>
        )
    }
}

export default withRouter(ServerIndexItem);