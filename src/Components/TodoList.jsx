import React, { useState } from 'react'
import '../App.css'

function TodoList() {
    const[listItem,setListItem]=useState([{name:"sanjana",description:"eeeeeeeeeeeeeeeeeeeee",done:false,date:"Today"}])
  return (
   <>
   <h3>TODO List</h3>
   <div style={{width:'100vw', minHeight: '100vh',color:'white'}} className='d-flex justify-content-center align-items-center p-2'>
    
    <ul className='w-75'>
        {
        listItem.map((item,index)=>{
        return <li key = {index} className="list-style d-flex justify-content-between align-items-center border-bottom py-2 ">
            <div className='d-flex gap-3 justify-content-around'><input type="checkbox"/>
             <span>{item.name}</span>
            </div>
            <button className='px-2 py-0 rounded'style={{background:'#7749F8', border:'1px solid #7749F8'}}>{item.date}</button>
            

        </li>

    })}
    </ul>
    
   </div>
   
   </>
  )
}

export default TodoList