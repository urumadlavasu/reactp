import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todolistReducer from '../features/counter/todolist/todoSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { countriesApi } from '../services/countries'
import { productsApi } from '../services/products'
export const store = configureStore({
  reducer: {
     c:counterReducer,
     t:todolistReducer,
     [countriesApi.reducerPath]: countriesApi.reducer,
     [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})
setupListeners(store.dispatch)