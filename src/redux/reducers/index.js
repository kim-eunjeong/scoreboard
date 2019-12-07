import {combineReducers} from "redux";
import {playerReducer} from "./players";

export const allReducer = combineReducers({
	 playerReducer  //초기상태 랩핑
})