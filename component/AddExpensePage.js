import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../component/ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <ExpenseForm onSubmitForm={(expense) => {
            props.startAddExpense(expense);
            props.history.push('/');
        }} />
    </div>
);

const MapDispatchToProps = (dispatch) => ({
  //Shorthand function
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});
export default connect(undefined, MapDispatchToProps)(AddExpensePage);
