import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import "./App.css";

//Components
 import CreateListing from "./components/add-listing.component.js";
 import EditListing from "./components/edit-listing.component.js";
 import ListingAll from "./components/show-listings.component.js";
 import EditWishList from "./components/edit-wishlist.component.js";
 import CreateUser from "./components/add-user.component.js";
 import NavbarComp from "./components/navbar";

//Pages
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./components/home";
import Profile from "./components/profile";

const App = () =>(

<div>
  <NavbarComp/>
</div>

);
 

 export default App;
 
 {/* <Routes>
   <Route exact path="/">
   <Navigation />
     <Login />
   </Route>
   {/* <Route path="/Home">
   <Navigation />
     <Home />
   </Route> */}
   {/* <Route path="/Profile">
   <Navigation />
     <Profile />
   </Route> */}
   {/* <Route path="/LogOut">
   <Navigation />
     <LogOut /> */}
   {/* </Route> */}
 



