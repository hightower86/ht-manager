import React, { Component } from 'react';
import Row from '../Row';
import Team from '../Team';
import InGameList from '../InGameList';
import './Event.css';

export class Event extends Component {

  state = {
    date: 'today',
    place: 'place',
    description: 'description',
    inGame:[]
  }

  onPlus = (id) => {
    console.log('onPlus pressed', id);
    const { players } = this.props;
    this.setState(({inGame}) => {
      const idx = players.findIndex((el) => el.id === id);
      const player = players[idx];
      const newPlayer = {id: id, name: player.name};
      console.log(newPlayer);
      const newArray = inGame.find((el) => {
        console.log(el);
        return el.id===id
      })? 
           [...inGame]  : [ ...inGame, newPlayer ];
      console.log(newArray);
      return {
        
        inGame: newArray
      };
    });
  }
  
  render() {
    
    return (
    <div className='event'>
      <h4>Description of Event</h4>
      <Row
        left={<Team 
        players = {this.props.players}
        onPlus = {this.onPlus}
        />}
        right={<InGameList 
                players={this.state.inGame}
                /> }
      />
    </div>
    )
  }
}

export default Event;
