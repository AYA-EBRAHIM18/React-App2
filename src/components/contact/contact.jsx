import React, { Component } from 'react';
import Nav from './../navbar/navbar';
import Footer from './../footer/footer';

export default class Contact extends Component {
  render() {
    return (
      <>
      <Nav/>
      <div className="contact">
        <div className="container">
        <h1 className='text-center mt-5'>CONTACT SECTION</h1>
       <div className=" lines d-flex justify-content-center align-items-center ">
            <div className="left"></div>
            <i className='fa-solid fa-star  mx-3 star'></i>
            <div className="right"></div>
        </div>

        <div className="form w-50 mx-auto my-5">
            <input type="text" className='form-control 'placeholder='userName' />
            <input type="number" className='form-control 'placeholder='userAge' />
            <input type="email" className='form-control ' placeholder='userEmail' />
            <input type="password" className='form-control ' placeholder='userPassword'/>
            <button className='btn  align-self-start'>Send Message</button>
        </div>
        </div>
      </div>
      <Footer/>

      
      </>
    )
  }
}
