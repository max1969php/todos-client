import React, { useState, useEffect } from 'react';


const FetchUsers = (props:any)=>{
    const [users, setUsers] = useState([])
    const [selectedValue, setSelectedValue] = useState();

     // Handle the onChange event of the select
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = event.currentTarget.selectedOptions;

    let  usersID:any=[];
    for (let i = 0; i < selectedOptions.length; i++) {
      usersID.push(Number(selectedOptions[i].value));
    }

    setSelectedValue(usersID);
  };
  
  useEffect(() => {
    console.log("Value of Selected client in State is: ", selectedValue);
    props.onChange2(selectedValue,2)
  }, [selectedValue]);
    
    const fetchData = () => {
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
    return(
      <div>
        <div id="select_user_id"
          style={{
            position:'absolute',
            top:'327px',
            left:'30px',
            color:'#003479',
            fontSize:'20px',
          }}>
          SELECT USER ID
        </div>
        <div id="rettangolo_4" className="dropdown-container">
          <select className="select_user_down" id="select_user_down" 
            onChange={handleChange} 
            multiple={true}
            style={{
              position:'absolute',
              top:'363px',
              left:'30px',
              width:'275px',
              height:'200px',
            }}>
            {users.map((option:any) => {
              return (
                <option selected key={option.id} value={option.id}>
                  {option.name}
                </option>
              );
            })}
          </select>
          <button id='down'
               style={{
                cursor: 'pointer',
             }}>
          </button>
        </div> 
      </div>
    )

}

export default FetchUsers