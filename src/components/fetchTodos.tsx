import React, {  useState, useEffect } from 'react';
import Pagination from './pagination'

const FetchTodos = ({valoriPost}:{valoriPost:any} )=>{
  console.log('valPPPP',valoriPost)
  
    const [data, setData] = useState([])
    let todo=[]
    
                // completedSelector: valoriPost[1],
                // usersID:valoriPost[2].toString(),
                // searchText:valoriPost[0],
  function fetchData  ()  {
      console.log('valpost',valoriPost[2].toString())
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                 completedSelector:0,
                 usersID:[1,2,3,4,5,6,7,8,9,10],
                 searchText:'',
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
    <>
      <div>
          {returnTableData()}   
      </div>
      
      <div id='pager'>
          <Pagination sendInizio={sendInizio} len={data.length}/>
      <div>
        <strong>{inizio}</strong>
      </div>
      </div>
    </>
  )
}
export default FetchTodos