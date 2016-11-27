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
    items[i] = 'Since the dawn of history';
  }

  //return (
  //  <div style={style}>
  //    {items.map((e, i) => {
  //      return (
  //        <div key={i}>
  //          {e}
  //        </div>
  //      );
  //    })}
  //  </div>
  //);

  const style_each_item = {
    display: 'flex',
    flex: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  };

  const style_name = {
    marginRight: 'auto',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflowX: 'hidden'
  };

  const style_info = {
    display: 'flex',
    flex: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  };

  //return (
  //  <div style={style}>
  //    {items.map((e, i) => {
  //      return (
  //        <ItemView key={i}
  //                  name={e}
  //                  />
  //      );
  //    })}
  //  </div>
  //);

  return (
    <div style={style}>
      {items.map((e, i) => {
        return (
          <div key={i} >
            <div style={style_each_item}>
              <div style={style_name}>
                {e}
              </div>
              <div style={style_info}>
                <div>
                  .ext
                </div>
                <div>
                  size
                </div>
                <div>
                  date
                </div>
                <div>
                  time
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

class ItemView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const style_each_item = {
      display: 'flex',
      flex: 'auto',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }

    return (
      <div style={style_each_item}>
        <div>
          {this.props.name}
        </div>
        <div>
          exe
        </div>
      </div>
    );
  }
}

export default ItemList;
