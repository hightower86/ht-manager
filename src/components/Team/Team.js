import React, { Component } from 'react';
import Player from '../Player';
import './Team.css';

export class Team extends Component {

  render() {

    const players = this.props.players;

    return (
      <div>
        <ul className="list-group players">
        {
          players.map(({ id, name }) => {
            return <li className='list-group-item d-flex justify-content-between align-items-center' key={id}>  {name}</li>
          })
        }
      </ul>
      </div>
    )
  }
}

export default Team
