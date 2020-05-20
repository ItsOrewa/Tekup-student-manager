import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import Raiting from "./Raiting_section/Raiting"
import Home from "./Home_section/Home";
import Login from "./Login"
import { Router, Route} from 'react-router-dom';
import history from '../history';
import Cover from './Home_section/Cover'
function App(){

    return (
        <div>
        <Router history={history}>
        <Grid container direction="column">
            <Grid item>
                <Header/>
                <Route exact path = '/home' component = {Cover}/>

            </Grid>
        <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
                <Route exact path = '/' component = {localStorage.usertoken ? Home : Login}/>
                <Route exact path = '/login' component = {Login}/>
                <Route exact path = '/home' component = {Home}/>

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