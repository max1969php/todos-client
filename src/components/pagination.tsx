import './../App.css';


const Pagination = (props:any)=>{
console.log(props.len)
   const onClick1 = () => {
      props.sendInizio(-5)
   }
   const onClick2 = () => {
      props.sendInizio(-1)
   }
   const onclick0 = (value:number)=>{
      console.log(value)
      props.sendInizio(value)
   }
   
   const returnPages =()=>{
     // let pages=props.len/5
     let i
     let pages:any=[]
     let nPages:Number=(props.len)/5;
     console.log('npages',nPages)
     if(nPages>5)nPages=5
     for(i=0;i<nPages;i++){
      pages.push(i)
     }
      return pages.map((page:any) => {
          return (
           <button onClick={()=>onclick0(page)}        
              style={{
               cursor: 'pointer',
            }}>{page+1}
           </button>            
         )
      })
   }  
   return(
       <div >
           <button onClick={onClick1} id="prev"        
              style={{
               cursor: 'pointer',
            }}>A
           </button>
           {returnPages()}
           <button onClick={onClick2} id="next"        
              style={{
               cursor: 'pointer',
            }}>Z
           </button>
       </div>
   ) 
}
export default Pagination