import React from "react";
import { MODAL_ADD_SERVER, MODAL_CREATE_SERVER, MODAL_CLEAR } from "../../actions/modal_actions";
class Modal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let form;
        let {modal} = this.props;

        switch(modal.type){
            case MODAL_ADD_SERVER:
                form = <AddServerForm />    
                break;            
            case MODAL_CREATE_SERVER:
                form = <CreateServerContainer />
                break;
            default:
                null;
                break;
        }

        return(
            <div className="modal-container" onClick={this.props.clearModal()}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    {form}
                </div>
            </div>
        )
    }
}

export default Modal;