var React = require('react');
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import UserPage from './containers/UserPage.jsx';

import configureStore from './store/configureStore';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

const history = createBrowserHistory();
const store = configureStore();

React.render(
    <Provider store = {store}>
        {() =>
            <Router history = {history}>
                <Route path="/" component={App}>
                    <Route path="/minside" component={UserPage} />
                </Route>
            </Router>
        }
    </Provider>,
    document.getElementById('app')
);

