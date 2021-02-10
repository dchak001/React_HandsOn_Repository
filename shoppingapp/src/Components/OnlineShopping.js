import React,{Component} from 'react';
import {Cart} from './Cart';
import '../Stylesheets/mystyle.css'
import '../App.css'

export class OnlineShopping extends Component
{
    render()
    {
        const CartInfo=[{itemname:"laptop",price:80000},
        {itemname:"TV",price:120000},
        {itemname:"Washing Machine",price:50000},
        {itemname:"Mobile",price:30000},
        {itemname:"Fridge",price:70000}

        ];
        return(
            
            <div className="App">
                <h1>Items Ordered :</h1>

                <table className="mydiv" >
                    <tr >
                        <th>Name</th>
                        <th>Price</th>
                        
                    </tr>
                    
                    <Cart item={CartInfo} />
                </table>
                
               
            </div>
           
        );
    }
}