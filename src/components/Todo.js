import React from 'react'


export default function Todo({item,onDelete,key}) {
    
    return (
        
        <div>
       
         <h4 >{item.title}</h4>
        


         <p>{item.desc}</p>   
         <button className="btn btn-sm btn-outline-danger" key={key} onClick={()=>{onDelete(item)}}>Delete</button> 
         <hr/>
         </div>
         
    )
}
