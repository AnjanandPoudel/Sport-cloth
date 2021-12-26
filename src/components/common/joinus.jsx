import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
/* import Cardbox from '../common/cardbox';
 */



class Joinus extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.email.value)
    
    }
    render() { 


            return(
                <div className="container mt-5" id="contactus">
                    <div className="contact t2 bold m-1">
                        Join us now
                    </div>
                    <div className="contactuspage row m-2">
                            <div className="m-1 col-10 t4 bold">
                                You will get 20% off if you join before december.
                            </div>
                            <Form className='col-10 col-md-6' >
                                <FormGroup>
                                    <Row>
                                        <Col className='d-flex' >
                                            <Input md={9} className='form-control bold ' name='search' innerRef={(input)=>{this.search=input}} placeholder='search' />
                                            <button md={3} className=" black bg-info rounded"> Submit </button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Form>

                       {/*  <div className="col-sm-12 col-md-6">
                            <iframe title='googlemaps' className="googlemaps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14069.72579684687!2d84.08917874760746!3d28.163791344911825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1638778963814!5m2!1sen!2snp"
                                height="100%" width="100%"   allowFullScreen="" loading="lazy"></iframe>
                            
                        </div> */}

                    </div>
                </div>
         );
    }
}
 
export default Joinus;
