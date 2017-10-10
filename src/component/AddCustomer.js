import React from 'react';
import DocumentTitle from 'react-document-title'

class AddCustomer extends React.Component {
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

        fetch('/api/customers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, phone, address})
        }).then(res => res.json()).then(res => {
            if (res) {
                const {id, name, address, phone, createdAt, updatedAt} = res;
                this.props.addCustomer(id, name, address, phone, createdAt, updatedAt)
            }
        });
    }

    render() {
        return (
            <div>
                <DocumentTitle title='Add Customer' />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name"
                               onChange={this.onNameChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Address"
                               onChange={this.onAddressChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone"
                               onChange={this.onPhoneChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Добавить" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddCustomer;