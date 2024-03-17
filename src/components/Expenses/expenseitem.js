import React from "react";
import './expenseItem.css'
import ExpenseItemDate from './expenseItemDate';

function ExpenseItem(props){
    // const [title , setTitle] = useState(props.title)
    // const clickHandler = () =>{
    //     setTitle('updated')
    //     console.log(title)
    // }
    return(
        <li>
            <div className="expense-item">
                <ExpenseItemDate date={props.date}></ExpenseItemDate>
                <div className="expense-item__description">
                    <h2>
                        {/*{title}*/}
                        {props.title}
                    </h2>
                    <div className="expense-item__price">
                        $ {props.amount}
                    </div>
                </div>
                {/*<button onClick={clickHandler}> press me hard!</button>*/}
            </div>
        </li>
    );
};

export default ExpenseItem;