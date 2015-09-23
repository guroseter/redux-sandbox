var React = require('react');
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import configureStore from './store/configureStore';

const store = configureStore();

React.render(
    <Provider store = {store}>
    {() => <App />}
    </Provider>,
    document.getElementById('app')
);

