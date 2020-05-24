import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withRouter}  from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
     
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      paddingTop: '15%',

    },
    Cardroot: {
        maxWidth: 460,
      },
      media: {
        height: 30,
        paddingTop: '50.25%',
      },
  }));
function Section(props){
    const classes = useStyles();
    function showsection (){        
        props.history.push(props.info.path)
    }
    return (
        <Grid item xs={12} sm={6} >
        <div className={classes.paper}>
            <Card className={classes.Cardroot}>
            <CardActionArea  onClick = {showsection}>
                <CardMedia
               
                className={classes.media}
                image={props.info.img}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.info.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.info.content} 
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
        </Grid>
    )
}

export default withRouter(Section);