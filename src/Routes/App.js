import React from 'react';
import logo from '../logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaBeer } from "react-icons/fa";
import Menu from "../Components/Menu";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
 
import PostListsProvider from "../store/Post-list-store";
import { Outlet} from 'react-router-dom'
function App() {


  return (

    
   
    <React.Fragment>
     <PostListsProvider>
     <Menu />
     <main className="d-flex flex-nowrap" style={{width:'100%'}}>
     <Header/>
     {/*<span className="text-primary"> Hellow <FaBeer /></span>*/}
     <div className="row" >
        <Outlet />
      <Footer />
     </div>
     </main>
      </ PostListsProvider >
    </ React.Fragment>
  );
}

export default App;
