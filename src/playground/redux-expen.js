import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

const addExpense = (
    {
        description = '',
        note = '',
        amount = 1,
        createdAT = 0
    }
     = {}) => ({
        
      type : 'ADD_EXPENSE', 
      expense :  {
          
          id : uuid(),
          description,
          note,
          amount,
          createdAT
      } 
})

const removeExpense = ({id}) => ({

      type : 'REMOVE_EXPENSE',
      id
});

const editExpense = (id,updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})


// Filters Actions Functions
const setTextFilter = ((text) => ({
    type : 'TEXT_FILTER',
    text
}))

const sortByAmount = () => ({
    type : 'SORT_AMOUNT'
})

const sortByDate = () => ({
    type : 'SORT_DATE'
})

const setStartDate = (startDate = undefined) => ({
    type : 'START_DATE',
    startDate 
})

const setEndDate = (endDate = undefined) => ({
    type : 'END_DATE',
    endDate
})

const expenseReducerDeafultState = [];

const expenseReducer = (state = expenseReducerDeafultState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE' :
        return [
             ...state,
             action.expense 
        ]
        
        case 'REMOVE_EXPENSE' : 
        return state.filter(({id}) => {
              return id !== action.id;
        })

        case 'EDIT_EXPENSE' :
        return state.map((expense) => {
             if(expense.id === action.id){
                 return{
                     ...expense,
                     ...action.updates
                 }
             } else {
                 return expense;
             }
        })

        default : 
        return state
    }
}

const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}

const filtersReducer = (state = filtersReducerDefaultState , action) => {
    switch(action.type){
        
        case 'TEXT_FILTER' :
        return {
            ...state,
            text : action.text
        }  

        case 'SORT_AMOUNT' :
        return {
            ...state,
            sortBy : 'amount'
        }

        case 'SORT_DATE' :
        return {
            ...state,
            sortBy : 'date'
        }

        case 'START_DATE' :
        return {
            ...state,
            startDate : action.startDate
        }

        case 'END_DATE' :
        return {
            ...state,
            endDate : action.endDate
        }

        default : 
        return state
    }
}

// Get Visible
const getVisibleExpense = (expense,{text , sortBy, startDate, endDate}) => {
    
    return expense.filter((expense) => {
        const startDateMatch = typeof startDateMatch !== 'number' || expense.createdAT >= startDate;
        const endDateMatch = typeof endDateMatch !== 'number' || expense.createdAT <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {

        if(sortBy === 'date'){
            return a.createdAT < b.createdAT ? 1 : -1; 
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }

    })
}

const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filters : filtersReducer
    })
)



// Expense Actions
const expenseOne = store.dispatch(addExpense(
    {description : 'Rent', note : 'Hi this is note', amount : 1, createdAT : -21000}
))

const expenseTwo = store.dispatch(addExpense(
    {description : 'Coffee', note : 'Hi this is Paid', amount : 31, createdAT : 21000}
))

// store.dispatch(removeExpense({ id : expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount : 400 , description : 'chai' }))


//Filters Actions
// store.dispatch(setTextFilter('co'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
store.dispatch(setEndDate(1250))


console.log(store.getState());

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpense);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpense);
});

const demoState = {

    expense : [{
        id: 'pkldj',
        description : 'January Rent',
        note : 'This is Final Payment for that address',
        amount : 4543,
        createdAT : 0
    }],

    filters : {
        text : 'rent',
        sortBy : 'amount', //date or ammount
        startDate : undefined,
        endDate : undefined
    }

}