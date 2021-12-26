
import React, {Component, useContext } from "react"
import Carouselcardbox from "../common/carouselcardbox";
import Carousel from 'react-elastic-carousel';
import { Context } from "../../contextapi/context";


const breakPoints=[
    {width:1, itemsToShow:1},
    {width:600, itemsToShow:2},
    {width:868, itemsToShow:3},
]

class Secondarymain extends Component {
    static contextType=Context
    constructor(props) {
        super(props);
        this.state = { 
            featureditem:[],
            men:[],
            women:[]
         }
    }


    render() { 

        let items=this.context.cardstate
        let topchoice=items.filter(item=>item.topchoice==true)
        console.log(topchoice)
        let men=items.filter(item=>item.gender=='male')
        console.log(men)
        let women=items.filter(item=>item.gender=='female')
        console.log(women)


        return(

            <div className="container-fluid secondarymain ">
                <br /><br /><br />

               <div className="row ">
                <div className="col-md-6">
                    <span className=" t2">
                        Top Choice's
                    </span>
                </div>
                <hr />
               </div>
                <div className="row">
                        <Carouselcardbox items={topchoice} />
                </div>

                <br /><br /><br />

                <div className="row">
                <div className="col-md-6">
                    <span className=" t2">
                        Men
                    </span>
                </div>
                <hr />
               </div>
                <div className="row">
                        <Carouselcardbox items={men} />
                </div>

                <br /><br /><br />

                <div className="row ">
                <div className="col-md-6">
                    <span className=" t2">
                        Women
                    </span>
                </div>
                <hr />
               </div>
                <div className="row">
                        <Carouselcardbox items={women} />
                </div>
                
               
            </div>
        );
    }



   
    
}

export default Secondarymain;