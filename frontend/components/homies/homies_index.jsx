import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import Modal from "react-modal";
import AddHomieForm from "./add_homie_form";

class HomiesIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hideOptions: "",
            path: null
        }
        
        this.getLogout = this.getLogout.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.addHomieOption = this.addHomieOption.bind(this);
    }

    componentDidUpdate(){
        if(this.state.path !== this.props.match.path){
            this.setState({path: this.props.match.path}, () => {
                this.props.fetchServers();
            })
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchDirectMessages();
    }

    closeModal(form) {
        return e => {
            e.stopPropagation();
            this.props.removeModal(form);
        }
    }

    addHomieOption() {
        return (
            <button className="channel-options-button" onClick={() =>
                this.props.receiveModal('addHomieModal')}>
                Invite some Homies!
                <i className="fas fa-user-friends" id="friends-icon-button"></i>
            </button>
        )
    }

    createDirectMessage(homieId){
        return e => {
            this.props.createDirectMessage(homieId)
                .then((server) => this.props.history.push(`/servers/@me/${server.channelId}`));
        };
    }

    handleChange(field){
        return e => {
            e.preventDefault();
            this.setState({[field]: e.target.value});
        }
    }

    showOptions() {
        if (this.state.hideOptions === "show") {
            this.setState({ hideOptions: "" });
        } else {
            this.setState({ hideOptions: "show" });
        }
    }

    getLogout(currentUser, logout){
        if(currentUser){
            return (
            <div className="logout-section">
                <span className="user-initial">{currentUser.username.slice(0, 1).toUpperCase()}</span>
                <strong>{`${currentUser.username}#${currentUser.id}`}</strong>
                <button onClick={logout}>Logout</button>
            </div>
            )
        }
    }

    render(){
        let homies = null;
        const {currentUser, servers, logout, createDirectMessage} = this.props;
        const logoutSection = this.getLogout(currentUser, logout);
        if(Object.values(servers).length){
            homies = Object.values(servers).map(server => {
                let displayName;
                const names = server.name.split("/");
                currentUser.username === names[0] ? displayName = names[1] : displayName = names[0];
                if(server.private_status && server.users.includes(currentUser.id)){
                    return (
                        <div id="activate-channel" key={server.id}>
                            <NavLink className='direct-message-item' to={`/servers/@me/${server.id}/${server.channels[0]}`}>
                                <p><strong id="pound-sign">#</strong>{displayName}</p>
                            </NavLink>
                        </div>
                    )
                }
            });
        }

        let homieOptions =  (               
                    <>
                        <button className="options-dropdown-button" onClick={this.showOptions}>
                            <i className="fas fa-chevron-circle-down" id="dropdown-icon"></i>
                            <div id="leader-options-preview">
                                <span>
                                    Homie Options! :o
                                </span>
                            </div>
                        </button>
                        <div className={`channel-header-options ${this.state.hideOptions}`} id={this.state.hideOptions}>
                            <ul onClick={this.showOptions}>
                                {this.addHomieOption()}
                            </ul>
                        </div>
                    </>
        )

        return(
            <div className="second-nav">
                <div className="channel-header">
                    <strong>Hey there, {currentUser.username}</strong>
                    {homieOptions}
                </div>
                <div className="channels-container">
                    <strong>Your Homies List!</strong>
                    {homies}
                </div>
                <div className="logout-section">
                    {logoutSection}
                </div>

                <Modal className="channel-options-modal" isOpen={this.props.addHomieModal} ariaHideApp={false}
                    style={{ overlay: { backgroundColor: 'rgba(0,0,0,.5)', zIndex: '999' } }}>
                    <button onClick={() => this.props.removeModal('addHomieModal')} className="channel-close-button">
                        X
                    </button>
                    <AddHomieForm createDirectMessage={createDirectMessage}/>
                </Modal>
            </div>
        )
    }
}

export default withRouter(HomiesIndex);