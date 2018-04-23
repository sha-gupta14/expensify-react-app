import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRoute';
import configureStore from './store/configureStore';
import { startGetExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import Loading from './component/Loading';
import 'normalize.css/normalize.css';
import './style/style.css';

import { firebase, googleProvider } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRender = false;
const renderAPP = () => {
    if (!hasRender) {
        ReactDom.render(jsx, document.getElementById('app'));
        hasRender = true;
    }
}
ReactDom.render(<Loading />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startGetExpense()).then(() => {
            renderAPP();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderAPP();
        history.push('/');
    }
});
