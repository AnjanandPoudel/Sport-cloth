import React, { Component } from 'react';
import { Button, Col, Input, Label, Row } from 'reactstrap';
/* import Cardbox from '../common/cardbox';
 */



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.firstname.value,this.lastname.value,this.email.value,this.number.value,this.message.value)
    
    }
    render() { 


            return(
                <div className="container mt-5" id="contactus">
                    <div className="contact t1 m-1">
                    Contact us
                    </div>
                    <div className="contactuspage row m-2">
                            
                            <form className="col-sm-12 col-md-6" onSubmit={(value)=>this.handleSubmit(value)} >
                            <Row className="form-group">
                                <Col md={6}>
                                    <Label for="firstname">FirstName:</Label>
                                    <Input  type="text"   className="form-control " id="firstname" placeholder="first name" name="firstname" 
                                    innerRef={(input)=>this.firstname=input}
                                    required />
                                </Col>
                                <Col md={6}>
                                    <Label for="lastname">LastName:</Label>
                                    <Input  type="text"   className="form-control " id="lastname" placeholder="last name" name="lastname"
                                    innerRef={(input)=>this.lastname=input}
                                     required />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={8}>
                                    <Label for="email">Email:</Label>
                                    <Input  type="email"   className="form-control " id="email" placeholder="email" name="email"
                                    innerRef={(input)=>this.email=input} required />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={8}>
                                    <Label for="number">Phone no:</Label>
                                    <Input  type="number"   className="form-control " id="number" placeholder="number" name="number"
                                    innerRef={(input)=>this.number=input} required />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={8}>
                                    <Label for="message">Message/Feedback</Label>
                                    <Input  type="textarea"   className="form-control" rows={5} id="message" placeholder="message"
                                    innerRef={(input)=>this.message=input} name="message"  />
                                </Col>
                            </Row>
                            <Button type="submit"   className="btn btn-default mt-3">Submit</Button>
                        </form>
                        <div className="col-sm-12 col-md-6">
                            <iframe title='googlemaps' className="googlemaps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14069.72579684687!2d84.08917874760746!3d28.163791344911825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1638778963814!5m2!1sen!2snp"
                                height="100%" width="100%"   allowFullScreen="" loading="lazy"></iframe>
                            
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default Contact;
