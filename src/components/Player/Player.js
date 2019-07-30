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
        {name}
      </div>
    )
  }
}

export default Player
