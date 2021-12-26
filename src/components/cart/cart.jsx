import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Row} from 'reactstrap';
import Payment from '../common/paymentproceed';
import Table from '../common/tabledata';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    handleSubmit=(e)=>{
     
    }

    render() { 
        return ( 
            <div className="cart mt-5">
               
                <div className="container">
                    <div className="row">
                        <span className='t2' >
                            Cart
                        </span>
                        <hr />
                    </div>
                    <div className="row">
                        <table className="col-12 col-sm-12 col-md-12 text-center">
                            <Table item='3' />
                        </table>
                       {/*  <div className="col-sm-12 col-md-3 text-center">
                            <Payment />
                        </div> */}
                    </div>
                    
                </div>

            </div>
         );
    }
}

function Tabledata() {
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
        
        </tr>
        <br />
        </>
       
     );
}


export default Cart;