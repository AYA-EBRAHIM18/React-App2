import React, { Component } from 'react';
import Nav from './../navbar/navbar';
import Footer from './../footer/footer';

export default class Home extends Component {
  render() {
    return (
      <>
      <Nav/>
      <div className="home d-flex flex-column justify-content-center align-items-center ">
        <div className="photo">
            <img src='https://routeegy.github.io/startFramework/assets/images/avataaars.svg'  alt="" />
        </div>
        <h1 className='text-uppercase fw-bold text-white'>START FRAMEWORK</h1>

        <div className=" lines d-flex justify-space-between align-items-center ">
            <div className="left"></div>
            <i className='fa-solid fa-star text-white mx-3'></i>
            <div className="right"></div>
        </div>

        <p className='text-white mt-3'>Graphic Artist-Web Designer-Illustrator</p>

      </div>

      
      <Footer/>

     

      
      </>
    )
  }
}
