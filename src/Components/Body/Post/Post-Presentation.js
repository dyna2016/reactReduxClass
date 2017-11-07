import React, { Component } from 'react';
import { ButtonGroup, Button, Form, FormControl } from 'react-bootstrap';

import group from '../../../Models/Group';

import localGroups from '../../../Models/localGroups'

class PostPresentation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			groupName: '',
		};
	}

	componentDidMount() {
		this.setState({
			groupName: localGroups[0]
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log('i am')
		this.setState({groupName: localGroups[nextProps.curGroupIndex]})
	}

	render() {
		const postsCont = group.posts.map((onePost, index) => {
			return (
				<div key={'post ' + index}
					style={{padding: '10px'}}
				>
					<div className='Post'>
						<h4>{onePost.name} ({onePost.email}):</h4>
						<p>{onePost.body}</p>
					</div>
				</div>
			);
		});

		return (
			<div>
				<h2>{this.state.groupName}:</h2>
				<div style={{
						margin: '5px',
						backgroundColor: '#F8F8F8',
						height: '66vh',
						overflowY: 'auto'
					}}
				>
					{postsCont}
				</div>
				<Form style={{marginRight: '15px'}}>
					<FormControl
						style={{
							height: '15vh',
							width: '100%',
							margin: '5px'
						}}
						componentClass="textarea"
						placeholder="Post Your Comment..."
					/>

					<Button
						style={{float: 'right'}}>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default PostPresentation;
