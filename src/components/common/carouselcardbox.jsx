import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import {Context} from '../../contextapi/context'
import Carousel from 'react-elastic-carousel';


const breakPoints=[
    {width:100, itemsToShow:1},
    {width:600, itemsToShow:2},
    {width:868, itemsToShow:3},
]


function Carouselcardbox(props){
    console.log(props.items)
    const item=props.items
    const carditems=item.map(item=>{
        return(
            
            <div  className="cardboxtop col-11 bg-light " key={item._id} >
                <div className="cardbox    ">
                        <div className="cardimage">
                        <a href="/" className=" " >
                            <img src={item.cardimage} className="" alt="" />
                        </a>
                        </div>
                        <div className=" container-fluid pt-2 ">
                            <div className=" cardinfo d-flex flex-wrap ">
                                <div className="col-8 cardtxtdescp">
                                    <div className="cardhead t4">
                                        <span>{item.cardhead} </span>
                                    </div>
                                    <div className="carddescp ">
                                        <span className="t6 bold" >{item.carddescription}
                                        </span> 
                                        <div className="t5">
                                            <span >{item.cardcost}</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="colors bgray rounded" >
                                        <i className="m-1 fa fa-circle"  style={{color: `${item.cardcolor1}`}} ></i>

                                        <i className="m-1 fa fa-circle"  style={{color: `${item.cardcolor2}`}} ></i>

                                        <i className="m-1  fa fa-circle"  style={{color: `${item.cardcolor3}`}} ></i>
                                    </div>
                                    <div className="options">
                                        {
                                            item.cardverified ?
                                            <i className="m-3  fa fa-check-circle green "></i>
                                            :
                                            <i className="m-3  fa fa-check-circle gray "></i>

                                        }
                                        
                                        <i className="m-2 fa fa-ellipsis-v gray"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    })

    return(
       <>
        <Carousel breakPoints={breakPoints} >
            {carditems}
        </Carousel>
        
       </>
    )
}

export default Carouselcardbox;



/* 
 <div  className="col-11  " >
            <div className="cardbox ">
                <Link to="/" className="cardimage " >
                    <img src="/images/a.jpg" className="" alt="" />
                </Link>
                <div className="container">
                    <div className="row cardinfo p-2 bg-light">
                        <div className="col-8 cardtxtdescp">
                            <div className="cardhead t4">
                                <span>{item.cardhead} </span>
                            </div>
                            <div className="carddescp ">
                                <span className="t6 bold" >{item.carddescription}
                                </span> 
                                <div className="t5">
                                    <span >{item.cardcost}</span>
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
*/