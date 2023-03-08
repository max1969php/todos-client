import React from 'react';
import './../App.css';


const Pagination = (props:any)=>{
console.log(props.len)
   type ClickHandler = (value: number) => (e: React.MouseEvent) => void;
   const clickHandler: ClickHandler = (value) => (e) => {
      e.preventDefault();
      props.sendInizio(value)
   };
   const returnPages =()=>{
     // let pages=props.len/5
     let i
     let pages:any=[]
     let nPages:Number=(props.len)/5;
     if(nPages>5)nPages=5
     for(i=0;i<nPages;i++){
      pages.push(i)
     }
      return pages.map((page:any) => {
          return (
           <button key={page} onClick={clickHandler(page)}    
              style={{
               cursor: 'pointer',
            }}>{page+1}
           </button>            
         )
      })
   }  
   return(
       <div >
        <div className='pagination-box'>
          <div className='p-box1'></div>
          <div className='p-box2 p-box-color'>1</div>
          <div className='p-box3 p-box-color page-selected'>2</div>
          <div className='p-box4 p-box-color'>3</div>
          <div className='p-box5 p-box-color'>4</div>
          <div className='p-box6 p-box-color'>...</div>
          <div className='p-box7 p-box-color'>...</div>
          <div className='p-box8'></div>
        </div>
           <button onClick={clickHandler(-5)} id="prev"        
              style={{
               cursor: 'pointer',
            }}>A
           </button>
           {returnPages()}
           <button onClick={clickHandler(-1)} id="next"        
              style={{
               cursor: 'pointer',
            }}>Z
           </button>
       </div>
   ) 
}
export default Pagination