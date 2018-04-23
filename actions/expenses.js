import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expense) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
          dispatch(addExpense({
            id: ref.key,
            ...expense
          }));
        });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
              dispatch(removeExpense({ id }));
        });
    };
};

export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

export const startEditExpense = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(update).then(() => {
                dispatch(editExpense(id, update));
            });
        };
};

export const getExpense = (expense) => ({
    type : 'GET_EXPENSE',
    expense
});

export const startGetExpense = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
          const expenseData = [];
          snapshot.forEach((childSnapshot) => {
              expenseData.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
              });
          });
          dispatch(getExpense(expenseData));
      });
    };
};
