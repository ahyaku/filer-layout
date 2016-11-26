'use strict';
import React from 'react';
import { render } from 'react-dom';

import PathCur from './path-cur.js';
import Cmd from './cmd.js';
import ItemList from './item-list.js';
import Footer from './footer.js';

//class App extends React.Component {
//  constructor(props){
//    super(props);
//  }
//
//  render(){
//    return(
//      <div>
//        <Header />
//        <Body />
//        <Footer />
//      </div>
//    );
//  }
//}

const Body = () => {
  const style = {
    border: 'solid 1px #FFFFFF',
    background: '#333333',
    color: '#FFFFFF',
    display: 'flex',
    flex: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  };
  return(
    <div style={style}>
      <CmdAndItemList />
      <CmdAndItemList />
    </div>
  );
}

const CmdAndItemList = () => {
  const style = {
    border: 'solid 1px #FFFFFF',
    background: '#333333',
    color: '#FFFFFF',
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '50%',
    height: '100%'
  };
  return (
    <div style={style}>
      <Cmd />
      <ItemList />
    </div>
  );
}

const App = () => {
  const style = {
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  };
  return (
    <div style={style}>
      <PathCur />
      <PathCur />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
