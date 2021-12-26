import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Row} from 'reactstrap';
import Payment from '../common/paymentproceed';
import Table from '../common/tabledata';
import Tabledata from '../common/tabledata';


class Userpage extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    handleSubmit=(e)=>{
     
    }

    render() { 
        return ( 
            <div className="container  pt-5">
                <div className="row">
                    <span className="t2">
                    My Account
                    </span>
                </div>
                <hr />
                <div className="userbox row">
                    <div className="usersection col-12 col-sm-6 col-md-2 p-2 ">
                        <div className="userimage">
                            <img src="/images/male.jpg" alt="" />
                        </div>
                        <div className="userinfo t5 ">
                            <div className="text-center">
                            <span className='smalltext '>Hello Username</span>
                            </div>
                            <br /> <br />
                            <div className="t4">
                                Manage account
                            </div>
                            <div className="t5"> <a href="/">My Profile</a> </div>
                            <div className="t5"> <a href="/">Change Profile</a> </div>
                            <div className="t5"> <a href="/">My Payments</a> </div>
                            <div className="t5"> <a href="/">Coupons</a> </div>
                            <br />
                            <div className="t4">
                                My Orders
                            </div>
                            <div className="t5"> <a href="/">Cancel Order</a> </div>
                            <div className="t5"> <a href="/">Return Order</a> </div>
               
                            <br />
                            <div className="t4">
                                My Wishlists
                            </div>
                            <div className="t5"> <a href="/">See my Wishlists</a> </div>
               
                            <br />
                            <Button className='bg-warning text-dark bold' >See discounts on Products</Button>

                        </div>
                    </div>
                    <div className="row col-md-10">
                    <div className="col-md-5 userinfobox d-flex justify-content-between p-3">
                        <div className="">
                        <div className="t2">
                        Address Information
                        </div>
                        <div className="t5">
                            <span>
                            Default Shipping address
                            </span>
                        </div>
                        <div className="t4">
                            <span>
                            Email: example@examp.com                            
                            </span>
                        </div>
                        <div className="t4">
                            <span>
                            Phone no: 9808909900                      
                            </span>
                        </div>
                        </div>
                        <div className="">
                            <i className="fa fa-edit"></i>
                        </div>
                    </div>
                    <div className="col-md-5 userinfobox d-flex justify-content-between p-3">
                        <div className="">
                        <div className="t2">
                        Personal information
                        </div>
                        <div className="t4">
                            <span>
                            Name: Firstname lastname
                            </span>
                        </div>
                        <div className="t4">
                            <span>
                            Email: example@examp.com                            
                            </span>
                        </div>
                        <div className="t4">
                            <span>
                            Phone no: 9808909900                      
                            </span>
                        </div>
                        </div>
                        <div className="">
                            <i className="fa fa-edit"></i>
                        </div>
                    </div>
                    <div className="p-0 col-md-12">
                            <div className=" t3 text-start bold: p-2 mt-2">
                                Your Previous Orders:
                            </div>
                        <table className="col-12 col-sm-12 col-md-11 text-center">
                            
                            <Table />
                        </table>
                    </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Userpage;