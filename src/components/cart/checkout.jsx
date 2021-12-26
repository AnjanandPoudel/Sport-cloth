import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Row} from 'reactstrap';
import Payment from '../common/paymentproceed';
import Table from '../common/tabledata';
import Tabledata from '../common/tabledata';


class Checkout extends Component {
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
                            Checkout now
                        </span>
                        <hr />
                    </div>
                    <div className="row">
                       <table className="col-12 col-sm-12 col-md-9 text-center">
                            <Table item="1" />
                        </table>
                        <div className="col-sm-12 col-md-3 text-center">
                            <Payment />
                        </div>
                    </div>
                    
                </div>

            </div>
         );
    }
}




export default Checkout;