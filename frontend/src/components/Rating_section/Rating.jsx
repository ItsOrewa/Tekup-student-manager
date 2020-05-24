import React from 'react';
import Stars from './Stars'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TeacherList from './TeachersList'
import { useSelector , useDispatch } from "react-redux";
import Zoom from '@material-ui/core/Zoom';
import {withRouter}  from 'react-router-dom'

function Rating(props){
  const rate = useSelector(state => state.rate);
  const dispatch = useDispatch();
  const qualities = ['Pedagogy','Communication','Course quality','Surrounding','Test/Ds/Td/Tp quality','Program objectives','Achievement of learning objectives']
  function back(){
      props.history.push('/home')
  }
  return(
      <div>
        <div className={!rate ? 'Rposition' : 'nothing'}>
        <TeacherList />
        <TeacherList />
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
          <Button variant="contained" color="primary" disableElevation style={{background:'rgb(22, 32, 49)'}}>
            Save
          </Button>
          <Button variant="contained" color="primary" disableElevation style={{marginLeft:'0.5rem',background:'rgb(22, 32, 49)'}}> 
            Cancel
          </Button>
          </div>
          </Container>
        </div>

          </Zoom>
           }
            <div className="RButton">
            <Button variant="contained" color="primary" disableElevation onClick = {back} style={{background:'rgb(22, 32, 49)'}}>
               Back
            </Button>
        </div> 
      </div>
      
    )
}

export default withRouter(Rating);