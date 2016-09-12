import { PropTypes } from 'react';
import { connect } from 'react-redux';
import PinPage from '../presentation/PinPage';
import { actionCreators } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        pin: state.pin,
        user: state.user
    };
}

// Todo: dispatch isnt really a serverside concept since there are no
// further actions
// const mapDispatchToProps = ()

export default connect(mapStateToProps)(PinPage);

// PinPageContainer.prefetchActions = (context) => [
//     actionCreators.getPin.bind(null, context.routeData.pinId)
// ];

// PinPageContainer.propTypes = {
//     store: PropTypes.object.isRequired
// }

// export default PinPageContainer;