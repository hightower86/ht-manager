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
            return <li 
                className='list-group-item align-items-center' 
                key={id}>  <Player name={name} onPlus={()=>this.props.onPlus(id)} />
              </li>
          })
        }
      </ul>
      </div>
    )
  }
}

export default Team
