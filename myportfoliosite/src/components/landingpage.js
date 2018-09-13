import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C5103AQH9Rz9MwQV79g/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=qEG-kjICyL1vKB3zFEMojatSdYozcGfSfXIGd9tIUDc"
              alt="avatar"
              className="avatar-image"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
