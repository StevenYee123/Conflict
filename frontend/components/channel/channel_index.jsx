import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import EditChannelForm from "./edit_channel_form";
import DeleteChannelForm from "./delete_channel_form";

class ChannelIndex extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
            const {channelIds, currentUser, currentServer, 
                currentChannel, updateChannel, deleteChannel, path} = this.props;
            const splitPath = path.split("/");
            const currentChannelId = splitPath[splitPath.length - 1];
            const channelVals = Object.values(this.props.channels);
            const channelLinks = channelVals.map((channel) => {
            let isActive = "";
            if (channel.id === parseInt(currentChannelId)){
                isActive = "active-channel"
            }
            return (
                <div id="activate-channel" className={isActive} key={Math.random()}>
                    <button id="channel-option-icon" onClick={() => this.props.receiveModal('editChannelModal')}>
                        <i className="fas fa-cog"></i>
                    </button>
                    <Link to={`/channels/${currentServer.id}/${channel.id}`} >
                        <strong id="pound-sign">#</strong>  
                        {channel.name}
                    </Link>
                </div>
            )
        });

        return(
            <>
                {channelLinks}
                <Modal className="channel-modal" isOpen={this.props.editChannelModal} ariaHideApp={false}
                    style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)', zIndex: '999' } }}>
                    <button onClick={() => this.props.removeModal('editChannelModal')} className="channel-close-button">
                        X
                    </button>
                    <EditChannelForm currentChannel={currentChannel} updateChannel={updateChannel}/>
                    <DeleteChannelForm currentChannel={currentChannel} deleteChannel={deleteChannel} 
                        path={path} channelIds={channelIds} currentServer={currentServer}/>
                </Modal>
            </>
        )
    }
}

export default ChannelIndex;