import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class TopBarPresentation extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Navbar fluid>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Comment Panel</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">Sign In</NavItem>
					<NavItem eventKey={2} href="#">Sign Out</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

export default TopBarPresentation;
