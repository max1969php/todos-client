import React from 'react';
import './App.css';
import FetchTodos from './components/fetchTodos';
import FilterSelection from './components/filterSelection';
import { useEffect, useState } from 'react';

function App() {
  const [valoriPost, setValoriPost]:any = useState([
    '','0',''
  ]);

  const sendValoriPost = (valueArray:any) => {
    setValoriPost(valueArray );
    
    console.log('USERSID layout',valueArray)
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
         valoriPost={valoriPost} sendValoriPost ={sendValoriPost}/>
      </div>
      <div className='Rettangolo2'>
        <div className='flex-container1'>
          <h3 className='column1'>USER ID</h3>
          <h3 className='column2'>TITLE</h3>
          <h3 className='column3'>COMPLETED</h3>
        </div>
        <div className='Line1'></div>
            <FetchTodos valoriPost={valoriPost}/>
      </div>
    </div>
  );
}

export default App;
function componentDidUpdate() {
  throw new Error('Function not implemented.');
}

