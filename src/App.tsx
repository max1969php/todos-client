import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Layout from './layout';
import FilterSelection from './components/filterSelection';
import Pagination from './components/pagination';

function App() {
  const navigate = useNavigate();
  const [filters, setFilters]:any = useState([
    '',false,''
  ]);
    
  const [data, setData] = useState([])
  
  const sendFilters = (valueArray:any) => {
    setFilters(valueArray );
    fetchData()
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
      .then(response => {return response.json();})
      .then(data => {console.log(data['results']);setData(data['results'])
      
    })
  }

  const [inizio, setInizio] = useState(0);
  
  const sendInizio = (cambio:number) => {
    console.log('cambio',cambio)
    let offset:number=0;
    if(cambio===-5 && inizio>=5)offset=-5;
    if(cambio===-5 && inizio<5)return;
    if(cambio===-1 && inizio>=(data.length-5))return;
    if(cambio===-1 && inizio<(data.length-5))offset=5;
    if(cambio>=0){setInizio(cambio*5-5);return};
    setInizio(inizio +offset);
    }

  const returnTableData = () => {   
    todo=data.slice(inizio,inizio+5)
    
    return todo.map((items) => {
      const { id,userID,name, title, completed } = items;
      return (
        <div className='tableBox'
        onClick={() => navigate('edit?id='+id)}
        newdata-id={id} key={id} 
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
          borderBottomColor:'#00A0DF',
          cursor: 'pointer',
        }}>
          <p
          style={{
            flex:'0 0 90px',
            textAlign :'center',
          }}>
            {userID+' - '+name}</p>
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
      <Layout/>
      <div className='Rettangolo1'>
        <h1>FILTERS</h1>
        <FilterSelection filters={filters} sendFilters ={sendFilters}/>
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
          <div>
            <Pagination sendInizio={sendInizio} len={data.length} inizio={inizio}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


