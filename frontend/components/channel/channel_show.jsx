import React from "react";

class ChannelShow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="last-container">
                <h1>{this.props.currentChannel.name}</h1>
            </div>
        )
    }
}

export default ChannelShow;