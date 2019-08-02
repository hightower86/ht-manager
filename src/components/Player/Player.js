import React, { Component } from 'react';

import './Player.css';

export class Player extends Component {

  state = {
    id: 'id',
    name: 'name',
    inGame: 0
  }

  componentDidMount() {
    this.setState({
      name: this.props.name
    });
  }

  render() {

    const name = this.state.name;

    return (
      <div className='player'>
        <span>{name}</span>
        <button className='btn btn-success btn-sm float-right'
                onClick={()=>this.props.onPlus()}>+</button>
      </div>
    )
  }
}

export default Player
