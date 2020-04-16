import React from "react";

class DirectMessageIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { message } = this.props;
        return(
            <div className="message-item-container">
                <div className="message-inner-container">
                    <div className="message-header">
                        <strong>{message.author}</strong>
                        <div className="message-details">
                            {message.created_at}
                        </div>
                    </div>
                    <div className="message-body">
                        <p>{message.body}</p>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default DirectMessageIndexItem;