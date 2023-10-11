import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice'

function Todolist() {
   var {todolist} = useSelector(state=>state.t)
   console.log(todolist)
  var dispatch = useDispatch()
  var [newtodo,setNewtodo] = useState('')
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} />
        <button onClick={()=>{dispatch(addTodo(newtodo))}} >Addtodo</button>
        
        {
            todolist?.map((todo,i)=>{
              return <li>
                          {todo}
                          <button onClick={()=>{dispatch(deleteTodo(i))}}>Deletetodo</button>
                    </li>
            })
        }
    </div>
  )
}

export default Todolist