import React from 'react';
import _ from 'lodash';

export const Stats = (props) => {
	const totalPlayers = props.players.length;
	let totalPoints = _.sumBy(props.players,'score');

	// for(let i=0; i<totalPlayers.length; i++){
	//	명령문 형태로 쓰면 비효율적
	// }

	// 선언문형태로
	// props.players.forEach(item => {
	// 	totalPoints += item.score;
	// })

	//lodash 라이브러리 사용 (_sumBy()함수사용)
	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalPoints}</td>
			</tr>
			</tbody>
		</table>
	);
}