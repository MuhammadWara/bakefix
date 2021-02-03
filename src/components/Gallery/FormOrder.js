import React, {Component, useState} from 'react';
//import { Modal } from 'react-bootstrap';
import "./Gallery.css";
import axios from 'axios';


 const Modal = ({open,  onClose, id, amount}) => {
const [quan,setQuan] = useState(1);


const incQuan = () => {
    setQuan(quan + 1);
};
const decQuan = () => {
    if(quan>1)
    setQuan(quan - 1);
};

const CloseQuan = () => {
    setQuan(1);
    
};
const [cust,setCust] = useState('');
const [contact,setCont] = useState('');
const [address,setAdd] = useState('');

const Totalamount = amount*quan;
const onSubmit = (e) => {
    e.preventDefault();
    
    const json = JSON.stringify({
      name: cust,
      address: address,
      order_name: id,
      quantity: quan,
      payment: Totalamount,
      contact: contact
    });
      const res = axios.post('http://localhost/bakefix/order.php', json, {
      
    });
    setQuan(1);
    setCust('');
    setCont('');
    setAdd('');
  
}

    if (!open) return null

    return (<div>
        <div className="blur"></div>
        <div className="dialog">
            
           
             <label className="headf">Place an Order!</label><br/>
                       <label className="headin id">{id}</label><br/>
                       <label className="headin">Name</label><br/>
                       <input type="text" name="username" placeholder="Your Name" value={cust} required onChange={(e) => setCust(e.target.value)}/>
                       <br/>
                       <label className="headin">Complete Address</label><br/>
                       <input type="text" name="email" placeholder="Address" value={address} required onChange={(e) => setAdd(e.target.value)}/> <br/>
                       <label className="headin">Contact number</label><br/>
                     <input type="text" name="email" placeholder="Phone Number" value={contact} required onChange={(e) => setCont(e.target.value)}/> <br/> 
                     <label className="headin">Quantity</label>
                       <a href="#" onClick={decQuan} >  <i class="fas fa-minus-circle inc"></i></a><h5 className="quan text-center" >{quan}</h5><a href='#' onClick={incQuan} ><i class="fas fa-plus-circle inc"></i></a> <br/>
                       <label  className="amount">Total amount:</label> {Totalamount}<br/>
                         
            <button className="btn btn-success qorder" onClick={onSubmit}>Order</button>
             <br/><br/>
             <button className="btn btn-danger qorder" onClick={() => { onClose(); CloseQuan();}}>Close</button>
   
            
        </div>
        </div>
    )
}
export function My({open, children, onClose, id}) {
    if (!open) return null

    return (<div>
        <div className="blur"></div>
        <div className="dialog">
             {children}
             <br/>
            <button className="btn btn-success qorder" >{id}</button>
             <br/><br/>
            <button className="btn btn-danger qorder" onClick={onClose}>Close</button>
           
        </div>
        </div>
    )
}
export default Modal;