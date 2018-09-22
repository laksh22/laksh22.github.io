import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render(){
    return(
      <div>
        <Grid className='landing-grid'>
          <Cell col={12}>
            {/*Avatar Image*/}
            <img
              src="https://media.licdn.com/dms/image/C5103AQH9Rz9MwQV79g/profile-displayphoto-shrink_200_200/0?e=1542844800&v=beta&t=0XNS5SryQ31n5Fi9EcR-StvC1_Z0K4lK_Pb8D0LHqLI"
              alt="avatar"
              className="avatar-image"
            />

            {/*Black banner containing skills*/}
            <div className="banner-text">
              <h1>Web Developer | App Developer</h1>
              <hr/>
              <p>Flutter | HTML | CSS | JavaScript | Python | React</p>


              <div className="social-links">

                {/*Linkedin*/}
                <a href="https://www.linkedin.com/in/lakshyajeet-d-4a142712b/" target="_blank" rel="noopener noreferrer" >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Github*/}
                <a href="https://github.com/laksh22" target="_blank" rel="noopener noreferrer" >
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
