import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
const labels = {  
    0.5: 'Highly dissatisfied',
    1: 'Dissatisfied',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  });

  function Stars(props){
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
      return (
          <div className = "row">
            <h5 className="column">{props.quality} </h5>
            <div className="column">
              <div className={classes.root}>         
              <Rating 
                name={props.id.toString()}
                key= {props.id}
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(prevval => {
                    return newValue;
                  });
                }}
                onChangeActive={(event, newHover) => {
                  setHover(prevHover => {
                    return newHover;
                  });
                }}
              />
              {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>   

          </div>
          <br/>
          </div>
          
          
     

      
      )
  }
  
  export default Stars;