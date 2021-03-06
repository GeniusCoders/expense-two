import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense,removeExpense} from '../actions/expenses'

const EditPage = (props) => {

  return(

   <div>
    <ExpenseForm 
     expense={props.expense}
     onSubmit={(expense) => {
       props.dispatch(editExpense(expense.id,expense))
       props.history.push('/')
       console.log(expense);
       
     }}
    />
    <button onClick={() => {
      props.dispatch(removeExpense(props.expense.id))
      props.history.push('/')
     }}>
     Remove</button>
   </div>

  );

}

const mapStateToProps = (state,props) => {
  return{
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditPage)