import React,{Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './home/aa_home';
import Header from './common/header';
import Footer from './common/footer';
import About from './aboutus/aboutus';
import Men from './men/men';
import Women from './women/women';
import Cart from './cart/cart';
import Checkout from './cart/checkout';
import Userpage from './user/userpage';
import Itempage from './itempage/itempage';


class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
      }
/*       
    onCourseClick(itemId){
      this.setState({selectedCourseId:itemId})
  }
 */
  
      render() {
        const Redirect=()=>{
          return(
           <div className="">
              <h1 className=" m50">
              Sorry, link not available
              </h1>
           </div>
          )
        }
       
      
       /*  const FooterPage=()=>{
          return(
            <div className="">
              
            </div>
          )
        } */
      
        return (
          <div className="" id="page-container">
           <div className="content-wrap">
           <Header />
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/home" element={ <Home /> } />
              <Route path="/mencategory" element={ <Men /> } />
              <Route path="/womencategory" element={ <Women /> } />
              <Route path="/aboutus" element={ <About /> } />
              <Route path="/cart" element={ <Cart /> } />
              <Route path="/clothes/:individualpage" element={ <Itempage /> } />
              <Route path="/checkout/:id" element={ <Checkout /> } />
              <Route path="/user" element={ <Userpage /> } />
              <Route path="*" element={ <Redirect /> } />
            </Routes>
           </div>
           <div id="footer">
            <Footer />
           </div>
          </div>
    
        );
      }
}


export default Main // connecting class Main and mapStatetoProps