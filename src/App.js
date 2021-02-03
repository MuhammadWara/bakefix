import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'

 
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



import Home from './components/Home/Home';
import Register from './components/Register/Register';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Custom from './components/Custom/Custom';
import Form from './Form/Form';
import Back from './components/backend/Display';


import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App(){
  
  var firebaseConfig = {
    apiKey: "AIzaSyDVOJnhP3xjo61k8FmKVQO7QdhNLUFj1yk",
    authDomain: "bakefix-1959b.firebaseapp.com",
    projectId: "bakefix-1959b",
    storageBucket: "bakefix-1959b.appspot.com",
    messagingSenderId: "835347049526",
    appId: "1:835347049526:web:9a6784b3fed1c0325dfc97"
  };
  
  firebase.initializeApp(firebaseConfig);
  return (
   <Router>
   <div className="App">
      
      <Switch>
          <Route path="/About">
          <Header/><About />
          <Footer/>
          </Route>
        <Route path="/Register">
          <Header/>
          <Register/>
          <Footer/>
          </Route>
          <Route path="/Login">
          <Header/><Login />
          <Footer/>
          </Route>
                     <Route path="/Contact">
                         <Header/>
                          <Contact/>
                          <Footer/>
                          </Route>
          
          <Route path="/Gallery">
          <Header/>
          <Gallery/>
          <Footer/>
          </Route>

          <Route path="/Form">
         
          <Form/>
        
          </Route>

          <Route path="/Custom">
          <Header/>
          <Custom/>
          <Footer/>
          </Route>
          
          <Route path="/Display">
       
          <Back/>
          
          </Route>

          <Route path="/">
          <Header/>

      
       
 <Home />
 
<Footer/>
          </Route>
          

        </Switch>
     
      

   </div></Router>
        
  );
}


export default App;

