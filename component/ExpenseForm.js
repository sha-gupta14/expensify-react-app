import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class EditExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange(e) {
        const description = e.target.value.trim();
        this.setState({ description });
    }
    onAmountChange(e) {
        const amount = e.target.value.trim();
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount });
        }
    }
    onNoteChange(e) {
        const note = e.target.value.trim();
        this.setState({ note });
    }
    onDateChange(createdAt) {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange({ focused }) {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmitForm(e) {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please fill description & amount.' }));
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmitForm({
               description: this.state.description,
               amount: this.state.amount,
               createdAt: this.state.createdAt.valueOf(),
               note: this.state.note 
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitForm}>
                    <input
                        type="text"
                        value={this.state.description}
                        placeholder="Description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        value={this.state.amount}
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        value={this.state.note}
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add</button>
                </form>
            </div>
        )
    }
};