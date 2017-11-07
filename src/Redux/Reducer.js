import { combineReducers } from 'redux';

function curGroupIndexReducer (state = -1, action) {
	switch (action.type) {
		case 'UPDATE_CUR_GROUP_INDEX': {
			return action.nextCurGroupIndex;
		}
		default: {
			return state;
		}
	}
}


function postsCountReducer (state = 0, action) {
	switch (action.type) {
		case 'UPDATE_POSTS_COUNT': {
			return action.nextPostsCount;
		}
		default: {
			return state;
		}
	}
}


/*
*****************************************************************************************
-----------------------------------------------------------------------------------------
										rootReducer
-----------------------------------------------------------------------------------------
*****************************************************************************************
*/
const rootReducer = combineReducers({
	curGroupIndex: curGroupIndexReducer,
	postsCount: postsCountReducer
});

export default rootReducer;