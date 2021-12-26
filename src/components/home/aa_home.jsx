import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Row} from 'reactstrap';
import Social from '../common/social';
import Cardbox from '../common/carouselcardbox';
import Contact from './c_contact';
import Joinus from '../common/joinus';
import Secondarymain from './b_seconmain';
import Addnew from '../common/addnew_button';
import { Context } from '../../contextapi/context';
import SearchBox from '../common/searchbox';


class Home extends Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            
        }
    }

    
    render(){
        let item=this.context.homestate
        console.log(item)

        return(
            <div className="home">
                <Main item={item} />
                <Secondarymain item={item} />
                <Joinus />
                
                
               
                
            </div>
        )
    }
}


function Main(props){
    return(
        <div className="">
            <div className="backgroundpic">
                <img src={props.item.backgroundimage} alt='pic' />
            </div>
            <div className="upperdiv">
            </div>
            <div className="container">
                <div className="row">
                    <SearchBox />
                </div>
                <div className="row text-center dboxshadow">
                    <span className='t2 white bolder bg-text'> {props.item.backgroundtext} </span>
                </div>
                <div className="row text-center ">
                    <div className="">
                        <Button  href="/" className='dark col-6 bg-black  col-md-3 bold t2 p-3 m-1'> Shop now</Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}





function Services(){
    const item=''
    return(
        <div  className="col-11  " >
            <div className="cardbox bg-dark ">
                <a href="/" className="cardimage " >
                    <img src="/images/a.jpg" className="" alt="" />
                </a>
                <div className="container">
                    <div className="row cardinfo p-2 bg-dark white">
                        <div className="col-8 cardtxtdescp">
                            <div className="cardhead t4">
                                <span>{item.cardhead} </span>
                            </div>
                            <div className="carddescp ">
                                <span className="t6 bold" >item.carddescription
                                </span> 
                                <div className="t5">
                                    <span >item.cardcost</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="colors bgray rounded" >
                                <i className="m-1 fa fa-circle"  style={{color: `${item.cardcolor1}`}} ></i>

                                <i c className="m-1 fa fa-circle"  style={{color: `${item.cardcolor2}`}} ></i>

                                <i className="m-1  fa fa-circle"  style={{color: `${item.cardcolor3}`}} ></i>
                            </div>
                            <div className="options">
                                <i className="m-3  fa fa-check-circle green "></i>
                                <i className="m-2 fa fa-ellipsis-v gray"></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}




export default Home;