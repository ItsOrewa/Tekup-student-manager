import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import Raiting from "./Raiting"

function App(){

    return (
        <div>

        <Grid container direction="column">
            <Grid item>
                <Header/>
            </Grid>
        <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>

                    <Raiting/>

            </Grid>
            <Grid item xs={false} sm={2} />

            <Footer/>
        </Grid>
        </Grid>

        </div>
    );
}

export default App;