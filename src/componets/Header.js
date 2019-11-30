import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch"; //react 모듈 가져오기


// export const Header =  (propS) => {
	export const Header = ({title,players}) =>{
	// console.log(propS);

	//객체해제할당 => 동일한키로 할당되므로 순서상관없음
	// const {title, players} = propS;
	return (
		<header className="header">
			{/*<Stats players={propS.players}/>*/}
			{/*<Stats {...propS}/>*/}
			{/*모든 propS를 자식한테 내려주는것*/}

			<Stats players={players}/>
			<h1 className="h1">{title}</h1>

			{/*<h1 className="h1">{propS.title}</h1>*/}
			{/*<span className="stats">Player : {propS.totalPlayers}</span> => Stats에 포함*/}
			<Stopwatch></Stopwatch>
		</header>
	)};