import {useState} from 'react';
import './../assets/css/App.css';

const InputSearch = (props:any)=>{
    const [inputText, setInputText] = useState('');

    const handleChange = (event:any) => {
        setInputText(event.target.value);
      };

    const handleClick = (event:any) => {
    // 👇️ send serch text
    props.onChange0(inputText,0)
    }


    return(
        <div>
            <div className="Rettangolo3">
                <div className="Rettangolo5"
                    onClick={handleClick}
                  style={{
                   cursor: 'pointer',
                  }}>
                <button className="loupe2"
                  style={{
                   cursor: 'pointer',
                  }}>
                </button>
                </div>
                <input className="Search"
                   onChange={handleChange}
                   placeholder="Search..."
                   type="text"
                   style={{
                    position:'absolute',
                    top:'18px',
                    left:'50px',
                    border:'none',
                    outline:'none',
                    fontFamily:'karbonItalic',
                    fontSize:'16px',
                    color:'#644C79',
                    cursor: 'text',
                 }}
                />
            </div> 
        </div>
    ) 
}
export default InputSearch


