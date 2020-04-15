import React from "react";
import { withRouter } from "react-router-dom";

class HomiesIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allClass: 'friend-all active-all',
            addClass: 'friend-add',
            addFriend: false,
            friendName: ''
        };
        this.activeAdd = this.activeAdd.bind(this);
        
    }

    createDirectMessage(homieId){
        return e => {
            this.props.createDirectMessage(homieId)
                .then((server) => this.props.history.push(`/servers/@me/${server.channelId}`));
        };
    }

    activeAdd(e){
        e.preventDefault();
        this.setState();
    }

    componentDidMount(){
        this.props.fetchHomies();
    }

    render(){
        let homies = null;
        const {users} = this.props;
        if(Object.values(users).length && this.props.homies.length){
            homies = this.props.homies.map((homieId) => (
                <HomieIndexItem 
                    removeHomie={this.removeHomie(homieId)}
                    key={homieId} 
                    homieId={homieId}
                    user={this.props.users[homieId]}
                    createDirectMessage={this.createDirectMessage(homieId)} />
            ));
        }

        return(
            <div>
                <h1>Hey hey hey from Homies Index!!</h1>
            </div>
        )
    }
}

export default withRouter(HomiesIndex);