import React from 'react'
import { connect } from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

class ExpenseListFilters extends React.Component{

    state={
        calFocused : null
    }

    onDatesChange = ({startDate , endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }   

    onFocusChange = (calFocused) => {
        this.setState(() => ({calFocused}))
    }

    render(){
        return(
            <div>
             <input type="text" onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value))        
             }}
              />
             <select 
                value={this.props.filters.sortBy}
                onChange={(e) => {
                if(e.target.value === 'date'){
                    this.props.dispatch(sortByDate())
                 } else if(e.target.value === 'amount'){
                    this.props.dispatch(sortByAmount())
                 }
                
                 
                }}>
               <option value="date">Date</option>
               <option value="amount">Amount</option>
             </select> 
             <DateRangePicker 
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calFocused}
              onFocusChange={this.onFocusChange}   
              numberOfMonths={1}
              isOutsideRange={() => false}  
              showClearDates={true}       
             />
            </div>
        )
    }
}


const mapToState = (state) => {
    return {
        
        filters : state.filters
    }
}

export default connect(mapToState)(ExpenseListFilters)