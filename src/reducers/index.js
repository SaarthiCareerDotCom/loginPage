import { combineReducers } from 'redux';
import { UPDATE_DATA } from '../actions';
import { UPDATING_DATA } from '../actions';

const userInfo = ( state = {
		"personalInfo" : {
			"image" : "def",
			"name" : "def"
		},
		"courses" : [
			
		"def", "def"
		],
		"notifications" : [
			"def", "def"
		]
	}, action ) => {
	switch(action.type) {
		case 'UPDATE_DATA': return {
			...action.data,
			loader: false
		}
		case 'UPDATING_DATA' : return {
			...state,
			loader: true
		}
		default: return state
	}
}

export default userInfo;