import React, { Component } from 'react'
import Nav from './../navbar/navbar';
import Footer from './../footer/footer';

export default class   Portfolio extends Component {
  render() {
    return (
      <>
      <Nav/>
       <div className="portfolio">
        <div className="container">
        <h1 className='text-center mt-5'>PORTFOLIO COMPONENT</h1>
       <div className=" lines d-flex justify-content-center align-items-center ">
            <div className="left"></div>
            <i className='fa-solid fa-star  mx-3 star'></i>
            <div className="right"></div>
        </div>
        <div className="row g-5 my-5">
            <div className="col-md-4">
                <div className="box position-relative">
                    <img className='w-100 rounded-2' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center rounded-2"><i className='fa-solid fa-plus text-white fa-6x'></i></div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box position-relative">
                    <img className='w-100 rounded-2' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center rounded-2"><i className='fa-solid fa-plus text-white fa-6x'></i></div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="box position-relative">
                    <img className='w-100 rounded-2' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center rounded-2"><i className='fa-solid fa-plus text-white fa-6x'></i></div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="box position-relative">
                    <img className='w-100 rounded-2' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center rounded-2"><i className='fa-solid fa-plus text-white fa-6x'></i></div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="box position-relative">
                    <img className='w-100 rounded-2' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
                    <div className="layer d-flex justify-content-center align-items-center rounded-2"><i className='fa-solid fa-plus text-white fa-6x'></i></div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="box position-relative">
                <img className='w-100 rounded-2' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
                <div className="layer d-flex justify-content-center align-items-center rounded-2"><i className='fa-solid fa-plus text-white fa-6x'></i></div>

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
