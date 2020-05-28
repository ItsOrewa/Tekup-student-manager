import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import Rating from "./Rating_section/Rating"
import Home from "./Home_section/Home";
import Login from "./Login"
import Absence from "./Absence_section/Absence"
import TeachersList from "./Rating_section/TeachersList"
import Links from "./Contacts_section/Links"
import Result from "./Results_section/Result"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Cover from './Home_section/Cover'
import ScrollToTop from './ScrollToTop';
function App(){

    return (
        <div className = "page-container">
        <Router>
        <Grid container direction="column">
            <Grid item>
                <Header/>
                <Route exact path = '/home' component = {Cover}/>

            </Grid>
            <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8} className="content-wrap">
                <ScrollToTop />
                <Route exact path = '/' component = {localStorage.usertoken ? Home : Login}/>
                <Route exact path = '/login' component = {Login}/>
                <Route exact path = '/home' component = {Home}/>
                <Route exact path = '/absence' component = {Absence}/>
                <Route exact path = '/links' component = {Links}/>
                <Route exact path = '/rating' component = {Rating}/>
                <Route exact path = '/result' component = {Result}/>
                <Route exact path = '/teachers' component = {TeachersList}/>
            </Grid>
            <Grid item xs={false} sm={2} />

            <Footer/>
        </Grid>
        </Grid>
        </Router>
        </div>
    );
}

export default App;