import React from 'react';
import DocumentTitle from 'react-document-title'

class ChangeCustomer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            address: ''
        }
    }

    onNameChange(e) {
        const {target: {value: name}} = e;
        this.setState({name})
    }

    onPhoneChange(e) {
        const {target: {value: phone}} = e;
        this.setState({phone})
    }

    onAddressChange(e) {
        const {target: {value: address}} = e;
        this.setState({address})
    }

    handleSubmit(e) {
        e.preventDefault();
        const {name, phone, address} = this.state;
        const {customer} = this.props;
        const {id, name: cName, phone: cPhone, address: cAddress} = customer;

        fetch(
            `/api/customers/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        name: name || cName,
                        phone: phone || cPhone,
                        address: address || cAddress,
                        updatedAt: new Date()
                    }
                )
            }
        ).then(res => res.json()).then(res => {
            if (res) {
                const {id, name, address, phone, updatedAt} = res;
                this.props.editCustomer(id, name, address, phone, updatedAt)
            }
        });
    }

    render() {
        const {customer} = this.props;
        const {name, phone, address} = customer;
        return (
            <div>
                <DocumentTitle title={`Change customer ${name}`} />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <p>Current Name value: {name}</p>
                        <input type="text" className="form-control" placeholder="Name"
                               onChange={this.onNameChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Current Address value: {address}</p>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Address"
                               onChange={this.onAddressChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Current Phone value: {phone}</p>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone"
                               onChange={this.onPhoneChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Изменить" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        );
    }

}

export default ChangeCustomer;