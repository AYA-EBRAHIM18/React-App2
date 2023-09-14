import React, { Component } from 'react';
import Nav from './../navbar/navbar';
import Footer from './../footer/footer';

export default class About extends Component {
  render() {
    return (
      <>
      <Nav/>
        <div className="about  text-white">
       <div className="container">
       <h1 className='text-center my-5'>ABOUT COMPONENT</h1>
       <div className=" lines d-flex justify-content-center align-items-center ">
            <div className="left"></div>
            <i className='fa-solid fa-star text-white mx-3'></i>
            <div className="right"></div>
        </div>
        <div className="row my-5 w-100">
            <div className="col-md-6">
                <div className="box">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                
            </div>
            <div className="col-md-6">
                <div className="box">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                
            </div>
        </div>
       </div>
      </div>
      <Footer/>

      </>
    )
  }
}
