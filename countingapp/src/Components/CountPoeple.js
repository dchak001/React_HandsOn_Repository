import React,{ Component } from "react";


export class CountPeople extends Component
{
    constructor()
    {
    super();
    this.state={
        entrycount:0,
        exitcount:0,
    }
    }
    
    updateEntry()
    {
        this.setState((prevState)=>{
            return {entrycount:prevState.entrycount+1}
            
            });
    }

    updateExit()
    {
        this.setState((prevState)=>{
            return {exitcount:prevState.exitcount+1}
        });
    }
render(){

    return(
        <div style={{marginTop:'400px',marginLeft:'50px'}}>
            <span style={{marginRight:'400px' }}>
                <button onClick={this.updateEntry.bind(this)} style={{backgroundColor:"green"}}>
                Login
                </button> {this.state.entrycount} people Entered!!
            </span>
            <span>
                <button onClick={this.updateExit.bind(this)}style={{backgroundColor:"green"}}>
                Exit
                </button> {this.state.exitcount} people Left!!
            </span>
        </div>
    );

}
} 