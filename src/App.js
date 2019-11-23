import React from 'react'; //jsx문법 썼기에 react import
import './App.css';
import {Header} from './componets/Header'
import {Player} from "./componets/Player";
//CTRL+ALT+O : 안쓰는 구문 자동으로 안보여주게 함

class App extends React.Component{
  state = {
    players : [
      {id: 1, name: 'LDK', score: 10},
      {id: 2, name: 'HONG', score: 20},
      {id: 3, name: 'KIM', score: 30},
      {id: 4, name: 'PARK', score: 40},
    ]
    // Counter 컴포넌트의 local state인 score를 App 컴포넌트로 Lifting up
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />
        { this.state.players.map(item =>
          <Player name={item.name} id={item.id} score={item.score} key={item.id}
                  changeScore={this.handleChangeScore}
                  removerPlayer={this.handleRemovePlayer}/>)
        }
      </div>
    )};

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
        const players = prevState.players.filter(player => player.id !== id)
        return {players}
    } )
  }

  //어떤player가 얼마큼 증가하는지 파라미터2개필요-> id, count(+1,-1)
  handleChangeScore = (id, count) => {
    console.log('handleChangeScore', id, ',', count);
    this.setState(prevState =>{
        //새로운 배열을 리턴해야한다! (원본배열 리턴 X)
        const players = [...prevState.players]; // ...spread연산자: 넣어라
        players.forEach(players =>{
          if(players.id === id){
            players.score += count
          }
        })
        return{players}
      })
  }
  // Counter 컴포넌트의 +, - 버튼 클릭시 증가 감소를 부모에게 요청
  // 1. 부모 컴포넌트에 펑션 작성
  // 2. 펑션을 자식에게 props로 전달
  // 3. 자식 컴포넌트가 props 로 받은 펑션을 호출

};

export default App;
