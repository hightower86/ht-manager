import React, { Component } from 'react';
import PlayerInGame from '../PlayerInGame';
import './InGameList.css';

export default class InGameList extends Component {
  render() {

    const players = this.props.players;

    return (
      <div>
        <ul className="list-group ingame players ingame">
        {
          players.map(({ id, name }) => {
            return <li 
                className='list-group-item ' 
                key={id}>  <PlayerInGame onDelete={()=>this.props.onDelete(id)} name={name} />
              </li>
          })
        }
      </ul>
      </div>
    )
  }
}
