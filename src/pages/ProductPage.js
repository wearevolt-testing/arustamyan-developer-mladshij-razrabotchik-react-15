import React from 'react';
import NavigationComponent from "../component/NavigationComponent";
import ProductList from "../container/ProductList";
import DocumentTitle from 'react-document-title'

let ProductPage = () => {
    return (
        <div>
            <DocumentTitle title='Products' />
            <NavigationComponent />
            <div className="container">
                <div className="row">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default ProductPage;