import React, { Component } from 'react';
import Row from '../Row';
import Team from '../Team';
import InGameList from '../InGameList';
import './Event.css';

export class Event extends Component {

  state = {
    date: 'today',
    place: 'place',
    description: 'description'
  }
  
  render() {
    
    return (
    <div className='event'>
      <h4>Description of Event</h4>
      <Row
        left={<Team players = {this.props.players}/>}
        right={<InGameList players = {this.props.players}/> }
      />
    </div>
    )
  }
}

export default Event;
