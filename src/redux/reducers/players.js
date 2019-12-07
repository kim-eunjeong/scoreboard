import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

let maxId= 4;

const playerInitialState = {
	//모든 state를 store에 저장
		players : [
			{id: 1, name: 'LDK', score: 10},
			{id: 2, name: 'HONG', score: 20},
			{id: 3, name: 'KIM', score: 30},
			{id: 4, name: 'PARK', score: 40},
		]
};

export const playerReducer = (state = playerInitialState, action) => {
	switch (action.type) {
		case ADD_PLAYER:
		return {
			...state,
			players: [...state.players, {id: ++maxId, name: action.name, score: 0}]
		};
		case CHANGE_SCORE:
			let players = [...state.players]; //deep copy
			players.forEach(player => {
				if(player.id === action.id){
					player.score += action.delta;
				}
			})
			return {
				...state, players
			}

		case REMOVE_PLAYER:
			 players = state.players.filter(player => player.id !== action.id)
			return {
				...state,players
			}
	}

	return state;
}