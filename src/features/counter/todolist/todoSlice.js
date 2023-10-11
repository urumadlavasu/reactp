import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist:['pay bills','buy cars','get bmw']
}
export const todoSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
       addTodo:(state,action)=>{
                state.todolist.push(action.payload)
       },
       deleteTodo:(state,action)=>{
                state.todolist.splice(action.payload,1)
       }
    }
})
   export const{addTodo,deleteTodo} = todoSlice.actions

   var todolistReducer = todoSlice.reducer
   export default todolistReducer;