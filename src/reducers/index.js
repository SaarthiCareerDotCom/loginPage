import { combineReducers } from 'redux';
import { UPDATE_DATA } from '../actions';
import { UPDATING_DATA } from '../actions';

const userInfo = ( state = {}, action ) => {
	switch(action.type) {
		case 'UPDATE_DATA': return {
			...action.data,
			loader: false
		}
		case 'UPDATING_DATA' : return {
			...state.data,
			loader: true
		}
		default: return state
	}
}

export default userInfo;