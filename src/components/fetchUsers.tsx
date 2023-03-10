import React, { useState, useEffect } from 'react';


function FetchUsers(props:any){
    const [users, setUsers] = useState([])
    const [selectedValue, setSelectedValue] = useState();  

     // Handle the onChange event of the select
     function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOptions = event.currentTarget.selectedOptions;

    let  usersID:any=[];
    for (let i = 0; i < selectedOptions.length; i++) {
      usersID.push(Number(selectedOptions[i].value));
    }
    
    setSelectedValue(usersID);
  };
  
  useEffect(() => {
    props.onChange2(selectedValue,2)
  }, [selectedValue]);
    
  function fetchData(){
      fetch("https://massimomazzoleni1969.it/db/users/")
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

    
    const [isOpen, setIsOpen] = useState(true);  
    const [isOn, setIsOn] = useState(true);

    function handleClick  (event:any) {
      // 👇️ toggle isOpen state on click
      setIsOpen(current => !current);
      setIsOn(current => !current);
    }

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
        <div className="dropdown-container">
          <select className={isOpen ? 'select-user-down-false':'select-user-down-true'}
            onChange={handleChange} 
            multiple={true}
            autoFocus={true}
            size={10}
            style={{
              position:'absolute',
              width:'220px',
            }}>
            {users.map((option:any) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              );
            })}
          </select>
          <button className={isOn? 'down-false':'down-true'}
            onClick={handleClick}
            style={{
              cursor: 'pointer',
            }}>
          </button>
        </div> 
      </div>
    )

}

export default FetchUsers