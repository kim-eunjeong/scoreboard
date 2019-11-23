import React from 'react'; //jsx문법 썼기에 react import
import logo from './logo.svg';
import './App.css';

const Header =  (propS) => {
  console.log(propS);
  return (
    <header className="header">
      <h1 className="h1">{propS.title}</h1>
      <span className="stats">Player : {propS.totalPlayers}</span>
    </header>
  )};

class Counter extends React.Component{

  state = { score : 10 };
  incrementScore() {
    console.log('incrementScore');
    this.setState(prevStats => ({score : prevStats.score +1}));

  };

  decrement = () => {
    console.log('decrementScore');
    this.setState(prevStats => ({score : prevStats.score-1}));
  };

  render() {
    return(
      <div className="counter">
        <button className="couter-action decrement" onClick={this.decrement.bind(this)}>-</button>
        <span className="counter-score">{this.state.score}</span>

        <button className="couter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
      </div>
    );
  };
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
				<button className="remove-player" onClick={() => props.removerPlayer(props.id)}>x</button>
        {props.name}
      </span>
      <Counter />
    </div>
  );
}

class App extends React.Component{
  state = {
    players : [
      {id: 1 ,name: 'LDK'},
      {id: 2 ,name: 'HONG'},
      {id: 3 ,name: 'KIM'},
      {id: 4 ,name: 'PARK'},
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />
        { this.state.players.map(item =>
          <Player name={item.name} id={item.id} key={item.id} removerPlayer={this.handleRemovePlayer}/>)
        }
      </div>
    )};

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      return {players}
    } )
  }
};

export default App;
