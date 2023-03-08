import React from 'react';
import './App.css';
import FilterSelection from './components/filterSelection';
import { useEffect, useState } from 'react';
import Pagination from './components/pagination';

function App() {
  const [filters, setFilters]:any = useState([
    '',false,''
  ]);
    
  const [data, setData] = useState([])
  
  const sendFilters = (valueArray:any) => {
    setFilters(valueArray );
    fetchData()
    
    console.log('USERSID layout',valueArray)
  }

  let todo=[]

  function fetchData  ()  {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completedSelector:filters[1],
        usersID:filters[2],
        searchText:filters[0],
      })
    };
    fetch("http://localhost:3001/db/exercise", requestOptions)
      .then(response => {return response.json()})
      .then(data => {setData(data['results'])
    })
  }
  useEffect(() => {
  fetchData()
  }, [])

  const [inizio, setInizio] = useState(0);
  
  const sendInizio = (cambio:number) => {;
    let offset:number=0;
    console.log(cambio);
    if(cambio===-5 && inizio>=5)offset=-5;
    if(cambio===-5 && inizio<5)return;
    if(cambio===-1 && inizio>=(data.length-5))return;
    if(cambio===-1 && inizio<(data.length-5))offset=5;
    if(cambio>=0){setInizio(cambio*5);return};
    setInizio(inizio +offset);
    }
    const returnTableData = () => {
    
    
    console.log('DATI TODOS',data)
    todo=data.slice(inizio,inizio+5)
    console.log('new data',todo)
    
    return todo.map((items) => {
      const { id,userID, title, completed } = items;
      return (
        <div newdata-id={id} key={id} 
        style={{
          display:'flex',
          flexDirection:'row',
          color:"black",
          fontFamily:'karbonRegular',
          fontSize:'16px',
          verticalAlign:'middle',
          zIndex:'10',
          width: '760.5px',
          height: '62.5px',
          position:'relative',
          left:'35.5px',
          marginTop:'20px',
          paddingTop:'10px',
          backgroundColor: 'white',
          borderBottom:'solid',
          borderBottomColor:'#00A0DF'
        }}>
          <p
          style={{
            flex:'0 0 90px',
            textAlign :'center',
          }}>
            {userID}</p>
            <p
          style={{
            flex:'0 0 80px',
            textAlign :'center',
          }}></p>
          <p
          style={{
            flex:'0 0 510px',
            textAlign:'left',
          }}>
            {title}</p>
          <p
          style={{
            flex:'0 0 90px',
            textAlign :'center',
          }}
          className={'completed'+completed }>
            </p>
        </div>
      )
    });
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
    <div>
      <div>
          {returnTableData()}   
      </div>
      
      <div id='pager'>
          <Pagination sendInizio={sendInizio} len={data.length}/>
      <div>
        <strong>{inizio}</strong>
      </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;


