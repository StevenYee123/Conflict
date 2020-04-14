import React from "react";

class MemberIndexItem extends React.Component{
    render(){
        const {id, username} = this.props;
        const initial = username[0];
        return(
            <li>
                <div className="member-item">
                    <span>{initial.toUpperCase()}</span>
                    <strong>{username}</strong>
                </div>
            </li>
           
        )
    }
}

export default MemberIndexItem;