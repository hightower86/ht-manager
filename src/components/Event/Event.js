import React, { Component } from 'react';

export class Event extends Component {
  render() {
    const players = this.props.players;
    return (
      <div>
      <h4>Player list</h4>
      <ul>
        {
          players.map(({ id, name }) => {
            return <li key={id}>  {name}</li>
          })
        }
      </ul>
        
      </div>
    )
  }
}

export default Event;
