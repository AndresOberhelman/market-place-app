import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes,Link,Redirect,NavLink} from "react-router-dom";
import "./App.css";

//Components
 import CreateListing from "./components/add-listing.component.js";
 import AddtoWishList from "./components/add-wishlist.component.js";
 import EditListing from "./components/edit-listing.component.js";
 import ListingAll from "./components/show-listings.component.js";
 import EditWishList from "./components/edit-wishlist.component.js";
 import CreateUser from "./components/add-user.component.js";
 import Navigation from "./components/navbar.component.js";

//Pages
import Signup from "./components/pages/signup";
import Login from "./components/pages/login";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

const App = () =>(
<Router>
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
    </Routes>
</Router>
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
 



