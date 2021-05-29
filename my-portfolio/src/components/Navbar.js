import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
                </button>
                
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                        
                <li className="nav-item">
                    <Link style={{color:"white"}} className="nav-link " to = "/">Home</Link>
                 </li>
                        
                <li className="nav-item">
                    <Link style={{color:"white"}} className="nav-link" to = "/resume">Resume</Link>
                </li>
                        
                <li className="nav-item">
                    <Link  style={{color:"white"}}  className="nav-link" to = "/projects">Projects</Link>
                 </li>
                        
                <li className="nav-item">
                    <Link style={{color:"white"}} className="nav-link" to = "/contact">Contact</Link>
                </li>
                        
            </ul>
            </div>
        </div>
     </nav>
            
    )
}

export default Navbar
