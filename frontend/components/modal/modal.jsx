import React from "react";
import { MODAL_ADD_SERVER, MODAL_CREATE_SERVER } from "../../actions/modal_actions";
import AddServerForm from "../server/add_server_form";

class Modal extends React.Component{
    constructor(props){
        super(props);
        debugger;
    }

    render(){
        let form;
        let {modal} = this.props;
        debugger;
        if(!modal){
            debugger;
            return null;
        }

        switch(modal.type){
            case MODAL_ADD_SERVER:
                form = <AddServerForm />    
                break;            
            case MODAL_CREATE_SERVER:
                form = <CreateServerContainer />
                break;
            default:
                return null;
        }

        return(
            <div className="modal-container" onClick={this.props.clearModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    {form}
                </div>
            </div>
        )
    }
}

export default Modal;