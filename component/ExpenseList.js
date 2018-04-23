import React from 'react';
import { connect } from 'react-redux';
import ExpenseItemList from '../component/ExpenseItemList';
import SelectExpense from '../selectors/expenses';

const ExpenseList = (props) => (
    <div className="panel panel-default">
        <div className="panel-heading">
            <span>Expense</span>
            <span class="pull-right">Amount</span>
        </div>
        <div className="panel-body np">
            {props.expenses.map((expense) => {
                return <ExpenseItemList key={expense.id} {...expense} />
            })}
        </div>
    </div>
);

const MapStateToProps = (state) => {
    return {
        expenses: SelectExpense(state.expenses, state.filters),
    };
};

export default connect(MapStateToProps)(ExpenseList);
