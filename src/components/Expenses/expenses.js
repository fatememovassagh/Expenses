import Card from "../UI/card";
import ExpensesFilter from "./expensesFilter";
import {useState} from "react";
import ExpenseList from "./expenseList";
import ExpenseChart from "./expenseChart";

const Expenses = (props) =>{
    const titleStyle = {
        padding: '5px',
        marginTop: '8px',
        fontWeight: 600,
        float:'left',
        width:'50%'
    };
    const [filteredYear , setFilteredYear] = useState('2023')

    const FilterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    }
    const FilteredExpenses = props.items.filter(e => {return e.date.getFullYear().toString() === filteredYear})

    // second way
    // let expenseContent = <p>No Expense found</p>
    // if (FilteredExpenses.length > 0){
    //     expenseContent  = FilteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}>
    //         </ExpenseItem>))}
    return <Card>
        <div style={titleStyle}>{filteredYear} monthly Bar Chart</div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={FilterChangeHandler}></ExpensesFilter>
        <ExpenseChart expenses={FilteredExpenses}></ExpenseChart>
        {/*First way*/}
        {/*{FilteredExpenses.length === 0 && <p>No Expense found</p>}*/}
        {/*{FilteredExpenses.length > 0 && FilteredExpenses.map((expense) => (*/}
        {/*    <ExpenseItem*/}
        {/*        key={expense.id}*/}
        {/*        title={expense.title}*/}
        {/*        amount={expense.amount}*/}
        {/*        date={expense.date}>*/}
        {/*    </ExpenseItem>))}*/}

        {/*second way*/}
        {/*{expenseContent}*/}

        {/*third way*/}
        <ExpenseList items={FilteredExpenses} />
    </Card>

}
export default Expenses;