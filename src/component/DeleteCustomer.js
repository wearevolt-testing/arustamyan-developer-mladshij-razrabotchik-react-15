import React from 'react';
import DocumentTitle from 'react-document-title'

class DeleteCustomer extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteCustomer() {
        const {customer, deleteCustomer, closeModal} = this.props;
        const {id} = customer;

        fetch(`api/customers/${id}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(res => {
                if (res)
                {
                    deleteCustomer(id)
                }
                closeModal()
            });
    }

    cancel() {
        this.props.closeModal();
    }

    render() {
        const {customer} = this.props;
        return (
            <div>
                <DocumentTitle title={`Delete customer ${customer.name}`} />
                <div style={{textAlign: 'center'}}>
                    <h3>Вы действительно хотите удалить данного клиента ({customer.name})?</h3>
                    <button
                        className={'btn btn-success'}
                        style={{marginRight: '10px'}}
                        onClick={this.deleteCustomer.bind(this)}
                    >
                        Да
                    </button>
                    <button className={'btn btn-primary'} onClick={this.cancel.bind(this)}>Нет</button>
                </div>
            </div>
        );
    }

}

export default DeleteCustomer;