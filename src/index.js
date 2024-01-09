import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
import { Provider } from 'react-redux'
import {
       createBrowserRouter,
       RouterProvider,
       Route,
       Link,
     } from "react-router-dom";
import Products from './features/counter/products/Products';
import Countries from './features/counter/countries/Countries';
import Counter from './features/counter/Counter';
import Todolist from './features/counter/todolist/Todolist';
import CountryDetails from './features/counter/countries/CountryDetails';
     const router = createBrowserRouter([
              {
              path: "/",
              element: <App/>,
              children :[
                     {
                            path:'/countries',
                            element:<Countries></Countries>,
                                   children :[
                                         {
                                          path:"/countries/CountryDetails/:cname",
                                          element:<CountryDetails></CountryDetails>
                                         }
                                   ]
                     },
                     {
                            path:'/products',
                            element:<Products></Products>
                     },
                     {
                            path:'/counter',
                            element:<Counter></Counter>
                     },
                     {
                            path:'/todolist',
                            element:<Todolist></Todolist>
                     },
                     {
                            path:'/',
                            element:<Counter></Counter>
                     },
              ]
              },
     ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <Provider store={store}>
              <RouterProvider router={router} />
       </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
