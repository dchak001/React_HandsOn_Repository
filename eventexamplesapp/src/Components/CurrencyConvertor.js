import React from 'react'

export  class CurrencyConvertor extends React.Component
{
    convertCurrency=()=>
    {
        
       alert(`The value is Indian Rupees is ${(document.getElementById("amt").value*63.84).toFixed(2)}`);
    }
    render(){
    return(
        <div>
           <div> Amount:<input id="amt" type="number"></input></div>
           
            <div>Currency:<input type="text"></input></div>
            <button onClick={this.convertCurrency}>Submit</button>
        </div>
    );
    }
}