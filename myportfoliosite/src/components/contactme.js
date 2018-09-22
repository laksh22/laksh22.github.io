import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
  render(){
    return(
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6} className='contact-cell'>
            {/*React divides a page into 12 columns.*/}
            {/*Our columns will span 6 React columns each - there will be 2 columns occupying half of the page each*/}
            <h2>Lakshyajeet Dwivedee</h2>
            {/*This is the image on the left hand column*/}
            <img
            src="https://media.licdn.com/dms/image/C5103AQH9Rz9MwQV79g/profile-displayphoto-shrink_200_200/0?e=1542844800&v=beta&t=0XNS5SryQ31n5Fi9EcR-StvC1_Z0K4lK_Pb8D0LHqLI"
            alt="avatar"
            className="avatar-image"
          />
          <p>My name is Lakshyajeet Dwivedee and I am currently an undergraduate student at NTU. I am interested in app and web development and looking to gain more knowledge about AI and Computer Vision.</p>

        </Cell>
        <Cell col={6}>

          <h2>Contact Me</h2>
          <hr/>

          <div className='contact-list'>
          <List>
            <ListItem>
            {/*This is the List Item for the phone number*/}
              <ListItemContent className='contact-list-item'>
              <i className="fa fa-phone-square" aria-hidden="True" />
              +65 8506 2177
              </ListItemContent>
            </ListItem>

            <ListItem>
            {/*This is the list item for the email*/}
              <ListItemContent className='contact-list-item'>
              <i className="fa fa-envelope" aria-hidden="True" />
              lakshyajeet22@gmail.com
              </ListItemContent>
            </ListItem>

            <ListItem>
            {/*This is the list item for the github account link*/}
              <ListItemContent className='contact-list-item'>
              <i className="fa fa-github" aria-hidden="True" />
              github.com/laksh22
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

