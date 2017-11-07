import group from '../Models/Group';

const actionCreators = {
	getGroupPosts: (groupIndex) => (dispatch, getState) => {
		const curGroupIndex = getState().curGroupIndex;
		group.getPosts(groupIndex).then(() => {
			console.log(group.posts);
			dispatch(actionCreators.updateCurGroupIndex(groupIndex));
		}).catch((error) => {
			console.log(error);
		});
	},

	submitNewPost: (newPost) => (dispatch, getState) => {

	},

	updateCurGroupIndex: (nextIndex) => {
		return {
			type: 'UPDATE_CUR_GROUP_INDEX',
			nextCurGroupIndex: nextIndex
		}
	},

	updatePostCount: (nextCount) => {
		return {
			type: 'UPDATE_POSTS_COUNT',
			nextPostsCount: nextCount
		}
	}
};

export default actionCreators;