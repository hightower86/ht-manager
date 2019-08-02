import React from 'react';
import './App.css';
import Header from '../Header';
import Event from '../Event';
import TeamService from '../../services/service';

class App extends React.Component {

  render() {
    const service = new TeamService();
    const players = service.getTeamList();
    return (
      <div>
        <div className='container'>
      <Header />
      <Event players={players}/>
    </div>
      </div>
    );
  }
  
}

export default App;
