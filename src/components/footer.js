'use strict';

import React from 'react';
import { render } from 'react-dom';

//class Footer extends React.Component {
//  constructor(props){
//    super(props);
//    let this.foo = 1;
//    //let this.style = {
//    //};
//  }
//  render(){
//    return(
//      <div>
//        Footer
//      </div>
//    );
//  }
//}

const Footer = () => {
  const style = {
    border: 'solid 1px #FFFFFF',
    background: '#333333',
    color: '#FFFFFF'
  };
  return(
    <div style={style}>
      Footer
    </div>
  );
}

export default Footer;
