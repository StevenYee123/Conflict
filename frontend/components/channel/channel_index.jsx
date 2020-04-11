import React from "react";
import { Link } from "react-router-dom";

class ChannelIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchChannels(this.props.currentServer.id);
    }

    render(){
        const {channels, currentUser, currentServer} = this.props;
        const channelVals = Object.values(this.props.channels);
        const channelLinks = channelVals.map((channel) => (
            <Link key={Math.random()} to={`/channels/${currentServer.id}/${channel.id}`}>
                <strong id="pound-sign">#</strong>  
            {channel.name}</Link>
        ))

        return(
            <>
                {channelLinks}
            </>
        )
    }
}

export default ChannelIndex;