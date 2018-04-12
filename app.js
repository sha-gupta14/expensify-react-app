//babel-core: allow babel to run with webpack
//babel-loader: teach babel how to run webpack
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRoute';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
var one = store.dispatch(addExpense({description: 'Coffee', amount: 500, createdAt: 200}));

 store.dispatch(editExpense(one.expense.id, {amount: 50}));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(state);

/*store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});*/
// store.dispatch(setStartDate(125)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(1250)); // endDate 1250

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDom.render(jsx, document.getElementById('app'));
