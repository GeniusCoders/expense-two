import uuid from 'uuid'

export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAT = 0
    }
     = {}
    ) => ({
        
      type : 'ADD_EXPENSE', 
      expense :  {         
          id : uuid(),
          description,
          note,
          amount,
          createdAT
      } 
})

export const removeExpense = (id) => ({

      type : 'REMOVE_EXPENSE',
      id
});

export const editExpense = (id,updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})
