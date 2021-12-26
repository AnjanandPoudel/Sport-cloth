import React, {  } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
/* import { useContext } from 'react/cjs/react.development';
import { Context } from '../../contextapi/context'; */
/* import { Button, Col, Input, Label, Row } from 'reactstrap';
import Addnew from '../common/addnew_button';
import Cardbox from '../common/cardbox'; */



function Payment(){
    
    return(
        <div className="paymentbox mt-2 " >
           <div className="proceedtopay p-2 m-1">
               <span className="t4 bold hel">
                   Proceed to pay
               </span>
           </div>
           <div className="address t5 p-3 text-start hel">
               <div> Username : <span>Username</span> </div> 
               <div> Shipping address : <span>Address is this</span> </div> 
               <div> Phone no  : <span>0990809809</span> </div> 
               <div> Email  : <span>EmailAddress</span> </div> 
           </div>
           <div className="ordersummary ">
               <h6 className='bold hel'>Order summary</h6>
               <div className="itemsinfo t5">
                  <span>Item price :</span> <span>MYR 2000</span>
               </div>
               
               <div className="itemsinfo t5">
                  <span>Quantity :</span> <span> 20</span>
               </div>
               <div className="itemsinfo t4 bold hel">
                  <span>Total Price :</span> <span>MYR 40000</span>
               </div>
               
           </div>
           <br />

            <Form className=' pt-0 pb-0'>
                <FormGroup>
                    <Row>
                        <Col className='d-flex flex-wrap' >
                            <button  className="bg-dark text-light "> Coupon </button>
                            <Input  className='form-control bold couponinputwidth '  />
                        </Col>
                    </Row>
                </FormGroup>
            </Form>

            <div className="paymentmethod d-flex t5">
                <button className='m-1 '>Online Payment</button>
                <button className='m-1'>Cash on Delivery</button>
            </div>
        </div>
    )
}


export default Payment;