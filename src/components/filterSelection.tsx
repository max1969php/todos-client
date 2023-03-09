import CompletedSelector from './completedSelector';
import InputSearch from './inputSearch';
import FetchUsers from './fetchUsers';
import './../assets/css/App.css';
import {useState} from 'react';


function FilterSelection (props:any) {
    // track "subtotals" in one place in state;
    // the total value of all subtotals can be trivially derived from this
    let [valueArray] = useState(props.filters);

    // our onChange handler will update the index of "subtotals"
    // with the passed new value
    const onChange0 = (newValue:any,index:number) => {
        valueArray[index]=newValue
        console.log('USERSID',valueArray)
        props.sendFilters(valueArray)
    }
    const onChange1 = (newValue:any,index:number) => {
        valueArray[index]=newValue
        console.log('USERSID',valueArray)
        props.sendFilters(valueArray)
    }
    const onChange2 = (newValue:any,index:number) => {
        valueArray[index]=newValue
        console.log('USERSID',valueArray)
        props.sendFilters(valueArray)
    }
    return(
        <div>
        <div id="filters"></div>
            <InputSearch onChange0 = {onChange0}/>
            <CompletedSelector onChange1 = {onChange1}/>
            <FetchUsers onChange2 = {onChange2}/>
        <button className="reset-filters"
        onClick={()=>window.history.go()}
              style={{
               cursor: 'pointer',
            }}>Reset filters
        </button>
        </div>
    ) 
}
export default FilterSelection