import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './assets/css/App.css';
import Layout from './layout';
import FetchTodoByID from './editComponents/fetchTodoByID'
import GenericButton from './components/genericComponents/genericButton'

function Edit(){
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const todoID=searchParams.get("id")
    

    return(
        <div>
            <Layout/>
            <div className='Rettangolo-edit'>
                <FetchTodoByID todoID={todoID}/>
            <span onClick={() => navigate('/')} ><GenericButton  text='INDIETRO'/></span>
            </div>
        </div>
    )
}

export default Edit