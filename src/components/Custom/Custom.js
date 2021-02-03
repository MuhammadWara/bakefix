
import React, { Component, useState } from 'react';
import axios from 'axios';
import './Custom.css'
import img1 from "../images/ii1.jpg"
import img2 from "../images/ii2.jpg"
import img3 from "../images/im31.jpg"
import img4 from "../images/chfi1.jpg"
import img5 from "../images/chfi2.jpg"
import img6 from "../images/chfi3.jpg"
import img7 from "../images/chf3.jpg"
import img8 from "../images/chf2.jpg"
import img9 from "../images/chf1.jpg"

import img11 from "../images/rf1.jpg"
import img12 from "../images/rf2.jpg"
import img13 from "../images/rf3.jpg"
import img14 from "../images/rfr1.jpg"
import img15 from "../images/rfr2.jpg"
import img16 from "../images/f3.jpg"
import img17 from "../images/vafi1.jpg"
import img18 from "../images/vafi2.jpg"
import img19 from "../images/vafi3.jpg"
import img20 from "../images/vafr1.jpg"
import img21 from "../images/vafr2.jpg"
import img10 from "../images/vafr3.jpg"


const ImageData = [
  { image: img1, fname:"Chocolate", Fprice: 500 },
  { image: img2, fname:"Vanila", Fprice:400 },
  { image: img3, fname:"Red Valvet", Fprice: 600 },
]

const ImageData2 = [
  { image: img4, name:"vanila", Fprice: 200 },
  { image: img5 ,name:"nuts", Fprice: 400},
  { image: img6, name:"double chocolate", Fprice: 300}
]

const ImageData3 = [
  { image: img7, frname:"Chocolate with chocolate rolls", Fprice: 200 },
  { image: img8, frname:"Chocolate with sprinkles", Fprice: 250 },
  { image: img9, frname:"Coffee with chocolate chips ", Fprice: 350 },
]
const ImageData4 = [
  { image: img17,name:"Vanila", Fprice: 200 },
  { image: img18,name:"Chocolate", Fprice: 200 },
  { image: img19,name:"Strawberry", Fprice: 200 },
]
const ImageData5 = [
  { image: img11,name:"Vanila", Fprice: 300  },
  { image: img12,name:"Butter", Fprice: 400  },
  { image: img13,name:"Vanila Strawberry", Fprice: 450  },
]
const ImageData6 = [
  { image: img14, frname:"Vanila with valvet crumbs", Fprice: 300  },
  { image: img15, frname:"Butter with sprinkles", Fprice: 300  },
  { image: img16, frname:"Vanila layered", Fprice: 250  },
]

const ImageData7 = [
  { image: img10, frname:"Chocolate Layered ", Fprice: 400 },
  { image: img20, frname:"Vanila with sprinkles", Fprice: 400 },
  { image: img21, frname:"Strawberry layered", Fprice: 400 },
]

export default class Custom extends Component {
 constructor(props){
   super(props);
   this.onSubmit = this.onSubmit.bind(this);
   this.onChangeUsername = this.onChangeUsername.bind(this);
   this.onChangeAddress = this.onChangeAddress.bind(this);
   this.onChangeContact = this.onChangeContact.bind(this);
   this.onChangeDeldate = this.onChangeDeldate.bind(this);
   this.onChangeDeltime = this.onChangeDeltime.bind(this);
   this.onChangeWrite = this.onChangeWrite.bind(this);
      this.state ={
        isOpen: false,
        selected_flavour: "",
        selected_filling: "",
        selected_frosting: "",
        total_amount:0,
        name: "",
        address:"",
        contact:"",
        deltime: "",
        deldate:"",
        write: ""

      }
 }
  state = {
    on: false,
    display: false,
    show: false,
    choice: false
  }


setImage = () => {

}
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  
  toggleHandler = () => {
        const currentStatus = this.state.display;
        this.setState({
          display: !currentStatus
        })
  }
  toggleeHandler = () => {
        const currentStatus = this.state.show;
        this.setState({
          show: !currentStatus
        })
  }

  togleeHandler = () => {
        const currentStatus = this.state.choice;
        this.setState({
          choice: !currentStatus
        })
  }

  togle1Handler = () => {
        const currentStatus = this.state.showfros;
        this.setState({
          showfros: !currentStatus
        })
  }
  toglevalvet = () => {
        const currentStatus = this.state.valvetfill;
        this.setState({
          valvetfill: !currentStatus
        })
  }
  toglevalvet1 = () => {
        const currentStatus = this.state.valvetfros;
        this.setState({
          valvetfros: !currentStatus
        })
  }

  onClose = () => {
        this.setState({
          isOpen: false,
          total_amount:0,
          selected_flavour:"",
          selected_filling: "",
          selected_frosting: "",
          name: "",
        address:"",
        contact:"",
        deltime: "",
        deldate:"",
        write:""
        })
        // this.setState({
        //   total_amount:0,
        //   selected_flavour:"",
        //   selected_filling: "",
        //   selected_frosting: ""
        // })
  }

  onPictureHandler = (e, label,data) => {
        if (e?.target?.src) {
          this.setState({
            [label]: e.target.src,
            total_amount:this.state.total_amount+data.Fprice
          })
          if(data.fname){
            this.setState({ selected_flavour: data.fname})}

          if(data.name){
            this.setState({selected_filling: data.name})}
            if(data.frname){
              this.setState({selected_frosting: data.frname})}

        }
  }

  onOrder = () => {
        this.setState({
          isOpen: true
    
        } )
  }
  onChangeUsername(e) {
    this.setState({
      name: e.target.value
    })
  };
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  };

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    })
  };

  onChangeDeldate(e) {
    this.setState({
      deldate: e.target.value
    })
  };

  onChangeDeltime(e) {
    this.setState({
      deltime: e.target.value
    })
  };

  onChangeWrite(e) {
    this.setState({
      write: e.target.value
    })
  };

  onSubmit(e){
       e.preventDefault();

        const json = JSON.stringify({
         flavour: this.state.selected_flavour,
         filling: this.state.selected_filling,
         frosting: this.state.selected_frosting,
         payment: this.state.total_amount,
         name: this.state.name,
         address: this.state.address,
         contact:this.state.contact,
         deldate: this.state.deldate,
         deltime:this.state.deltime,
          write: this.state.write
         });
         const res = axios.post('http://localhost/bakefix/Corder.php', json, {
      
          })

          this.setState({
            total_amount:0,
            selected_flavour:"",
            selected_filling: "",
            selected_frosting: "",
            name: "",
            address:"",
            contact:"",
            deltime: "",
            deldate:"",
            write:""
          })
       }
  

      renderFlavoursImgaes = (data, ind) => {
        return <img className="flav" id={`img${ind + 1}`} onClick={(e) => this.onPictureHandler(e, "imageOne",data)} src={data.image}></img>
      }
      renderFillingsImgaes = (data, ind) => {
        return <div ><img  className=" dis" style={{marginLeft:'0%'}} id={`img${ind + 1}`} onClick={(e) => this.onPictureHandler(e, "imageTwo",data)} src={data.image}></img><br /></div>
      }
      renderFrostingImgaes = (data, ind) => {
        return <div ><img className="dis" style={{marginLeft:'0%'}} id={`img${ind + 1}`} onClick={(e) => this.onPictureHandler(e, "imageThree",data)} src={data.image}></img><br /></div>
      }

      
  render() {
    let content = null, content1 = null, fill2= null, fros2= null,fill3= null, fros3=null, order = null;

    if (this.state.show) {
     
      content1 = <h1 > <a href="#">
      {ImageData3 && ImageData3.map((val, ind) => {
          return this.renderFrostingImgaes(val, ind)
        })}
      {/* <img onClick={(e) => this.onPictureHandler(e, "imageThree")} id="img1" src="../images/ii.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageThree")} id="img2" src="../images/oo.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageThree")} id="img2" src="../images/im3.jpg"></img>  */}
      </a> </h1>
      
    }
    if (this.state.display) {

      content = <h1 className="fill" ><a href="#"  >
        {ImageData2 && ImageData2.map((val, ind) => {
          return this.renderFillingsImgaes(val, ind)
        })}
   <button className="btn btf" onClick={this.toggleeHandler}>Frosting</button>{content1}</a>
        {/* <img id="img1" onClick={(e) => this.onPictureHandler(e, "imageTwo")} src="../images/ii.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/oo.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/im3.jpg"></img>  */}
        <br/> </h1> 
        
    }
    if (this.state.showfros) {
  
     fros2 = <h1 className=" fros2" ><a href="#"  >
        {ImageData7 && ImageData7.map((val, ind) => {
          return this.renderFrostingImgaes(val, ind)
        })}
  </a>
        {/* <img id="img1" onClick={(e) => this.onPictureHandler(e, "imageTwo")} src="../images/ii.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/oo.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/im3.jpg"></img>  */}
        <br/> </h1> 
        
    }
    if (this.state.choice) {
      content= false;
     fill2 = <h1 className="fill fill2"><a href="#"  >
        {ImageData4 && ImageData4.map((val, ind) => {
          return this.renderFillingsImgaes(val, ind)
        })}
   <button className="btn btf" onClick={this.togle1Handler}>Frosting</button>{fros2}</a>
        {/* <img id="img1" onClick={(e) => this.onPictureHandler(e, "imageTwo")} src="../images/ii.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/oo.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/im3.jpg"></img>  */}
        <br/> </h1> 
        
    }
    if (this.state.valvetfros) {
  
      fros3 = <h1 className=" fros3" ><a href="#"  >
         {ImageData6 && ImageData6.map((val, ind) => {
           return this.renderFrostingImgaes(val, ind)
         })}
   </a>
         {/* <img id="img1" onClick={(e) => this.onPictureHandler(e, "imageTwo")} src="../images/ii.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/oo.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/im3.jpg"></img>  */}
         <br/> </h1> 
         
     }
    if (this.state.valvetfill) {
      content= false;
      fill2= false;
     fill3 = <h1 className="fill fill3"><a href="#"  >
        {ImageData5 && ImageData5.map((val, ind) => {
          return this.renderFillingsImgaes(val, ind)
        })}
   <button className="btn btf" onClick={this.toglevalvet1}>Frosting</button>{fros3}</a>
        {/* <img id="img1" onClick={(e) => this.onPictureHandler(e, "imageTwo")} src="../images/ii.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/oo.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageTwo")} id="img2" src="../images/im3.jpg"></img>  */}
        <br/> </h1> 
        
    }
    if(this.state.isOpen){
      order =<div style={{position: 'relative', zIndex:1}}>
   
      <div className="blur"></div>
        <div className="dialog">
          <div className="form">
             <label className="headf">Place an Order!</label><br/>
                       <label className="headin id"></label><br/>
                       <label className="headin">Name</label><br/>
                       <input className="input1" type="text" name="username" placeholder="Your Name" value={this.state.name} onChange={this.onChangeUsername}/>
                       <br/>
                       <label className="headin">Complete Address</label><br/>
                       <input className="input1" type="text" name="email" placeholder="Address" value={this.state.address} onChange={this.onChangeAddress} /> <br/>
                       <label className="headin">Contact number</label><br/>
                     <input className="input1" type="text" placeholder="Phone Number" value={this.state.contact} onChange={this.onChangeContact} /> <br/> 
                     <label className="headin">Delivery date</label><br/>
                     <input className="input1" type="text" placeholder="On which day you want?" value={this.state.deldate} onChange={this.onChangeDeldate}/> <br/> 
                     <label className="headin">Delivery time</label><br/>
                     <input className="input1" type="text" placeholder="At which time you want?" value={this.state.deltime} onChange={this.onChangeDeltime}/> <br/> 
                     <label className="headin">Quantity</label>
                       <a href="#"  >  <i class="fas fa-minus-circle inc"></i></a><div className="count">1</div><a href='#'  ><i class="fas fa-plus-circle plus"></i></a>
                        <label className="pond">Weight</label> <a href="#"  ><i class="fas fa-minus-circle inc"></i></a><div className="count" >2</div><a href='#'  ><i class="fas fa-plus-circle plus"></i></a>
                       
                       <label  className="amount">Total amount: {this.state.total_amount}</label> <br/>
                       </div>      
            <button className="btn btn-success qorder" onClick={this.onSubmit}>Order</button>
            
             <button className="btn btn-danger qorder corder" onClick={this.onClose}>Close</button>
   
            
        </div>
          
                 </div>  
    }
   
return (<div>
      <h2 className=" container Head">CUSTOMIZE YOUR CAKE EASILY!</h2>
      <br /><br />
      <input class="cakeT" type="text" placeholder="Type cake writeup here!" value={this.state.write} onChange={this.onChangeWrite}/>
     <button className="btn but" onClick={this.onOrder} >Order Now</button> 
    {order}
                  <br/>
      <div className="order">
        {this.state.imageOne && <img className="imgf"  src={this.state.imageOne} alt="" />}
        {this.state.imageTwo && <img className="imgf"  src={this.state.imageTwo} alt="" />}
        {this.state.imageThree && <img className="imgf" src={this.state.imageThree} alt="" />}
      </div>
      <button className="btn btn2" onClick={this.toggle}>Flavours</button>
      {this.state.on && <h1 > <a href="#" >
      {ImageData && ImageData.map((val, ind) => {
          return this.renderFlavoursImgaes(val, ind)
        })}
      {/* <img onClick={(e) => this.onPictureHandler(e, "imageOne")} id="img1" src="../images/ii.jpg"></img><img onClick={(e) => this.onPictureHandler(e, "imageOne")} id="img2" src="../images/oo.jpg"></img> <img onClick={(e) => this.onPictureHandler(e, "imageOne")} id="img2" src="../images/im3.jpg"></img>  */}
 <br/><button className="fil btn" onClick={this.toggleHandler}>Filling</button>  <button className="fil btn" onClick={this.togleeHandler}>Filling</button>  <button className=" btn f3" onClick={this.toglevalvet}>Filling</button> {content} {fill2} {fill3} </a></h1> }
      <br />
      {/* <button className="btn btn2" onClick={this.toggleHandler}>Fillings</button> <br />
      {content} */}
     
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* <br /><br /><br /><br /><br /><br />
      <input class="cakeT" type="text" placeholder="Type cake writeup here!" /><button className=" btn btn-success fin">Selection Done</button>
      <br /><br /><br /><button className=" btn but" >Order Now</button> <br /><br /> */}
    </div>

    );
  }

}

