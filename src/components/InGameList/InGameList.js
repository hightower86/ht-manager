import React, { Component } from 'react';
import Player from '../Player';
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
                className='list-group-item 
                            d-flex justify-content-between 
                            align-items-center' 
                key={id}>  <Player name={name} />
              </li>
          })
        }
      </ul>
      </div>
    )
  }
}
