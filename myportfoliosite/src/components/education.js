import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

{/*This component will be used in the Resume section*/}
{/*Properties of this component are - startYear, endYear, schoolName and schoolDescription which must be defined on component creation*/}
class Education extends Component{
  render() {
    return(
      <Grid>
        <Cell col={5}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={5}>
          <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;