import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routes/App';
import reportWebVitals from './reportWebVitals';
import  {RouterProvider,BrowserRouter, createBrowserRouter } from "react-router-dom";
import Forms from "./Components/Forms";
import PostList  from "./Components/PostList";
import {postLoader } from "./Components/PostList";
import {newAction} from "./Components/Forms";
import {Provider} from "react-redux";
import store from './store-redux/index.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
 const router = createBrowserRouter([
  { path:'/',element:<App /> , 
  children:[
        { path:'/',element:<PostList />, loader: postLoader},
        { path:'/CreatePost',element:<Forms />, action:newAction},
        { path:'/ListPost',element:<PostList />}
      ]
   },
  { path:'/',element:<App />},
  
  ]);
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
