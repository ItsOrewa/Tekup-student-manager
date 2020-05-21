import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';

import {useDispatch } from "react-redux";
import {logout} from '../actions'
import {Link } from 'react-router-dom';
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
    const dispatch = useDispatch();
    const classes = useStyles();
    

    function Handlelog(event){
        dispatch(logout())
   }

    return (<div className={classes.root}>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trello
          </Typography>
              {localStorage.usertoken && <Button className={classes.btn} variant="contained"><Link to='/login' onClick = {Handlelog}>SIGN OUT</Link></Button>}
              {!localStorage.usertoken && <Button className={classes.btn} variant="contained"><Link to='/login'>SIGN IN</Link></Button>}
        </Toolbar>
      </AppBar>
    </div>);
}

export default Header;