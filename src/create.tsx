import React,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/App.css';
import Layout from './layout';
import { useForm } from 'react-hook-form';
import GenericButton from './components/genericComponents/genericButton'

function Create(){
    const navigate = useNavigate();
    const [users, setUsers] = useState([])

    function fetchData(){
      fetch("http://localhost:3001/db/users/")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data['results'])
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data: any) {
        console.log('form',data);
        console.log(errors);

        if(!window.confirm('Conferma salvataggio modifiche'))return

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userID:data['User'],
            title:data['title'],
            text:data['text'],
          })
        };

        fetch("http://localhost:3001/db/newTodos/",requestOptions)
          .then(response => {return response.json();})
          .then(dataTodo => {console.log(dataTodo['results']);
        })
        if(!window.confirm('Registrazione effettuata'))return
        window.history.back()
    }

    return(
        <React.Fragment>
            <Layout/>
            <div className='Rettangolo-edit'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <select {...register("User", { required: true })}>
                        <option value=''>...</option>
                        {users.map((option:any) => {
                          return (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          );
                        })}
                    </select>

                    <label htmlFor="title"><h1>TITOLO</h1></label>
                    <input type="text" placeholder="Titolo" {...register("title", {required: true, maxLength: 100})} 
                        style={{ 
                         width:'30vw',
                         height:'24rem',
                        }} />

                    <label htmlFor="text"><h1>TESTO</h1></label>
                    <textarea placeholder="Text" {...register("text", {required: true, maxLength: 80})} 
                        maxLength={1000}
                        style={{ 
                         width:'30vw',
                         minWidth:'20vw',
                         maxWidth:'60vw',
                         height:'15vh',
                         minHeight:'150px',
                         maxHeight:'20vw',
                        }}/>

                    <br />
                    <span><GenericButton  type="submit" text='SALVA'/></span>
                </form>
                <br />
                <span onClick={() => navigate('/')} ><GenericButton  text='INDIETRO'/></span>
            </div>
        </React.Fragment>
    )
}

export default Create