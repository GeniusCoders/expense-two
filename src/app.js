import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpense from './selectors/expenses'

const store = configureStore();


store.dispatch(addExpense({description : 'chai bill',amount : 20,note:'chai k'}))
store.dispatch(addExpense({description : 'coffee bill', createdAT : 1000}))
store.dispatch(addExpense({description : 'Rent bill',amount : 120}))

store.dispatch(setTextFilter('bill'))

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses,state.filters)
console.log(visibleExpense);


const jsx = (
   
    <Provider store={store}>
     <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx,document.getElementById('con'));
