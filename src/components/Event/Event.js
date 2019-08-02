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
    inGame:[],
    totalInGame: 0
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
        
        inGame: newArray,
        totalInGame: newArray.length
      };
    });
  }

  onDelete = (id) => {
    this.setState(({ inGame }) =>  {
      const idx = inGame.findIndex((el) => el.id === id);
      const newList = [
        ...inGame.slice(0, idx),
        ...inGame.slice(idx + 1)
      ];

      return {
        inGame: newList,
        totalInGame: newList.length
      }
    })
  };
  
  render() {
    
    return (
    <div className='event'>
      <h4>Description of Event. total players in Game: {this.state.totalInGame}</h4>
      <Row
        left={<Team 
        players = {this.props.players}
        onPlus = {this.onPlus}
        />}
        right={<InGameList 
                players={this.state.inGame}
                onDelete = {this.onDelete}
                /> }
      />
    </div>
    )
  }
}

export default Event;
