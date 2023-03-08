import {useState,useEffect} from 'react'

  function FetchTodoByID  (props:any)  {
    const [dataTodo, setDataTodo] = useState([])
console.log(props)
    function fetchDataTodo  ()  {
        fetch("http://localhost:3001/db/singleTodo/"+props.todoID)
          .then(response => {return response.json();})
          .then(dataTodo => {console.log(dataTodo['results']);setDataTodo(dataTodo['results'])
        })
    }
    useEffect(() => {
        fetchDataTodo()
      }, [])
      
    return(
        <h1>{dataTodo}</h1>
    )
    

  }

  export default FetchTodoByID