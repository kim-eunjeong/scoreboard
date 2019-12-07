import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

//PureComponet => 해당 아이디만 렌더링된다.
export class Player extends React.Component{
	render() {
		console.log(this.props.name,'rendered');
		return (
			<div className="player">
      <span className="player-name">
				<button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
				{this.props.name}
      </span>
				<Counter id={this.props.id} score={this.props.score}/>
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

//es6문법   destructing assignment
// export class Player1 extends React.PureComponent{
// 	render() {
// 		const {removerPlayer, id, score, changeScore } = this.props;
// 		return (
// 					<div className="player">
// 					 <span className="player-name">
// 					<button className="remove-player" onClick={() => removerPlayer(id)}>x</button>
// 					{this.props.name}
// 					</span>
// 					<Counter id={id} score={score} changeScore={changeScore}/>
// 					</div>
// 		);
// 	}
// }

const mapActionToProps = (dispatch) => ({
	//왼쪽 props, 오른쪽 펑션
	removePlayer: (id) => dispatch(removePlayer(id)) //액션을 dispath
})
export default connect(null, mapActionToProps)(Player);
