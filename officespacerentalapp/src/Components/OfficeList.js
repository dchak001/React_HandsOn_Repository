import dimg from './chennai.jfif'
import simg from './saltlake.jfif'
import uimg from './unitech.jfif'

export const OfficeList=function()
{

    let ofcList=[
        {src:dimg,name:"DBS",rent:50000,address:"Chennai"},
        {src:uimg,name:"Unitech",rent:40000,address:"Kolkata"},
        {src:simg,name:"Saltlake",rent:65000,address:"Kolkata"}
    ]

    
    
    return(
        <div>
           {
               ofcList.map(ofc=>
               {
                //    let colors=[]
                //    if(ofc.rent<=60000)
                //     colors.push("red");
                //   else
                //     colors.push("green")
                   return(
                        <>
                        <img src={ofc.src} width="25%" height="25%"></img>
                        <h1>Name:{ofc.name}</h1>
                        <h3 style={{color:ofc.rent<=60000?"red":"green"}}>Rent:{ofc.rent}</h3>
                        <h3>Address:{ofc.address}</h3>
                        </>
                   );
               })
           }
        </div>
    );


}