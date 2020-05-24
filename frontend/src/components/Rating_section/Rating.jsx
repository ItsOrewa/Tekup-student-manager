import React from 'react';
import Stars from './Stars'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TeacherList from './TeachersList'
import { useSelector , useDispatch } from "react-redux";
import Zoom from '@material-ui/core/Zoom';
function Rating(){
  const rate = useSelector(state => state.rate);
  const dispatch = useDispatch();
  const qualities = ['Pedagogy','Communication','Course quality','Surrounding','Test/Ds/Td/Tp quality','Program objectives','Achievement of learning objectives']
  return(
      <div>
        <div className='Rposition'>
        <TeacherList />
        </div>
        { rate &&  

          <Zoom in = {true}>
          <div className='RaitinBox'>
          <Container className='RatingContainer'>
          <h3>Teacher: {rate.teacher}</h3>
          <h3>Course: {rate.course}</h3>
          <br></br>
          <Container>
          {qualities.map((quality,index)=>{
              return (
                <Stars  key={index} id={index} quality = {quality}/>
              )
          })} 
          </Container>       
          <div className="RatingButton">
          <Button variant="contained" color="primary" disableElevation>
            Save
          </Button>
          <Button variant="contained" color="primary" disableElevation style={{marginLeft:'0.5rem'}}> 
            Cancel
          </Button>
          </div>
          </Container>
        </div>

          </Zoom>
           }
            <div className="RButton">
            <Button variant="contained" color="primary" disableElevation>
            Back
            </Button>
        </div> 
      </div>
      
    )
}

export default Rating;