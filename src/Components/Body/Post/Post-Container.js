import { connect } from 'react-redux';

import PostPresentation from './Post-Presentation';
import actionCreators from '../../../Redux/Actions';



const mapStateToPostProps = (state, ownProps) => (
	{
		curGroupIndex: state.curGroupIndex,
	}
);

const mapDispatchToTPostProps = (dispatch) => (
	{
		dispatch: dispatch,
	}

);

const PostContainer = connect(
	mapStateToPostProps,
	mapDispatchToTPostProps
)(PostPresentation);



export default PostContainer;