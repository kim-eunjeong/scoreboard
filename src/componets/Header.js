import React from 'react'; //react 모듈 가져오기


export const Header =  (propS) => {
	console.log(propS);
	return (
		<header className="header">
			<h1 className="h1">{propS.title}</h1>
			<span className="stats">Player : {propS.totalPlayers}</span>
		</header>
	)};