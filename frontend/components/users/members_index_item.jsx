import React from "react";

class MemberIndexItem extends React.Component{
    render(){
        const {id, username} = this.props;
        const initial = username[0];
        return(
            <li>
                <div className="member-item">
                    <span className="user-logo">{initial.toUpperCase()}</span>
                    <strong>{`${username}#${id}`}</strong>
                </div>
            </li>
           
        )
    }
}

export default MemberIndexItem;