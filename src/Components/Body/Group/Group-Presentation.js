import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import localGroups from '../../../Models/localGroups';

class GroupPresentation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			groups: [],
		};

		this.handleGroupClick = this.handleGroupClick.bind(this);
	}

	handleGroupClick(groupIndex) {
		this.props.getGroupPosts(groupIndex);
	}

	componentDidMount() {
		this.setState({groups: localGroups});
		this.handleGroupClick(0);
	}

	render() {
		const groupsCont = this.state.groups.map((oneGroup, index) => {
			return (
				<div key={'group ' + index}
					style={{padding: '10px'}}
				>
					<div className='Group'
						onClick={() => this.handleGroupClick(index)}
					>
						{oneGroup}
					</div>
				</div>
			);
		});

		return (
			<div style={{
					margin: '5px',
					backgroundColor: '#F8F8F8',
					height: '90vh'
				}}
			>
				{groupsCont}
			</div>
		);
	}
}

export default GroupPresentation;
