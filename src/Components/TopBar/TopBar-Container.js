import { connect } from 'react-redux';
//import actionCreators from '../../Redux/Actions';

import TopBarPresentation from './TopBar-Presentation';

/*
const mapStateToTopBarProps = (state, ownProps) => (
	{
		//: state.city,
	}
);

const mapDispatchToTopBarProps = (dispatch) => (
	{
		dispatch: dispatch,
	}

);

const TopBarContainer = connect(
	mapStateToTopBarProps,
	mapDispatchToTopBarProps
)(TopBarPresentation);
*/
const TopBarContainer = TopBarPresentation;

export default TopBarContainer;