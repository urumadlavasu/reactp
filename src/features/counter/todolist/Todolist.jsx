import React from 'react'
import { useSelector } from 'react-redux'

function Todolist() {
   var {todolist} = useSelector(state=>state.t)
   console.log(todolist)
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={()=>{}} />
    </div>
  )
}

export default Todolist