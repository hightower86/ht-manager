import React, { Component } from 'react';

import './PlayerInGame.css';

export class PlayerInGame extends Component {

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
      <div className='playerInGame'>
        <span>{name}</span>
        <button className='btn btn-warning btn-sm float-right'
                onClick={(id)=>this.props.onDelete(id)}>-</button>
      </div>
    )
  }
}

export default PlayerInGame;
