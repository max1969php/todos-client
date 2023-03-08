import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './App.css';
import FetchTodoByID from './editComponents/fetchTodoByID'

function Edit(){
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const todoID=searchParams.get("id")
    console.log(todoID)
    

    return(
        <div>
            <h1>Hello, {todoID}</h1>
            <button className="btn" onClick={() => navigate(-1)}>
             Go Back
            </button>
            <FetchTodoByID todoID={todoID}/>
        </div>
    )
}

export default Edit