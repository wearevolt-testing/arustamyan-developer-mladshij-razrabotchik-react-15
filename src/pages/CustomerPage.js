import React from 'react';
import NavigationComponent from "../component/NavigationComponent";
import CustomerList from "../container/CustomerList";
import DocumentTitle from 'react-document-title'

let CustomerPage = () => {
    return (
        <div>
            <DocumentTitle title='Customers' />
            <NavigationComponent />
            <div className="container">
                <div className="row">
                    <CustomerList />
                </div>
            </div>
        </div>
    );
}

export default CustomerPage;