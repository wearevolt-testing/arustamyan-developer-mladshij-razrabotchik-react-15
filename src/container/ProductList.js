import React from 'react';
import {connect} from "react-redux";
import {addProduct, deleteProduct, editProduct, loadProducts} from "../actions/index";
import ProductTable from "../component/ProductTable";
import {closeModal, openModal} from "../component/modal/actions";
import Modal from "../component/modal/Modal";
import AddProduct from "../component/AddProduct";

import ChangeProduct from "../component/ChangeProduct";
import DeleteProduct from "../component/DeleteProduct";

class ProductList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        fetch('/api/products', {method: 'GET'})
            .then(response => response.json())
            .then(products => this.props.loadProducts(products))
            .catch(error => console.error('ERROR', error))
    }

    // load() {
    //     fetch('/api/products', {method: 'GET'})
    //         .then(response => response.json())
    //         .then(products => this.props.loadProducts(products))
    //         .catch(error => console.error('ERROR', error))
    // }

    addProductModal() {
        const {addProduct} = this.props;
        this.props.openModal('Add Product',
            <AddProduct
                addProduct={addProduct}
            />
        );
    }

    changeProductModal(i) {
        const {products} = this.props;
        this.props.openModal('Change Product',
            <ChangeProduct
                product={products[i]}
                editProduct={this.props.editProduct}
            />
        )
    }

    deleteProductModal(i) {
        const {products} = this.props;
        this.props.openModal('Change Product',
            <DeleteProduct
                product={products[i]}
                deleteProduct={this.props.deleteProduct}
                closeModal={this.props.closeModal}
            />
        )
    }

    render() {
        return (
            <div>
                <h1>ProductList</h1>
                <Modal />
                <button className={'btn btn-primary'} onClick={this.addProductModal.bind(this)}>Add new Product</button>
                <ProductTable
                    products={this.props.products}
                    changeProductModal={this.changeProductModal.bind(this)}
                    deleteProductModal={this.deleteProductModal.bind(this)}
                />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        products: state.productReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: (products) => dispatch(loadProducts(products)),
        addProduct: (id, name, price, createdAt, updatedAt) => dispatch(addProduct(id, name, price, createdAt, updatedAt)),
        editProduct: (id, name, price, updatedAt) => dispatch(editProduct(id, name, price, updatedAt)),
        deleteProduct: id => dispatch(deleteProduct(id)),
        openModal: (title, content) => dispatch(openModal(title, content)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);