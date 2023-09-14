import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer>
        <div className="container py-5 text-white  ">
            <div className="row d-flex align-items-center justify-content-center  my-5 ">
                <div className="col-md-4">
                    <div className="box d-flex flex-column justify-content-center align-items-center">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box d-flex flex-column justify-content-center align-items-center">
                   <h3>AROUND THE WEB</h3>
                    <div className="links w-100 d-flex justify-content-center"> 
                    <span className='rounded-circle border-1'><i className='fa-brands fa-facebook'></i></span>
                    <span className='rounded-circle border-1'><i className='fa-brands fa-twitter'></i></span>
                    <span className='rounded-circle border-1'><i className="fa-brands fa-linkedin-in"></i></span>
                    <span className='rounded-circle border-1'><i className="fa-solid fa-globe"></i></span>
                    
                    </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box d-flex flex-column justify-content-center align-items-center text-center">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>

        </div>
        
      </footer>
      <div className="footer-copy text-white  d-flex  justify-content-center align-items-center ">
            <p>Copyright © Your Website 2021</p>
        </div>

      
      </>
    )
  }
}
