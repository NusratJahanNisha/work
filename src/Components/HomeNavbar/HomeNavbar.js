import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css';

// ---------NAVBAR OF ALL PAGES----------

const HomeNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">POWER <span class="x"> X</span> </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
          <Link to="/homePage"><a class="nav-link" href="#">Home <span class="sr-only"></span></a> </Link>
          </li>
         <li class="nav-item">
         <Link to="/ourClassPage">   <a class="nav-link" href="">Service </a></Link>
          </li>
          <li class="nav-item">
          <Link to="/ourClassPage"> <a class="nav-link" href="">Our Classes</a></Link> 
          </li>
          <li class="nav-item">
          <Link to="/homePage">  <a class="nav-link" href="">About Us</a></Link>
          </li>
          <li class="nav-item">
          <Link to="/homePage"> <a class="nav-link" href="">Blog</a></Link> 
          </li>
          <li class="nav-item">
          <Link to="/pricingPlans"> <a class="nav-link" href="">Pricing</a></Link> 
          </li>
          <li class="nav-item">
          <Link to="/gymMemberShip"> <a class="nav-link" href="">Contact Us</a></Link>  
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;