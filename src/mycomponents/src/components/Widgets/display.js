import React, { Component } from 'react';

export class Back extends Component {
    constructor(props) {
     super(props);
        this.state = {
            items: [],
            isloaded: false,
        }
    }

    componentDidMount() {

        fetch('http://localhost/my.php')
            .then(res => res.json())
           
            .then(json => {
                this.setState({
                    isloaded: true,
                    items: json,

                })
            });
            
        }     
    render() {
        var { isloaded, items } = this.state;
        if (!isloaded) {
            return (<div>Loading.....</div> );
        }
        else {
            return ( <div>
                <table border="2">
                    <th>
                        prod_id
                    </th>
                    <th>
                        prod_name
                    </th>
                    <th>
                        prodprice
                    </th>
                    <th>
                        prod_qty
                    </th>
                    {items.products.map(item =>(
                        <tr>
                            <td>{item.prod_id} </td> 
                            <td>{item.prod_name} </td> 
                            <td>{item.prodprice} </td> 
                            <td>{item.prod_qty} </td>
                        </tr> 
                    ))}
                </table>
            </div> );
        }
    }
} 
export default Back;