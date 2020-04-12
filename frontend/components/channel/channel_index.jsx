import React from "react";
import { Link } from "react-router-dom";

class ChannelIndex extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const {channels, currentUser, currentServer, path} = this.props;
        const splitPath = path.split("/");
        const currentChannelId = splitPath[splitPath.length - 1];
        const channelVals = Object.values(this.props.channels);
        const channelLinks = channelVals.map((channel) => {
            let isActive = "";
            if (channel.id === parseInt(currentChannelId)){
                isActive = "active-channel"
            }

            return (
                <Link key={Math.random()} to={`/channels/${currentServer.id}/${channel.id}`} 
                className={isActive} id="activate-channel">
                    <strong id="pound-sign">#</strong>  
                {channel.name}</Link>
            )
        });

        return(
            <>
                {channelLinks}
            </>
        )
    }
}

export default ChannelIndex;