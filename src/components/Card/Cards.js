import React, {Component} from 'react'
import Card from './CardUI';

class Cards extends Component{
    render()
    {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgscr={'../images/1.jpg'}/>

                    </div>
                    <div className="col-md-3">
                        <Card imgscr={'../images/4.jpg'}/>

                    </div>
                    <div className="col-md-3">
                        <Card imgscr={'../images/5.jpg'}/>

                    </div>
                    <div className="col-md-3">
                        <Card imgscr={'../images/2.jpg'}/>

                    </div>
                    
                    
                </div>
            </div>
        )
    }

}


export default Cards;