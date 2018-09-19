import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render(){
    return(
      <div>

        {/*There are 2 columns called Cells*/}
        {/*The left Cell occupies 4 React columns*/}
        <Grid>
          <Cell className = 'resume-left-side' col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src="https://media.licdn.com/dms/image/C5103AQH9Rz9MwQV79g/profile-displayphoto-shrink_200_200/0?e=1542844800&v=beta&t=0XNS5SryQ31n5Fi9EcR-StvC1_Z0K4lK_Pb8D0LHqLI"
                alt="avatar"
                style={{height: '200px'}}
                className="avatar-image"
              />

              <h2 style={{paddingTop: '2em'}}>Lakshyajeet Dwivedee</h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>

              <hr style={{borderTop: '3px solid #833fb2', width: '50%', marginLeft:'25%'}}/>

              <p>My name is Lakshyajeet Dwivedee and I am currently an undergraduate student at NTU. I am interested in app and web development and looking to gain more knowledge about AI and Computer Vision.</p>

              <hr style={{borderTop: '3px solid #833fb2', width: '50%', marginLeft:'25%'}}/>

              {/*Address*/}
              {/*}<h5>Block 123, Random Street, 123456</h5>*/}
              {/*Phone number*/}
              <h5>Phone</h5>
              <p>(+65) 8506 2177</p>
              {/*Email Address*/}
              <h5>Email</h5>
              <p>lakshyajeet22@gmail.com</p>
              {/*Github link*/}
              <h5>Github</h5>
              <p>github.com/laksh22</p>

              <hr style={{borderTop: '3px solid #833fb2', width: '50%', marginLeft:'25%'}}/>

            </div>
          </Cell>

          {/*The right cell occupies 8 React columns*/}
          <Cell className='resume-right-side' col={8}>
            <h2>Education</h2>
            <Education
            startYear={2018}
            endYear={'Current'}
            schoolName='Nanyang Technological University'
            schoolDescription='Project Admin in the Open Source Society and the Virtual Community Manager of the NTU Entrepreneurhip Society'/>

            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Experience</h2>
            <Experience
            startYear={2018}
            endYear={'Current'}
            jobName='NTU Blockchain Society, Consulting – Tech Developer Track'
            jobDescription='Learning blockchain development in bi-weekly workshops. Will be a member of a team of 5 that will develop blockchain solutions for external parties.'/>

            <Experience
            startYear={'2018, March'}
            endYear={'2018, August'}
            jobName='ACT Paper Wings, Tech Intern and Volunteer'
            jobDescription='Designed mockups of e-commerce website for NGO using HTML, CSS, Bootstrap. Visited rural areas to teach how to make new recycled paper products to rural women.'/>

            <Experience
            startYear={'2017, March'}
            endYear={'2017, December'}
            jobName='Head of IT, TSRS-AMUN'
            jobDescription='Designed website for a national debate conference from scratch. Administered website and saw to technical difficulties before, during, and after the conference.'/>

            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>

            {/*Skills is a user made component used to show progress out of 100*/}

            <Skills
            skill="Web Development"
            progress={60}
            />
            <Skills
            skill="Flutter"
            progress={80}
            />

            <Skills
            skill="Python"
            progress={55}
            />

            <Skills
            skill="Git"
            progress={55}
            />

            <Skills
            skill="Data Analysis"
            progress={40}
            />

            <Skills
            skill="3D Modelling"
            progress={65}
            />

          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume;
