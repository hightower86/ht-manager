import React from 'react';
import './App.css';
import Header from '../Header';
import Event from '../Event';

class App extends React.Component {

  state = {
    players: [
      {
        id: 1,
        name: "Белый Александр"
      },
      {
        id: 2,
        name: "Воднев Максим"
      },
      {
        id: 3,
        name:"Великий Сергей"
      },
      {
        id: 4,
        name:"Гусев Алексей"
      }
    ]
  };

  render() {

    return (
      <div>
        <div className='container'>
      <Header />
      <Event players={this.state.players}/>
    </div>
      </div>
    );
  }
  
}

export default App;
