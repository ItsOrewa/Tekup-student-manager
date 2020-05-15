import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    btn : {
        marginLeft : 10,
        backgroundColor : "black",
    }
  }));
  

  
  function Header(props){
    const classes = useStyles();
    

    
    return (<div className={classes.root}>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
              {localStorage.usertoken && <Button className={classes.btn} variant="contained"> sign in</Button>}
              {!localStorage.usertoken && <Button className={classes.btn} variant="contained"> sign out</Button>}
             
        </Toolbar>
      </AppBar>
    </div>);
}

export default Header;