import React from 'react';
import './Modal.css';
import {connect} from "react-redux";
import {closeModal} from "./actions";

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    closeOpen() {
        this.props.closeModal();
    }


    render() {
        if (!this.props.modal.isOpen) return null;
        return (
            <div className="modal fade in">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title">{this.props.modal.title}</h4>
                        </div>
                        <div className="modal-body">
                            {this.props.modal.content}
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.closeOpen.bind(this)} className="btn btn-secondary">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modalReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);