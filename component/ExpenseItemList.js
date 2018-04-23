import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseItemList = ({dispatch , id, description, amount, createdAt}) => (
    <div class="expense_list">
        <span>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <div>{moment(createdAt).format('MMM Do, YYYY')}</div>
        </span>
        <span class="pull-right">
            {numeral(amount).format('0,0.00')}
        </span>
    </div>
);

export default (ExpenseItemList);
