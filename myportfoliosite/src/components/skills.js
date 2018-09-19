import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

//This is used as a skills bar in the resume section
class Skills extends Component{
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <div style={{display: 'flex'}}>{this.props.skill}</div>
        </Cell>
        <Cell col={8}>
          <div style={{display: 'flex'}}><ProgressBar progress={this.props.progress} style={{margin: 'auto', width: '75%'}}/></div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;