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

	handleSumit(e){
	 e.preventDefault(); //이벤트의 기본동작 막는방법 -> 깜빡임이 없음
	//e.stopPropagation() 현재 이벤트가 상위로 전파되지 않도록 중단한다

	//유효성체크
		const playNode = document.getElementById('player');
		// console.log(playNode.validity.valueMissing);
		console.log(playNode.validity.valid); //9가지 상태 체크
		if(!playNode.validity.valid){
			//isNameValid = true; 에러문구 컨디셔널 렌더링
			return;
		}
		this.props.addPlayer(this.state.value);
	//Form 초기화
	this.setState({value:''})
	}
	render() {
		return (
			<form className="form" onSubmit={this.handleSumit.bind(this)}>
				<input type="text" id="player" minLength="5" className="input" value={this.state.value}
							 onChange={this.handleValueChange.bind(this)}
							 placeholder="enter a player's name" required/>
				{/* 애로우펑션이 아니면 bind()함수사용 + required: value값 빈값체크 + noValidate: 유효성체크 해제*/}
				<input type="submit" className="input" value="Add Player"/>
			</form>
		);
	}
}