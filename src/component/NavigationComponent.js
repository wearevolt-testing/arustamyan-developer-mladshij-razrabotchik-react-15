import React from 'react';
import {Link} from "react-router-dom";

let NavigationComponent = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#">Invoice App</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to={'/'}>Products</Link></li>
                            <li><Link to={'/customers'}>Customers</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationComponent;