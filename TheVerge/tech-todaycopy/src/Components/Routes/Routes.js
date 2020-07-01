import React from 'react';
// import ProductPage from '../ProductsPage/ProductsPage';
// import Home from '../HomePage/HomePage'
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactPage from '../ContactPage/ContactPage';
import MainPage from '../MainPage/MainPage';
import GamingPage from '../GamingPage/GamingPage';
import SciencePage from '../SciencePage/SciencePage';
import SpacePage from '../SpacePage/SpacePage';
import Login from '../User/Login/login';
import Signup from '../User/Signup/signup';
import LandingPage from '../LandingPage/LandingPage';


const routes = () => {
    return (
        <Router>
            <div>
                <Route exact path='/home' component={MainPage}/>
                <Route exact path='/gaming' component={GamingPage}/>
                <Route exact path='/contact' component={ContactPage}/>
                <Route exact path='/science' component={SciencePage}/>
                <Route exact path='/space' component={SpacePage}/>
                <Route exact path='/Signup' component={Signup}/>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/' component={LandingPage} />

                
            </div>
        </Router>
    )
};

export default routes;