import React from 'react';
import { BrowserRouter as Router ,Switch, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CustomerPage from "./pages/CustomerPage";

export default (
    <Router>
        <Switch>
            <Route exact path="/" component={ProductPage} />
            <Route path="/customers" component={CustomerPage} />
        </Switch>
    </Router>
);