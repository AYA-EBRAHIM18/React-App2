import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";



export default class Nav extends Component {

//   jqueryCode =()=>{
//     $(".nav-item").click(function (e) {
//         $('.nav-item').removeClass('active');
//         $(this).addClass('active');
// e.preventDefault();
      

//     });
//   }
//   componentDidMount() {
//     this.jqueryCode();
//       }
  render() {
    return <>
    <nav className="navbar navbar-expand-lg dark-bg ">
  <div className="container">
    <a className="navbar-brand text-white text-uppercase fs-2 fw-bold" >START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     
        <li className="nav-item rounded-pill ">
          <Link className="nav-link text-white fw-bold fs-5  "  to='/about' >About</Link>
          
        </li>
        <li className="nav-item rounded-pill">
        <Link className="nav-link text-white fw-bold fs-5  "  to='/portfolio' >Portfolio</Link>
        </li>
        <li className="nav-item rounded-pill">
        <Link className="nav-link text-white fw-bold fs-5  "  to='/contact' >Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    
    </>
    
  }
}
