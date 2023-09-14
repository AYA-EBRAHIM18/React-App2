import React, { Component } from "react";
import Nav from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import Home from './components/home/home';
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Portfolio from "./components/porfolio/portfolio";
import About from './components/about/about';
import Contact from './components/contact/contact';


const router=createHashRouter([
  
  {path:'#',element:<Home/>},
  {path:'',element:<Home/>},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>}
])
export default class App extends Component {
  
  render() {
    return (
      <>
      
      <RouterProvider router={router}/>
      </>
    );
  }
}
