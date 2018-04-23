import React from 'react';
import ExpenseList from '../component/ExpenseList';
import ExpenseFilterList from '../component/ExpenseFilterList';
import ExpensesSummary from '../component/ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div className="container">
        <ExpensesSummary />
        <ExpenseFilterList />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
