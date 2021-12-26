
import React from 'react'
import { Button } from 'reactstrap';

export function Tabledata() {
    return ( 
        <>
         <tr className='tabledata'>
            <td> 
                <div className="tableimage">
                    <img src="/images/male.jpg" alt="" /> 
                </div> 
            </td>
            <td> MYR 7899 </td>
            <td> 7 </td>
            <td >            
                <Button href="/checkout/:id" className='bg-info  bold btn-sm mb-1'> Add/Edit + </Button>
                <br /> 
                <Button href="/checkout/:id" className='bg-warning  bold btn-sm'> Checkout <i className='fa fa-arrow-right '></i> </Button>
            </td>
        </tr>
        
        </>
       
     );
}


function Table(props) {
    console.log(props)
    return (
        <>
                           {/*  <div className="carthead d-flex justify-content-between bold">
                                <span>Items</span>
                                <span>Quantity</span>
                                <span>Price</span>
                            </div>
                            <div className="carthead d-flex justify-content-between bold">
                                <span>Items</span>
                                <span>Quantity</span>
                                <span>Price</span>
                            </div> */}

                                <thead>
                                    <tr>
                                        <th>Items</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th></th>
                                    </tr>
                                    
                                    
                                </thead>
                                
                                <tbody>

                                   {props.item=='1'?
                                    <Tabledata />
                                   
                                :
                                <>
                                    <Tabledata />
                                    <Tabledata />
                                    <Tabledata />
                                </>
                                }
                              </tbody>

        </>
    )
}



export default Table
