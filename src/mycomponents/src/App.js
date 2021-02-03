import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

//import GetList from './display';


 


import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home';



import COrders from './components/COrders/COrders';

import Orders from './components/Widgets/Orders';

import Gallery from './components/Gallery/Gallery';





function App() {
 
 
     return (
   <Router>
   <div className="App">
   <Route path = "/" component = {Home} />
  
   <Route path = "/COrders" component = {COrders} />
 
   <Route path = "/Orders" component = {Orders} />
  
   
   <Route path = "/Gallery" component = {Gallery} />

      
   
         
     
     
    </div>
  </Router>
  )
}

export default App;