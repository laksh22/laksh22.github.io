import React, {Component} from 'react';
import {Card, CardTitle, CardActions, CardMenu, IconButton, Button, CardText, } from 'react-mdl';

{/*This component will be used in the Proects section*/}
{/*Properties of this component are - url, projectDescription, link1 and link2 which must be defined on component creation*/}
{/*This is a component that can be used whenever you want to add a new project to your projects page*/}
class ProjectCard extends Component{
  render() {
    return(
      <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'176px', background: this.props.url}}>{this.props.projectName}</CardTitle>
        <CardText>{this.props.projectDescription}</CardText>
        <CardActions border>
          <Button colored><a href={this.props.link1} target="_blank" rel="noopener noreferrer">{this.props.link1name}</a></Button>
          <Button colored><a href={this.props.link2} target="_blank" rel="noopener noreferrer">{this.props.link2name}</a></Button>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
          <IconButton name='share' />
        </CardMenu>
      </Card>
    );
  }
}

export default ProjectCard;