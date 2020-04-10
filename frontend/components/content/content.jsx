import React from "react";
import { Switch, withRouter } from "react-router-dom";

class Content extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { serverId } = this.props.match.params;
        if (serverId !== '@me') {
            this.props.fetchServer(serverId);
        }
  }

    render(){
        return(
            <div className="placeholder!">
                <h1>placeholder</h1>
            </div>
        )
    }
}

export default withRouter(Content);