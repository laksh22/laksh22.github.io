import React, {Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className='projects-grid'>
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>Web Dev Project #1</CardTitle>
          <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Site</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>Web Dev Project #2</CardTitle>
          <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Site</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>Web Dev Project #3</CardTitle>
          <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Site</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
      </div>
      )} else if(this.state.activeTab === 1) {
        return(
          <div className='projects-grid'>
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>App Dev Project #1</CardTitle>
            <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Site</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>App Dev Project #2</CardTitle>
            <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Site</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>App Dev Project #3</CardTitle>
            <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Site</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          </div>
        )
      } else if(this.state.activeTab === 2) {
        return(
          <div className='projects-grid'>
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>Project #1</CardTitle>
            <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Site</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>Project #2</CardTitle>
            <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Site</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}>Project #3</CardTitle>
            <CardText>Lorem ipsum dolor sit amet. This is some sample text.</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Site</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
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
