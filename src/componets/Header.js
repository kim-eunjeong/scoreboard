import React from 'react';
import {Stats} from "./Stats"; //react 모듈 가져오기


export const Header =  (propS) => {
	console.log(propS);
	return (
		<header className="header">
			<Stats players={propS.players}/>
			{/*<Stats {...propS}/> 모든 propS를 자식한테 내려주는것*/}
			<h1 className="h1">{propS.title}</h1>
			{/*<span className="stats">Player : {propS.totalPlayers}</span> => Stats에 포함*/}
		</header>
	)};