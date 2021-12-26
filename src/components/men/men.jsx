
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

class Men extends Component {
    static contextType=Context
    constructor(props) {
        super(props);
        this.state = { 
          
         }
    }


    render() { 

        let items=this.context.cardstate
        let featured=items.filter(item=>item.featured==true)
        let men=items.filter(item=>item.gender=='male')
        console.log(men)
       


        return(

            <div className="container men  ">
                <SearchBox />

               

                <br /><br /><br />

                <div className="row p-3">
                <div className="col-md-6">
                    <span className=" t3">
                        Category : Men
                    </span>
                </div>
                <div className="col-md-6">
                    <span className=" d-flex justify-content-end flex-wrap t3">
                        <Button className="btn btn-sm bg-primary m-1" >Sort By</Button>
                        <Button className="btn btn-sm bg-primary m-1" >Filters</Button>
                    </span>
                </div>
                <hr />
               </div>
                <div className="d-flex flex-wrap" >
                        <Cardbox items={men} />
                </div>

                <br /><br /><br />
                <div className="row p-3">
                <div className="col-md-6">
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

export default Men;