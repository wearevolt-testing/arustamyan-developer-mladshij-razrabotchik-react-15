import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux'
import {Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import {createBrowserHistory} from 'history'

import configureStore from "./store/store";
import routes from "./routes";
import 'react-select/dist/react-select.css';

const store = configureStore;

const history = syncHistoryWithStore(createBrowserHistory(), store);

render(<div>
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    </div>,
    document.getElementById('app-root')
);
