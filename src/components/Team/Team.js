import React, { Component } from 'react';

export class Team extends Component {
  render() {
    const players = this.props.players;
    console.log(players);
    return (
      <div>
        <ul className="list-group">
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
