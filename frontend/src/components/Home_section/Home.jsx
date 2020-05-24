import React  from 'react';
import Grid from '@material-ui/core/Grid';

import Section from './Section'

function Home(){
    
const data = [{img:require('../../images/Absence.jpg'),title:'Absence',content:'See the last absence updates',path:'/absence'},
              {img:require('../../images/Result.jpg'),title:'Result',content:'See the last result update',path:'/result'},
              {img:require('../../images/links.jpg'),title:'Useful Links',content:'See useful emails you may need ',path:'/links'},
              {img:require('../../images/RatingTeacher.jpg'),title:'Rating teachers',content:'You can rate your teachers',path:'/rating'}
             ]

return ( 
<div style = {{flexGrow: 1}}>
   <Grid container >
        {data.map((section,index) => {
            return <Section info = {section} key ={index} />
        })}
    </Grid>
</div>
);
}
export default Home;