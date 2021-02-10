import React from 'react'

export class Simple extends React.Component{


    constructor()
    {
        super();
        this.state={
            count:0
        }
    }
    handleInc =()=>
    {
        this.setState({
            count:this.state.count+1
        },()=>alert("Hello Member1"))
    }

    handleDec =()=>
    {
        this.setState({
            count:this.state.count-1
        },()=>alert("Hello Member1"))
    }

    welcomeHandler=(msg)=>
    {
        alert(msg)
    }

    onPress=()=>
    {
        alert("I am clicked")
    }

    render()
    {
        return(
            <div>
                {this.state.count}
              
               <div> <button  onClick={this.handleInc}>Increment</button></div>
               <div><button  onClick={this.handleDec}>Decrement</button></div> 
               <div><button  onClick={()=>this.welcomeHandler("welcome")}>Say Welcome</button></div> 
               <div> <button  onClick={()=>this.onPress}>Click on me</button></div>
            </div>
        );
    }
}