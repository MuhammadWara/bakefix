import React, {Component} from 'react';
import { Link } from 'react-router-dom';



const Errorfound =() =>{
  
  return(
<div>

<div className="page-404">
        <p className="text-404">404</p>
        <h2>Aww Snap!</h2>
        <p>Something went wrong or that page doesn’t exist yet. <br /><a ComponentClass={Link} href="/Home" to="/Home">Return Home</a></p>
      </div>
  </div>
          
    );
  }
  
  export default Errorfound;