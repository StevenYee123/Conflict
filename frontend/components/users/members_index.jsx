import React from "react";

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
        let users = Object.values(this.props.users);
        let userList;
        if (users.length > 0){
            userList = users.map((user) => {
                return <MemberIndexItem id={user.id} username={username} />
            });
        }
        return(
            <div>
                <h1>Members List</h1>
            </div>
        )
    }
}

export default MembersIndex;