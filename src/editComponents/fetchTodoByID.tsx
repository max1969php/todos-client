import React,{useState,useEffect} from 'react'
import GenericButton from './../components/genericComponents/genericButton'

    let textIsModified:boolean=false
  function FetchTodoByID  (props:any)  {
    const [dataTodo, setDataTodo] = useState<any[]>([])
    const [completed, setCompleted] = useState<any>()
    const [modifiedText,setModifiedText] =useState<string>()

    function fetchDataTodo  ()  {
        fetch("http://localhost:3001/db/singleTodo/"+props.todoID)
          .then(response => {return response.json();})
          .then(dataTodo => {
            setDataTodo(dataTodo['results']);
            setCompleted(dataTodo['results'][0]['completed'])
        })
    }
    useEffect(() => {
        fetchDataTodo()
      }, [])

    function savePost(element:any){
      if(!window.confirm('Conferma salvataggio modifiche'))return
      let text:any
      if(textIsModified){text=modifiedText}else{text=dataTodo[0]['text']}
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text:text,
          id:dataTodo[0]['id'],
          completed:completed
        })
      };
      console.log('requested',requestOptions)
        fetch("http://localhost:3001/db/updateTodos/",requestOptions)
          .then(response => {return response.json();})
          .then(dataTodo => {console.log(dataTodo['results']);setDataTodo(dataTodo['results'])
        })
        if(!window.confirm('Salvataggio effettuato'))return
        window.history.back()
    }
    function deletePost(element:any){
      if(!window.confirm('Conferma cancellazione del post'))return
      fetch("http://localhost:3001/db/deleteTodos/"+props.todoID)
        .then(response => {return response.json();})
        .then(dataTodo => {
          setDataTodo(dataTodo['results']);
      })
        if(!window.confirm('Cancellazione effettuata'))return
        window.history.back()
    }

    function completedPost(element:any){
      if(completed===1){setCompleted(0)}else{setCompleted(1)}
    }

      function handleChangeText(e:any){
        textIsModified=true
          setModifiedText(e.target.value)
      }
    return(
      <div>
        {dataTodo.map(myTodo => (
          <React.Fragment key={myTodo.id}>
            <h1 className='text-left'>UTENTE - {myTodo?.name}</h1>
            <h1 className='text-left'>TITOLO  - {myTodo?.title}</h1>
            <br />
            <h1>TESTO</h1>
            <textarea
             maxLength={1000}
             style={{ 
              width:'30vw',
              minWidth:'20vw',
              maxWidth:'60vw',
              height:'15vh',
              minHeight:'150px',
              maxHeight:'20vw',
             }}           
              onChange={handleChangeText}>
                {myTodo?.text}
            </textarea>
            <h1>{completed}</h1>
            
            <span onClick={savePost}><GenericButton  text='SALVA'/></span>
            <span onClick={completedPost} ><GenericButton  text='COMPLETATO'/></span>
            <span onClick={deletePost}><GenericButton  text='CANCELLA'/></span>
          </React.Fragment>
        ))}
      </div>
    )    
  }

  export default FetchTodoByID