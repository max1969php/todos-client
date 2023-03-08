import {useState} from 'react';
import './../App.css';

const CompletedSelector = (props:any)=>{
    const [isActive, setIsActive] = useState(true);

    const handleClick = (event:any) => {
        // toggle isActive state on click and send actual value
        setIsActive(current => !current);
    props.onChange1(isActive,1)
    }


    return(
        <div>
        <div className="completed"
        style={{
            position:'absolute',
            top:'200px',
            left:'30px',
            color:'#003479',
            fontSize:'20px',
        }}>
            COMPLETED</div>
        <div className="NO-YES"
        style={{
            position:'absolute',
            top:'246px',
            left:'30px',
            fontFamily:'karbonRegular',
            fontSize:'20px',
            color:'#003479',
        }}>{isActive ? 'NO':'YES'}</div>
        <button id="rettangolo_6"
           className={isActive ? 'completed-selector-false':'completed-selector-true'}
           onClick={ handleClick}
           style={{
            cursor: 'pointer',
         }}>
        </button>
        </div>
    ) 
}
export default CompletedSelector