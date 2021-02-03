import React from 'react';
import './Cakepics.css'


const Cake= props=>{
return(
<div className="card text-center">
<img src= {props.imgscr} className="card-img-top"/>
</div>


);
}
export default Cake;