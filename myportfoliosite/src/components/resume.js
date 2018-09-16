import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

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

          <Cell className='resume-right-side' col={4}>
            
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume;
