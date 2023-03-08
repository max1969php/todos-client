import React from 'react';
import './../App.css';


const Pagination = (props:any)=>{
   console.log(props)
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
         console.log('page,props.inizio',page,props.inizio)
         let paginaInizioAttuale=props.inizio/5+1
         let maxPage=props.len/5
         console.log('paginainizioattuale',paginaInizioAttuale,'page',page,'nume sul tasto',page+1+(props.inizio/5))
         let x:string= ' p-box-color'
         let bcColor:string='#f4f4f4'
         if(page==0) bcColor='#003479'
         
         if(page==0)x='page-selected p-box-color'
         if(maxPage<page+1+(props.inizio/5)){
            return(
               <p className='p-box7' id="next"        
                  style={{
                   border:'none',
                   color:'#003479',
                   position:'relative',
                   top:'-1vh',
                   fontSize:'16rem',
                }}>...
               </p>
            )
         }
         return (
           <button className={x } key={paginaInizioAttuale+page} onClick={clickHandler(paginaInizioAttuale+page)}    
              style={{
               cursor: 'pointer',
               border:'none',
               backgroundColor:bcColor,
            }}>{page+1+(props.inizio/5)}
           </button>            
         )
      })
   }  

   var classArrowLeft='p-box1-active'
   if(props.inizio==0)classArrowLeft='p-box1-inactive'
   var classArrowRight='p-box8-active'
   if(props.inizio==props.len-5)classArrowRight='p-box8-inactive'

   return(
       <div >
        <div className='pagination-box'>
           <button className={classArrowLeft} onClick={clickHandler(-5)} id="prev"        
              style={{
               cursor: 'pointer',
               border:'none',
            }}>
           </button>
           <button className='p-box7' onClick={clickHandler(1)} id="next"        
              style={{
               cursor: 'pointer',
               border:'none',
               color:'#003479',
            }}>{1}
           </button>
           <p className='p-box7' id="empty0"        
              style={{
               border:'none',
               color:'#003479',
               position:'relative',
               top:'-1vh',
               fontSize:'16rem',
            }}>...
           </p>
           {returnPages()}
           <p className='p-box7' id="empty1"        
              style={{
               border:'none',
               color:'#003479',
               position:'relative',
               top:'-1vh',
               fontSize:'16rem',
            }}>...
           </p>
           <button className='p-box7' onClick={clickHandler(props.len/5)} id="next"        
              style={{
               cursor: 'pointer',
               border:'none',
               color:'#003479',
            }}>{Number((props.len)/5).toFixed(0)}
           </button>
           <button className={classArrowRight} onClick={clickHandler(-1)} id="next"        
              style={{
               cursor: 'pointer',
               border:'none',
            }}>
           </button>
        </div>
       </div>
   ) 
}
export default Pagination