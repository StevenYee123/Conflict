import React from "react";
import { Link } from "react-router-dom";

class ChannelIndex extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const {channels, currentUser, currentServer} = this.props;
        if (Object.values(channels)){

        }
        const channelVals = Object.values(this.props.channels);
        const channelLinks = channelVals.map((channel) => {
            
            return (
                <Link key={Math.random()} to={`/channels/${currentServer.id}/${channel.id}`}>
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