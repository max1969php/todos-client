import {useState} from "react";

export default function GenericButton(props:any){
    console.log(props)
    const [text]=useState(props.text)
    const [isHover, setIsHover] = useState(false);
 
    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
 
    const boxStyle = {
        opacity: isHover ? '0.8' : '1',
        width:'92rem',
        height:'24rem',
        cursor: 'pointer',
        backgroundColor:'#644C79',
        borderRadius:'5px',
        borderColor:'#644C79',
        color:'white',
        fontFamily:'KarbonSemibold',
        textShadow: '1px 1px #000000',
    };
    return(
        <>
        <button
            style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >{text}
        </button>
        </>
    )
}