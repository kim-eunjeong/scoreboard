import React from 'react';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

export class Counter extends React.Component{

	// state = { score : 10 };
	incrementScore() {
		console.log('incrementScore');
		// this.setState(prevStats => ({score : prevStats.score +1}));
		// this.props.changeScore();

	};

	decrement = () => {
		console.log('decrementScore');
		this.setState(prevStats => ({score : prevStats.score-1}));
	};

	render() {
		return(
			<div className="counter">
				<button className="couter-action decrement" onClick={() => this.props.changeScore(this.props.id, -1)}>-</button>
				<span className="counter-score">{this.props.score}</span>
				<button className="couter-action increment" onClick={() => this.props.changeScore(this.props.id, 1)}>+</button>
			</div>
		);
	};
};

const mapActionToProps = (dispatch) => ({
	//왼쪽 props, 오른쪽 펑션
	changeScore: (id, delta) => dispatch(changeScore(id, delta)) //액션을 dispath
})
export default connect(null, mapActionToProps)(Counter);