import moment from 'moment'
import { toUnicode } from 'punycode';

// Get Visible
const getVisibleExpense = (expense,{text , sortBy, startDate, endDate}) => {
    
    return expense.filter((expense) => {
        const createdATMoment = moment(expense.createdAT)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdATMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdATMoment,'day') : true;
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

export default getVisibleExpense