import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
  render(){
    return(
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>

            <h2>Your Name</h2>
            <img
              src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
              alt="avatar"
              className="avatar-image"
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

          </Cell>
          <Cell col={6}>

            <h2>Contact Me</h2>
            <hr/>

            <div className='contact-list'>
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-phone-square" aria-hidden="True" />
                +12 3456 7890
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-envelope" aria-hidden="True" />
                yourname@email.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-github" aria-hidden="True" />
                github.com/username
                </ListItemContent>
              </ListItem>

            </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
