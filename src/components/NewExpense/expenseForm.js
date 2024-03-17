import './expenseForm.css'
import {useState} from "react";

const ExpenseForm= (props)=>{
    // First way
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // Second and Third way: merge all setStates in one
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount: 'kkk',
    //     enteredDate : ''
    // })
    const EnteredTitleHandler = (event) =>{
        // First way
        setEnteredTitle(event.target.value);

        // Second way: !important: set all previous inputs(userInput {enteredTitle, enteredAmount,  enteredDate}) to prevent clearing other inputs while setting enteredTitle
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // Third way: if you want to use merging, it is a better way. getting a snapshot of values and React guaranties to return prevState correctly
        // setUserInput((prevState) => {
        //     return {...prevState , enteredTitle: event.target.value};
        // });

    }
        const EnteredAmountHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }
        const EnteredDateHandler = (event) =>{
        setEnteredDate(event.target.value)
    }

    const FormSubmitHandler = (event) => {
        event.preventDefault();
        const enteredExpenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(enteredExpenseData)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return <form onSubmit={FormSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>
                    Title
                </label>
                {/*setting value={enteredTitle} make it two way binding. when enteredTitle changes*/}
                <input type='text' value={enteredTitle} onChange={EnteredTitleHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>
                    Amount
                </label>
                <input type='number' value={enteredAmount} onChange={EnteredAmountHandler} min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>
                    Date
                </label>
                <input type='date' value={enteredDate} onChange={EnteredDateHandler} min='2018-01-01' max='2024-01-01'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Submit</button>
        </div>
    </form>

}

export default ExpenseForm;