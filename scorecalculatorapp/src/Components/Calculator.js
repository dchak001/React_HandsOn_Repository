import '../Stylesheets/mystyle.css'

const decimalToPercent=(decimal)=> {
    return (decimal.toFixed(2)+"%");
}

const calcScore =(total,goal)=>
{
    return decimalToPercent(total/goal);
}


export const CalculateScore=({name,school,total,goal})=>
{
    return (
        <div className="formatstyle">
            <h1><font color="Brown">Student details</font></h1>
            <div className="name">
                <b><span>Name:</span></b>
                <span>{name}</span>
            </div>
            <div className="school">
                <b><span>School:</span></b>
                <span>{school}</span>
            </div>
            <div className="total">
                <b><span>Total:</span></b>
                <span>{total}</span>
                <span>Marks</span>
            </div>
            <div className="score">
                <b><span>Score:</span></b>
                <span>{calcScore(total,goal)}</span>
            </div>
        </div>
    );
}