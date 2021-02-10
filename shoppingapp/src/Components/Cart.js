import React,{ Component } from "react";

export class Cart extends Component{
render()
{
    return(
        <>
            {this.props.item.map(item=>
                {
                    return(
                        < >
                        <tr>
                            <td>{item.itemname}</td>
                            <td>{item.price}</td>
                        </tr>
                        </>
                    );
                }
                )}
        </>
    );
}
}