import './expenseItemDate.css'

function ExpenseItemDate(props){

    const month =  props.date.toLocaleString("de-DE", {month: "long"});
    const day =  props.date.toLocaleString("de-DE", {day:"2-digit"});
    const year = props.date.getFullYear()
    return(
        <div className="date_container">
        <div>{month}</div>
        <div>{year}</div>
        <div className="day">{day}</div>
        </div>
    )
};

export default ExpenseItemDate;