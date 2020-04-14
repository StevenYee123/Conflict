import React from "react";
import MemberIndexItem from "./members_index_item";

class MembersIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentServerId: null
        }
    }

    componentDidUpdate(){
        const serverId = this.props.currentServer.id;
        if(serverId && this.state.currentServerId !== serverId){
            this.setState({currentServerId: serverId}, () => {
                this.props.fetchUsers();
            });
        }
    }

    render(){
        const {currentServer} = this.props;
        let users = Object.values(this.props.users);
        let userList;

        if (users.length > 0){
            userList = users.map((user) => {
            if(currentServer.id && currentServer.users.includes(user.id)){
                return <MemberIndexItem id={user.id} username={user.username} key={Math.random()}/>
            }
            });
        }
        return(
            <div className="members-container">
                <h1>Members</h1>
                <ul>
                    {userList}
                </ul>
            </div>
        )
    }
}

export default MembersIndex;