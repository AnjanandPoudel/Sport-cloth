import React, {  } from 'react';
import { useContext } from 'react/cjs/react.development';
import { Context } from '../../contextapi/context';
/* import { Button, Col, Input, Label, Row } from 'reactstrap';
import Addnew from '../common/addnew_button';
import Cardbox from '../common/cardbox'; */



function About(){
    let a=useContext(Context).aboutstate
    console.log(a)
    return(
        <div className="container mt-5" >
            <div className="row">
                <span className="t2">
                About us
                </span>
               
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <span className="abouttitle t3">
                        {a.aboutustexttitle}
                    </span>
                    <br /> <br />
                    <span className="abouttext t4">
                    {a.aboutustext}

                    </span>
                    <br /> <br />
                    <span className="abouttext2 t4">
                    {a.aboutustexttwo}
                    </span>
                </div>
                <div className="col-12 col-md-6">
                    <img className="rounded" src={a.aboutusimage} alt="" />    
                </div>          
            </div>
            <div className="mt-5 hel">
                <a href={a.aboutuslink}>Link to more description</a>
            </div>
            
        </div>
    )
}


export default About;