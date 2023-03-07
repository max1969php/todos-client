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
        <FilterSelection onStateChange={sendValoriPost}
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
        <div className='pagination-box'>
          <div className='p-box1'></div>
          <div className='p-box2 p-box-color'>1</div>
          <div className='p-box3 p-box-color page-selected'>2</div>
          <div className='p-box4 p-box-color'>3</div>
          <div className='p-box5 p-box-color'>4</div>
          <div className='p-box6 p-box-color'>...</div>
          <div className='p-box7 p-box-color'>...</div>
          <div className='p-box8'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
