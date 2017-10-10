import React from 'react';
import {connect} from "react-redux";
import {addCustomer, deleteCustomer, editCustomer, loadCustomers} from "../actions/index";
import CustomerTable from "../component/CustomerTable";
import {closeModal, openModal} from "../component/modal/actions";
import Modal from "../component/modal/Modal";
import AddCustomer from "../component/AddCustomer";
import ChangeCustomer from "../component/ChangeCustomer";
import DeleteCustomer from "../component/DeleteCustomer";

class CustomerList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        fetch('/api/customers', {method: 'GET'})
            .then(response => response.json())
            .then(customers => this.props.loadCustomers(customers))
            .catch(error => console.error('ERROR', error))
    }

    addCustomerModal() {
        const {addCustomer} = this.props;
        this.props.openModal('Add customer', <AddCustomer addCustomer={addCustomer}/>);
    }

    changeCustomerModal(i) {
        const {customers} = this.props;
        this.props.openModal('Change customer', <ChangeCustomer customer={customers[i]} editCustomer={this.props.editCustomer}/>)
    }

    deleteCustomerModal(i) {
        const {customers} = this.props;
        this.props.openModal('Delete Customer',
            <DeleteCustomer
                customer={customers[i]}
                deleteCustomer={this.props.deleteCustomer}
                closeModal={this.props.closeModal}
            />
        )
    }

    render() {
        return (
            <div>
                <h1>CustomerList</h1>
                <Modal />
                <button className={'btn btn-primary'} onClick={this.addCustomerModal.bind(this)}>Add new Customer</button>
                <CustomerTable
                    customers={this.props.customers}
                    changeCustomerModal={this.changeCustomerModal.bind(this)}
                    deleteCustomerModal={this.deleteCustomerModal.bind(this)}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        customers: state.customerReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadCustomers: (customers) => dispatch(loadCustomers(customers)),
        addCustomer: (id, name, address, phone, createdAt, updatedAt) => dispatch(addCustomer(id, name, address, phone, createdAt, updatedAt)),
        editCustomer: (id, name, address, phone, updatedAt) => dispatch(editCustomer(id, name, address, phone, updatedAt)),
        deleteCustomer: (id) => dispatch(deleteCustomer(id)),
        openModal: (title, content) => dispatch(openModal(title, content)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);