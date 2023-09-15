import React, { Component } from 'react'
import Nav from './../navbar/navbar';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
       <>
        <Nav/>
<Outlet/>

<Footer/>
       
       
       </>
        
     
    )
  }
}
