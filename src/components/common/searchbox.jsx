import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Row} from 'reactstrap';


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.search.value)
        alert(this.search.value)
    }

    render() { 
        return ( 
            <div className="searchbox col-10 col-sm-9 col-md-6">
                <Form onSubmit={(value)=>{this.handleSubmit(value)}}>
                    <FormGroup>
                        <Row>
                            <Col className='d-flex' >
                                <Input md={10} className='form-control bold ' name='search' innerRef={(input)=>{this.search=input}} placeholder='search' />
                                <button md={2} className="searchbtn black "> <i className="fa fa-search"></i> </button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </div>
         );
    }
}
 

export default SearchBox;