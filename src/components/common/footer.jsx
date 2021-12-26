import React, { Component } from 'react';
import Social from './social';

class Footer extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        return(
            <div className="home">
                 <Footersub />
            </div>
        )
    }
}



function Footersub(){
    return(
        <div className="footer mt-5 p-3" >
            <div className="container">
                <div className="row">
                    <div className="col-md-3  ">
                        <br />
                        <img src="/images/logo.png" className='mylogo  d-flex align-self-center' alt=""  />  
                        <span className='t6 bold'>motto here</span>
                        

                    </div>
                    <div className="col-12 col-md-3 t4 terms">
                        <a href="/">
                            Email: Email@gmail.com
                        </a>
                        <br />
                        <a href="/">
                            Help
                        </a>
                        <br />
                        <a href="/contactus">
                            Contact us
                        </a>
                        <br />
                        <a href="/aboutus">
                            About us
                        </a>
                    </div>
                    <div className="col-12 col-md-3 t4 terms">
                        <a href="/">
                            Terms of services
                        </a>
                        <br />
                        <a href="/">
                            Privacy policy
                        </a>
                    </div>
                   
                    <div className=" col-12 col-md-3 ">
                       <Social />
                    </div>
                </div>
                <div className="copyright col-12 mt-3 text-center t5">
                Copyright @ 2021: our ngo site.com.my
                </div>
            </div>
        </div>
    )
}



export default Footer;