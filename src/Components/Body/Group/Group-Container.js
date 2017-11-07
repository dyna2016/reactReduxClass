import { connect } from 'react-redux';

import GroupPresentation from './Group-Presentation';
import actionCreators from '../../../Redux/Actions';



const mapStateToGroupProps = (state, ownProps) => (
	{
	}
);

const mapDispatchToGroupProps = (dispatch) => (
	{
		dispatch: dispatch,
		getGroupPosts: (groupIndex) => {
			dispatch(actionCreators.getGroupPosts(groupIndex));
		}
	}

);

const GroupContainer = connect(
	mapStateToGroupProps,
	mapDispatchToGroupProps
)(GroupPresentation);


export default GroupContainer;