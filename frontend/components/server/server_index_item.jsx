import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

class ServerIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {server} = this.props;
        const initial = server.name.slice(0, 1);
        return(
            <li>
                <strong>{initial}</strong>
            </li>
        )
    }
}

export default withRouter(ServerIndexItem);