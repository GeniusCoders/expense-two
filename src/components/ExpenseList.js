import React from 'react'
import ExpenseListItem from './ExpenseListItem'
import { connect } from 'react-redux'
import selecteExpense from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
      <h2>Expense List</h2>
      <ExpenseListItem expenses={props.expenses} />
    </div>
)

const mapStateToProps = (state) => {

    return{
      expenses : selecteExpense(state.expenses,state.filters)
    }

}

export default connect(mapStateToProps)(ExpenseList);