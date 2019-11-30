import React from 'react';
import {Counter} from "./Counter";

//PureComponet => 해당 아이디만 렌더링된다.
export class Player extends React.Component{
	render() {
		console.log(this.props.name,'rendered');
		return (
			<div className="player">
      <span className="player-name">
				<button className="remove-player" onClick={() => this.props.removerPlayer(this.props.id)}>x</button>
				{this.props.name}
      </span>
				<Counter id={this.props.id} score={this.props.score} changeScore={this.props.changeScore}/>
			</div>
		);
	}

	//PureComponent가 아니고 일반 Component이면 shouldComponentUpdate메소드 구현
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log(nextProps); //각 컴포넌트마다 찍히므로 4번 찍힘.
		if(nextProps.score !== this.props.score){
			return true;
		}else {
			return false;
		}
	}
}

// export const Player = (props) => {
// 	console.log(this.props.name, 'rendered');
// 	return (
// 		<div className="player">
//       <span className="player-name">
// 				<button className="remove-player" onClick={() => this.props.removerPlayer(this.props.id)}>x</button>
// 				{this.props.name}
//       </span>
// 			<Counter id={this.props.id} score={this.props.score} changeScore={this.props.changeScore}/>
// 		</div>
// 	);
// }
