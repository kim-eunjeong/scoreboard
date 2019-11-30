import React from 'react';

export class Stopwatch extends React.Component {
	tickRef;
	state = {
		isRunning: false,
		timer:0
	}

	handleStopwatch(){
		this.setState(prevState => ({
			isRunning: !prevState.isRunning
		}));
	}

	render() {
		return (
			<div className="stopwatch">
				<h1 className="h1">StopWatch</h1>
				<span className="stopwatch-time">{this.state.timer}</span>
				<button onClick={this.handleStopwatch.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
				<button onClick={() => this.setState({timer:0})}>Reset</button>
			{/*	애로우펑션으로 선언문으로 만들어준다.*/}
			</div>
		);
	}

	 tick = () =>{
		if(this.state.isRunning){
			this.setState(prevState => ({
				timer: prevState.timer +1
			}));
		}
	}

	//네트워크로 데이터 fetch, 3rd라이브러리 초기화
	//DOM이 렌더링 된 직후에 호출되는 부분
	componentDidMount() {
		console.log('componentDidMount');
		this.tickRef = setInterval(this.tick, 1000); //1초
	} // const tickRef는 여기까지만 유효하므로 속성으로 위에서 선언해줌

	componentWillUnmount() {
		clearInterval(this.tickRef);
	}
}