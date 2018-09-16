import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Cell className = 'resume-left-side' col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                alt="avatar"
                style={{height: '200px'}}
              />

              <h2 style={{paddingTop: '2em'}}>Your Name</h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>

              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex metus, dignissim ac justo quis,
              fermentum pretium arcu. Vivamus hendrerit ornare sagittis. Pellentesque quam lorem, facilisis vitae pellentesque vel,
              dapibus quis felis. </p>

              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

              <h5>Block 123, Random Street, 123456</h5>
              <h5>Phone</h5>
              <p>(+65) 1234 5678</p>
              <h5>Email</h5>
              <p>email@example.com</p>
              <h5>Github</h5>
              <p>github.com/you</p>

              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            </div>
          </Cell>

          <Cell className='resume-right-side' col={8}>
            <h2>Education</h2>
            <Education
            startYear={2050}
            endYear={2054}
            schoolName='Nanyang Technological University'
            schoolDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex metus, dignissim ac justo quis'/>

            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Experience</h2>
            <Experience
            startYear={2060}
            endYear={2061}
            jobName='Web Developer, Internet'
            jobDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex metus, dignissim ac justo quis'/>

            <h2>Experience</h2>
            <Experience
            startYear={2061}
            endYear={2068}
            jobName='App Developer, App Store'
            jobDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex metus, dignissim ac justo quis'/>

            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills
            skill="Web Development"
            progress={55}
            />
            <Skills
            skill="C++"
            progress={30}
            />

          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume;
