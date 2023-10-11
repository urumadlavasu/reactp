import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todolistReducer from '../features/counter/todolist/todoSlice'

export const store = configureStore({
  reducer: {
     c:counterReducer,
     t:todolistReducer,
  },
})