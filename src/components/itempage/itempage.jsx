
import React, {Component, useContext } from "react"
import Cardbox from "../common/cardbox";
import Carousel from 'react-elastic-carousel';
import { Context } from "../../contextapi/context";
import Carouselcardbox from "../common/carouselcardbox";
import SearchBox from "../common/searchbox";
import { Button } from "reactstrap";


const breakPoints=[
    {width:1, itemsToShow:1},
    {width:600, itemsToShow:2},
    {width:868, itemsToShow:3},
]

class Itempage extends Component {
    static contextType=Context
    constructor(props) {
        super(props);
        this.state = { 
          
         }
    }


    render() { 

        let items=this.context.cardstate
        let featured=items.filter(item=>item.featured==true)
        /* let men=items.filter(item=>item.gender=='male')
        console.log(men) */
       


        return(

            <div className="container men  ">
                <SearchBox />

               

                <br /><br /><br />

                <div className="row p-3">
                    <div className="col-md-6">
                        <span className=" t5">
                            *A note may be written here or sth else
                        </span>
                    </div>
                    <hr />
               </div>
                <div className="d-flex flex-wrap" >
                        <div className="itemimage col-12 col-md-6 p-1">
                            <img src="/images/male.jpg" className="bg-secondary p-1" alt="" />
                            <div className="itemotherdescp col-12 col-md-3 mt-2">
                                <div className="itemsubimages">
                                    <img src="/images/male.jpg" className="col-4 border" alt="" />
                                    <img src="/images/male.jpg" className="col-4 border" alt="" />
                                    <img src="/images/male.jpg" className="col-4 border" alt="" />
                            
                                </div>
                            </div>
                        </div>
                        <div className="itemdescp col-12 col-md-5 p-4 " >
                            <div className="item-name t3">
                                <span>Fabric cotton Name is written here.</span>
                            </div>
                            <div className="item-rating ">
                                <span>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star gray"></i>
                                </span>
                                <span className="m-3">
                                    30 Ratings
                                </span>
                            </div>
                            <br />
                            <div className="brandname t4">
                                Brand : Brand name
                            </div>
                            <br />
                            <div className=" t3">
                                About this :
                                <br />
                                <span className="t5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio amet praesentium adipisci quas modi quisquam totam sunt tenetur in!
                                </span>
                            </div>
                            <br />
                            <div className="price">
                                <span className="t1">MYR: 2000</span>
                                <span className="m-2 t3"> 40 % off</span>
                                <br />
                                <span className="t3 text-secondary">MYR: 3600</span>

                            </div>
                            <br />
                            <div className="smalltext t5">
                                <div className="available">
                                    <span>Availability:</span>
                                    <span className="m-2"> Yes/In stock </span>
                                </div>
                                <div className="available">
                                    <span>Category:</span>
                                    <span className="m-2"> Accessories </span>
                                </div>
                                <div className="available">
                                    <span>Free shipping:</span>
                                    <span className="m-2"> Yes </span>
                                </div>
                            </div>
                            <br />
                            <div className="select-color">
                                Select Color:
                                <span className="bgray rounded m-4">
                                    <i className="fa fa-circle m-2 red"></i>
                                    <i className="fa fa-circle m-2 black"></i>
                                    <i className="fa fa-circle m-2 white"></i>
                                </span>

                            </div>
                            <br />
                            <div className="d-flex flex-wrap">
                                <div className="size t5">
                                    Size 
                                    <span className="m-2"> 
                                        <select>
                                            <option>SM</option>
                                            <option selected >L</option>
                                            <option  >XL</option>
                                        </select>
                                    </span>
                                </div>
                                <div className="quantity t5">
                                    Quantity 
                                    <span className="m-2"> 
                                        <select>
                                            <option selected>1</option>
                                            <option  >2</option>
                                            <option  >3</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                            <div className=" m-2">
                                <Button onClick={()=>{alert("added")}} className="m-2 bg-info bold black" >Add to Cart</Button>
                                <Button  href="/checkout/:id" className="bg-warning black bold" >Buy now</Button>
                            </div>

                        </div>

                        <div className="total-description m-5">
                            <p className="t4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores quibusdam pariatur voluptas aut natus officia ad recusandae nostrum exercitationem.
                            </p>
                            <p className="t5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores quibusdam pariatur voluptas aut natus officia ad recusandae nostrum exercitationem.
                            </p>
                            <p className="t5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores quibusdam pariatur voluptas aut natus officia ad recusandae nostrum exercitationem.
                            </p>
                        </div>

                       

                       
                </div>
                <br />
                <div className="review">
                    <div className="ratingbox m-2 row  ">
                        <div className="col-6 col-md-3 border p-5 pt-0 pb-0 text">
                            <span className="t1 ">4/5</span>
                            <br />
                                <span>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star gray"></i>
                                </span>
                                <br />
                            <span className="t5 ">40 ratings</span>

                        </div>
                        <div className="col-12 col-md-6"></div>
                        <div className="col-6 col-md-3 border p-3 text-center">
                        
                            <span className="t1 ">+</span>
                            <br />
                            <span className="t5 ">Add review</span>
                       
                        </div>
                       
                    </div>

                    <div className="col-12">
                        <Reviewtext />
                        <Reviewtext />
                        <Reviewtext />
                    </div>
                        
                </div>
               
                

                <br /><br /><br />
                <div className="row p-3">
                <div className=" col-md-6">
                    <span className=" t2">
                        See more
                    </span>
                </div>
                <hr />
               </div>
                <div className="row">
                        <Carouselcardbox items={featured} />
                </div>

         
                
               
            </div>
        );
    }



   
    
}

function Reviewtext() {
    return(
        <div className="border m-3 p-3">
                            <div className="d-flex justify-content-between ">
                                <span>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star gray"></i>
                                </span>
                                <span className="t5">
                                    Date; 2055/5/6
                                </span>
                            </div>
                            <div className="p-3 pt-0 pb-0">
                            <span className="t5">username</span>
                            <br />
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, magnam.
                            </span>
                            </div>
                        </div>
    )
}

export default Itempage;