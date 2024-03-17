import Expenses from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpense/newExpense";
import {useState} from "react";
const DUMMY_EXPENSES = [
    {id: '1', title: "LivingCost" , amount :23.33 , date: new Date(2022, 2, 23)},
    {id: '2', title: "CarInsurance" , amount : 89 , date: new Date(2022, 3, 1)},
    {id: '3', title: "Rent" , amount : 78 , date: new Date(2022, 9, 3)},
    {id: '4', title:"A Toothpaste", amount: 12.22, date: new Date(2023, 2, 3)},
    {id: '5', title:"A Book", amount:14.3, date: new Date(2023, 7, 20)},
    {id: '6', title:"A Cup", amount:9.4, date: new Date(2021, 10, 16)},
    {id: '7', title:"LifeInsurance", amount:23.3, date: new Date(2023, 9, 21)},
    {id: '8', title:"Furniture", amount:57.4, date: new Date(2022, 7, 16)},
    {id: '9', title:"School snack", amount: 121, date: new Date(2023, 8, 30)},
    {id: '10', title:"Board Game", amount:65.2, date: new Date(2021, 11, 12)}
]
function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    const NewExpenseDataHandler = (expense) => {
        // first way
        // setExpenses([expense, ...expenses])
        // second way : better
        setExpenses((prevState)=>{return [expense, ...prevState]})
    }
  return (
      <div>
          <NewExpense onNewExpenseData={NewExpenseDataHandler}></NewExpense>
          <Expenses items={expenses}></Expenses>
      </div>
  );
}

export default App;
