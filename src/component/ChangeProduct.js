import React from 'react';
import DocumentTitle from 'react-document-title'

class ChangeProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: ''
        }
    }

    onNameChange(e) {
        const {target: {value: name}} = e;
        this.setState({name})
    }

    onPriceChange(e) {
        const {target: {value: price}} = e;
        this.setState({price: price})
    }

    handleSubmit(e) {
        e.preventDefault();
        const {name, price} = this.state;
        const {id, name: prName, price: prPrice} = this.props.product;

        fetch(
            `/api/products/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name || prName, price: price || prPrice, updatedAt: new Date()})
            }
        ).then(res => res.json()).then(res => {
            if (res) {
                const {id, name, price, updatedAt} = res;
                this.props.editProduct(id, name, price, updatedAt)
            }
        });
    }

    render() {
        const {name, price} = this.props.product;
        return (
            <div>
                <DocumentTitle title={`Change product ${name}`} />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <p>Current Name value: {name}</p>
                        <input type="text" className="form-control" placeholder="Name"
                               onChange={this.onNameChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Current Price value: {price}</p>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Price"
                               onChange={this.onPriceChange.bind(this)}
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

export default ChangeProduct;