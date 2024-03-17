import React from 'react';

import './expensesFilter.css';

const ExpensesFilter = (props) => {
    const ChangeYearHandler= (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className='expenses-filter'>
                <select onChange={ChangeYearHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
        </div>
    );
};

export default ExpensesFilter;