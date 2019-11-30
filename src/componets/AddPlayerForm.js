import React from 'react';

export class AddPlayerForm extends React.Component {
state ={
	value: ''
}

	handleValueChange(e){ //자바스크립트는 오버로딩이 없기때문에 이벤트 파라미터 e
		console.log(e);
		this.setState({
			value: e.target.value // DOM> input의 value
		})

	}
	render() {
		return (
			<form action="" className="form">
				<input type="text" className="input" value={this.state.value}
							 onChange={this.handleValueChange.bind(this)}
							 placeholder="enter a player's name"/>
				{/* 애로우펑션이 아니면 bind()함수사용 */}
				<input type="submit" className="input" value="Add Player"/>
			</form>
		);
	}
}