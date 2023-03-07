import React from 'react';
import './App.css';
import FetchTodos from './components/fetchTodos';
import FilterSelection from './components/filterSelection';
import { useEffect, useState } from 'react';

function App() {
  const [filters, setFilters]:any = useState([
    '',false,''
  ]);
  const [valoriPost, setValoriPost]:any = useState([
    '',false,''
  ]);

  const sendFilters = (valueArray:any) => {
    setFilters(valueArray );
  setValoriPost(valueArray );
    
    console.log('USERSID layout',valueArray)
  }
const SendValoriPost = (click:any) => {
  setValoriPost(click );
    
    console.log('USERSID valori click',click)
  }
  return (
    <div className='App'>
      <div className="Rettangolo888">
        <div className='aalto_it'/>
        <div className="Rettangolo889">
          <div className='segoe'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco</div>
        </div>
      </div>
      <div className='Rettangolo1'>
        <h1>FILTERS</h1>
        <FilterSelection
         filters={filters} sendFilters ={sendFilters}/>
      </div>
      <div className='Rettangolo2'>
        <div className='flex-container1'>
          <h3 className='column1'>USER ID</h3>
          <h3 className='column2'>TITLE</h3>
          <h3 className='column3'>COMPLETED</h3>
        </div>
        <div className='Line1'></div>
            <FetchTodos valoriPost={valoriPost} SendValoriPost={SendValoriPost}/>
      </div>
    </div>
  );
}

export default App;
function componentDidUpdate() {
  throw new Error('Function not implemented.');
}

