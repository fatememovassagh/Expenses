import './newExpense.css'
import ExpenseForm from "./expenseForm";

const NewExpense = (props) =>{
    const SaveExpenseDataHandler =(enteredExpenseData)=>{

        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        console.log(expenseData)
        props.onNewExpenseData(expenseData)
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
}

export default NewExpense;