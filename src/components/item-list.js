'use strict';

import React from 'react';
import { render } from 'react-dom';

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

  return (
    <div style={style}>
      {items.map((e, i) => {
        return (
          <ItemView key={i}
                    name={e}
                    ext={'.ext'}
                    size={'size'}
                    date={'date'}
                    time={'time'}/>
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
    };

    return (
      <div>
        <div style={style_each_item}>
          <Name name={this.props.name}/>
          <Props ext={this.props.ext}
                 size={this.props.size}
                 date={this.props.date}
                 time={this.props.time}/>
        </div>
      </div>
    );
  }
}

class Name extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const style = {
      marginRight: 'auto',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflowX: 'hidden'
    };

    return (
      <div style={style}>
        {this.props.name}
      </div>
    );
  }
}

class Props extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const style = {
      display: 'flex',
      flex: 'auto',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    };

    const margin_left_ext = '0px';
    const margin_left_size = '15px';
    const margin_left_date = '5px';
    const margin_left_time = '5px';

    return (
      <div style={style}>
        <PropElem elem={this.props.ext} margin_left={margin_left_ext}/>
        <PropElem elem={this.props.size} margin_left={margin_left_size}/>
        <PropElem elem={this.props.date} margin_left={margin_left_date}/>
        <PropElem elem={this.props.time} margin_left={margin_left_time}/>
      </div>
    );
  }
}

class PropElem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const style={
      marginLeft: this.props.margin_left
    }

    return (
      <div style={style}>
        {this.props.elem}
      </div>
    );
  }
}

export default ItemList;
