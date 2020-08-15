import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Switch, Route, Redirect} from "react-router-dom";
const App = () => {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component = {Home}/>
            <Route exact path="/about" component = {About}/>
            <Route exact path="/contact" component = {Contact}/>
            <Route exact path="/project" component = {Project}/>
             <Redirect to="/"/>
        </Switch>
        </>
    );
};
export default App;