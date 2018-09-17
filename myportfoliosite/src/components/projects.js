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
        projectDescription = 'Web Dev Project #1'
        link1 = 'GitHub'
        link2 = 'Link'
        />

        <ProjectCard
        url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
        projectDescription = 'Web Dev Project #2'
        link1 = 'GitHub'
        link2 = 'Link'
        />

        <ProjectCard
        url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
        projectDescription = 'Web Dev Project #3'
        link1 = 'GitHub'
        link2 = 'Link'
        />
        </div>

      )} else if(this.state.activeTab === 1) {

        return(
          <div className='projects-grid'>

          <ProjectCard
          url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
          projectDescription = 'App Dev Project #1'
          link1 = 'GitHub'
          link2 = 'Link'
          />

          <ProjectCard
          url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
          projectDescription = 'App Dev Project #1'
          link1 = 'GitHub'
          link2 = 'Link'
          />

          <ProjectCard
          url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
          projectDescription = 'App Dev Project #1'
          link1 = 'GitHub'
          link2 = 'Link'
          />
          </div>
        )
      } else if(this.state.activeTab === 2) {

        return(
          <div className='projects-grid'>

          <ProjectCard
          url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
          projectDescription = 'Project #1'
          link1 = 'GitHub'
          link2 = 'Link'
          />

          <ProjectCard
          url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
          projectDescription = 'Project #1'
          link1 = 'GitHub'
          link2 = 'Link'
          />


          <ProjectCard
          url = 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'
          projectDescription = 'Project #1'
          link1 = 'GitHub'
          link2 = 'Link'
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
