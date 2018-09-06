import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses';


const AddPage = (props) => (

    <div>
     <p>This is AddPage</p>
     <ExpenseForm 
        onSubmit ={(expense) => {
           props.dispatch(addExpense(expense)); 
           console.log(expense);
           props.history.push('/');         
        }}
     />
    
    </div>
);

export default connect()(AddPage)