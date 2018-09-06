import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = (props) => (

   <div>
    {
        props.expenses.map((expense) =>(
            <div key={expense.id}> 
             <Link to={`/edit/${expense.id}`}>
             <h3>{expense.description}</h3>
             </Link>
             <p>{expense.amount} - {expense.createdAT}</p>
            </div>
        ))
    }
   </div>

);


export default ExpenseListItem