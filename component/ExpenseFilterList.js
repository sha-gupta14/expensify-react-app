import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseFilterList extends React.Component {
    constructor(props) {
        super(props);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.state = {
            calendarFocused: null
        };
    }
    onDatesChange({ startDate, endDate }) {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange(calendarFocused) {
        this.setState(() => ({ calendarFocused }));
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />
                <select onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount());
                    }
                    props.dispatch();
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}
const MapStateToProps = (state) => {
    return {
        filter: state.filters
    };
};

export default connect(MapStateToProps)(ExpenseFilterList);