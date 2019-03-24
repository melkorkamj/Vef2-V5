import React, { Component } from 'react';

import Lecture from '../lecture/Lecture';

import './lectures.scss';

class Lectures extends Component {

  render() {
    const { lectures } = this.props;
    return (
      <div className = "list">
        <div className = "list__row">
          { lectures.map((lecture, i) => 
            <Lecture key={ i } lecture = { lecture } /> 
          ) }
        </div>
      </div>
    );
  }
}

export default Lectures; 