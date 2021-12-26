import { Collapse, NavbarToggler, NavItem ,Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, UncontrolledDropdown, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(){
        super()
        this.state={
            open:false,
            modalopen:false
        }
    }

    handlenavtoggle=()=>{
        this.setState({open:!this.state.open})
    }

    handleLoginClick=()=>{
        this.setState({
            modalopen:!this.state.modalopen
        })
    }

    render(){
        return(
            <div className="home">
                <Navbar color="" light expand="md sm" className="navbarflex container-fluid">
                    <NavbarBrand href="/home" > <img className='mylogo' src="/images/logo.png" alt="" /> </NavbarBrand>
                    <NavbarToggler onClick={this.handlenavtoggle}/>
                    <Collapse isOpen={this.state.open} navbar className="navbarflex">
                        <Nav  className="mr-5 " navbar >
                            <NavItem className="m-2">
                                <NavLink to="/home" onClick={this.handlenavtoggle}> 
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem className="m-2" onClick={this.handlenavtoggle}>
                                <NavLink to="/mencategory"> 
                                    Men
                                </NavLink>
                            </NavItem>
                           
                            <NavItem className="m-2" onClick={this.handlenavtoggle}>
                                <NavLink to="/womencategory"> 
                                    Women
                                </NavLink>
                            </NavItem>
                           
                            <NavItem className="m-2">
                                <NavLink to="/aboutus"> 
                                    About us
                                </NavLink>
                            </NavItem>
                            <div className="m-2">
                                <UncontrolledDropdown nav>
                                    <DropdownToggle tag="a" caret>
                                        <span className="bold pointer">Categories</span>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="/mencategory" >Men   </DropdownItem>
                                        <DropdownItem href="/womencategory">Women  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </Nav>
                    </Collapse>
                   
                        <NavLink to="/user" className="isubtext" > 
                            <i className="fa fa-user d-block p-1 "></i>
                            
                            <div className='t6 '>user</div>
                        </NavLink>
                   
                        <NavLink to="/cart" className="isubtext" > 
                            <i className="fa fa-user d-block  p-1"></i>
                            
                            <div className='t6'>cart</div>
                        </NavLink>
                   
                        {/* <NavLink to="/other" className="isubtext" > 
                            <i className="fa fa-sign-in d-block   p-1"></i>
                            
                            <div className='t6'>filter</div>
                        </NavLink> */}
                    
{/*                     <Button className="btn btn-success m-1 "  onClick={this.handleLoginClick} > <i className="fa fa-sign-in"></i> </Button>
 */}                </Navbar>
               
         {/*       <Modal isOpen={this.state.modalopen} toggle={this.handleLoginClick} className="p-5" >
                   <ModalHeader toggle={this.handleLoginClick} >
                           <p className="black pr-5">Login</p>
                   </ModalHeader>
                   <ModalBody className="p-5 black">
                            <Form action="/">
                                <FormGroup >
                                    <Label htmlFor="username" >Username:</Label> 
                                    <Input placeholder="username" id="username" name="username" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password:</Label>
                                    <Input placeholder="password" id="password" name="password" required />
                                </FormGroup>
                                <Button >Submit</Button>
                            </Form>
                   </ModalBody>
               </Modal> */}
            </div>
        )
    }
}

export default Header;