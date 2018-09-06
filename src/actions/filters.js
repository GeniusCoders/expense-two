// Filters Actions Functions
export const setTextFilter = ((text) => ({
    type : 'TEXT_FILTER',
    text
}))

export const sortByAmount = () => ({
    type : 'SORT_AMOUNT'
})

export const sortByDate = () => ({
    type : 'SORT_DATE'
})

export const setStartDate = (startDate = undefined) => ({
    type : 'START_DATE',
    startDate 
})

export const setEndDate = (endDate = undefined) => ({
    type : 'END_DATE',
    endDate
})