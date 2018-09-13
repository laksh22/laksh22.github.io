import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            {/*Avatar Image*/}
            <img
              src="https://media.licdn.com/dms/image/C5103AQH9Rz9MwQV79g/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=qEG-kjICyL1vKB3zFEMojatSdYozcGfSfXIGd9tIUDc"
              alt="avatar"
              className="avatar-image"
            />

            {/*Banner containing skills*/}
            <div className="banner-text">
              <h1>Web Developer | App Developer</h1>
              <hr/>
              <p>Flutter | HTML | CSS | JavaScript | Python | React</p>


              <div className="social-links">

                {/*Linkedin*/}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Github*/}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
