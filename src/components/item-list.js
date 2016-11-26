'use strict';

import React from 'react';
import { render } from 'react-dom';

//class Body extends React.Component {
//  constructor(props){
//    super(props);
//  }
//  render(){
//    return(
//      <div>
//        Body
//      </div>
//    );
//  }
//}

const ItemList = () => {
  const style = {
    border: 'solid 1px #FFFFFF',
    background: '#333333',
    color: '#FFFFFF',
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  }
  const len = 100;
  let items = new Array(len);
  for(let i=0; i<len; i++){
    items[i] = 'hoge';
  }

  return (
    <div style={style}>
      {items.map((e, i) => {
        return (
          <div key={i}>
            {e}
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
