import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import GroupContainer from './Group/Group-Container';
import PostContainer from './Post/Post-Container';

class Body extends Component {
	render() {
		return (
			<div>
				<Grid fluid>
					<Row className="show-grid">
						<Col md={4}>
							<GroupContainer>
							</GroupContainer>
						</Col>
						<Col md={8}>
							<PostContainer>
							</PostContainer>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Body;
