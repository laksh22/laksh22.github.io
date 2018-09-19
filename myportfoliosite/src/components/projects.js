import React, {Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import ProjectCard from './project_card';

class Projects extends Component {
  //Initializing the current tab as 0 on page load
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  //A function which records and returns the content of each tab
  toggleCategories() {
    {/*For 1st tab*/}
    if(this.state.activeTab === 0){
      return(

        <div className='projects-grid'>
        <ProjectCard
        url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
        projectName = 'Portfolio Site'
        projectDescription = 'This is my personal website made using React'
        link1 = 'https://github.com/laksh22/portfolio-site'
        link1name = 'GitHub'
        />

        </div>

      )} else if(this.state.activeTab === 1) {

        return(
          <div className='projects-grid'>

          <ProjectCard
          url = 'url(https://lh3.googleusercontent.com/XcLI7Y6AsW-1OLQxVB9HZu5F8PmIfyC70Doj2QoBzGbW-R94Eb2FySfFvfp7hb5ykodM=s360-rw) center / cover'
          projectName = 'Alcove'
          projectDescription = 'This is a book discussion social media app made using Flutter and Firebase'
          link1name = 'Play Store'
          link1 = 'https://play.google.com/store/apps/details?id=com.bookapp.alcove'
          />
          </div>
        )
      } else if(this.state.activeTab === 2) {

        return(
          <div className='projects-grid'>

          <ProjectCard
          url = 'url(https://www.brandcrowd.com/gallery/brands/pictures/picture15089126812056.png) center / cover'
          projectName = 'Kaggle Dataset Analysis'
          projectDescription = 'This is a kaggle dataset that I helped analyse as a part of NTUOSSs HackOSS Program using Pandas.'
          link1name = 'GitHub'
          link1 = 'https://github.com/ntuoss/house-prices-advanced-regression-techniques'
          />
          </div>
      )}
  }

  render(){
    return(
      <div className='category-tabs'>

        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web Dev</Tab>
          <Tab>App Dev</Tab>
          <Tab>Others</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="Content">
                  {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
