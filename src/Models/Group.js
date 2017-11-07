import localPosts from './localPosts';

class Group {
	constructor() {
		this.posts = [];
	}

	getPosts(groupIndex) {
		const getPostsPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				this.posts = localPosts.slice(groupIndex * 10, groupIndex * 10 + 10);
				resolve();
			}, 500);
		});

		return getPostsPromise;
	}
}

const group = new Group();
export default group;