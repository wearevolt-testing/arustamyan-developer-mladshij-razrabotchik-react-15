import React from 'react';
import DocumentTitle from 'react-document-title'

class AddProduct extends React.Component {
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
        this.setState({price})
    }

    handleSubmit(e) {
        e.preventDefault();
        const {name, price} = this.state;

        fetch('/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, price})
        }).then(res => res.json()).then(res => {
            if (res) {
                const {id, name, price, createdAt, updatedAt} = res;
                this.props.addProduct(id, name, price, createdAt, updatedAt)
            }
        });
    }

    render() {
        return (
            <div>
                <DocumentTitle title='Add new Product' />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name"
                               onChange={this.onNameChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Price"
                               onChange={this.onPriceChange.bind(this)}
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

export default AddProduct;