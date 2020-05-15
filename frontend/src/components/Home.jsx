import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

function Home(){
const classes = useStyles();
return ( 
<div className={classes.root}>
   <Grid container >
        <Grid item xs={12} sm={6} >
        <div className={classes.paper}>
            <Card className={classes.Cardroot}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={require('../images/Absence.jpg')}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Absence
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    See the last absence update 
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} >
        <div className={classes.paper}>
        <Card className={classes.Cardroot}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={require('../images/Result.jpg')}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Result
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                See the last result update 
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
        </Grid>
    
        <Grid item xs={12} sm={6} >
        <div className={classes.paper}>
        <Card className={classes.Cardroot}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={require('../images/links.jpg')}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Useful Links
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                See useful emails you may need 
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
        </Grid>

        <Grid item xs={12} sm={6} >
        <div className={classes.paper}>
        <Card className={classes.Cardroot}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={require('../images/RatingTeacher.jpg')}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Rating teachers
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                You can rate your teachers 
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
        </Grid>
    </Grid>
</div>
);
}
export default Home;