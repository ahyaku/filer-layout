'use strict';

import React from 'react';
import { render } from 'react-dom';

//class Header extends React.Component {
//  constructor(props){
//    super(props);
//  }
//  render(){
//    return(
//      <div>
//        Header
//      </div>
//    );
//  }
//}

const PathCur = () => {
  const style = {
    border: 'solid 1px #FFFFFF',
    background: '#333333',
    color: '#FFFFFF'
  }
  return(
    <div style={style}>
      Header
    </div>
  );
}

export default PathCur;
