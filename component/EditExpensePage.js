import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../component/ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmitForm={(expense) => {
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push('/');
        }} />
        <button type="button" 
            onClick={() => {
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
        }}>Remove</button>
    </div>
);

const MapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            if (expense.id === props.match.params.id){
                return true;
            }
        })
    }
};
export default connect(MapStateToProps)(EditExpensePage);