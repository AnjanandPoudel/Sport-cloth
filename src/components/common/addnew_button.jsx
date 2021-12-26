/* import axios from "axios";
import React from "react";
import { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";


class Addnew extends Component{
    constructor(){
        super()
        this.state={
            open:false,
            select:'event'
        }
    }
     
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            select:event.target.value
        })
    }
    handleButtonClick=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.title.value,this.description.value,this.file.value,this.state.select);

        axios({
            method:'POST',
            url:'url',
            headers:{
              Authorization:'localstorage',
          },
          credentials: 'same-origin'
          })
          .then(response=>{
            return response.data
          })
          .then(res=>{
            console.log(res)
            if(res.success){
                localStorage.setItem('token',res.token)
                localStorage.setItem('creds',JSON.stringify(res.user))
                window.location.reload()
    
            }
            else{
                console.log('Error in success')
            }
          })
          .catch(err=>{
            console.log(err+"Ok error")
          })
    }    



    render(){
        return(
            <div className="">
                 <Button onClick={this.handleButtonClick} className="p-2 m-2 col-10" height="20"> Add new </Button>
                 <Modal className="black" isOpen={this.state.open} toggle={this.handleButtonClick}>
                     <ModalHeader  toggle={this.handleButtonClick}>
                         Add new event/gallary
                     </ModalHeader>
                     <ModalBody>
                         <Form onSubmit={(values)=>this.handleSubmit(values)} >
                             <FormGroup>
                                 <Label htmlFor="title">Title:</Label>
                                 <Input placeholder="title" id="title" name="title" innerRef={(input)=>this.title=input} required />
                             </FormGroup>
                             <FormGroup>
                                 <Label htmlFor="description">Description:</Label>
                                 <Input type="textarea" placeholder="Type description" rows={5} id="description"  innerRef={(input)=>this.description=input} name="description"  />
                             </FormGroup>
                             <FormGroup>
                                 <Label htmlFor="file">Choose a file:</Label>
                                 <Input type="file" placeholder="Type description" id="file" name="file" innerRef={(input)=>this.file=input}  />
                             </FormGroup>
                             <FormGroup>
                                 <Label htmlFor="select">Choose one : </Label>
                                 <select name="select" value={this.state.select} onChange={this.handleChange}>
                                     <option selected >Event</option>
                                     <option>Gallary</option>
                                 </select>
                             </FormGroup>
                             <Button type="submit">Submit</Button>
                         </Form>
                     </ModalBody>
                 </Modal>
            </div>
        )
    }

   
}


export default Addnew; */