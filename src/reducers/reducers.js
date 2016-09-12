import { combineReducers } from 'redux'
import FETCH_PIN from '../actions/actions';

const initialState = {
    user: {}
}

function pins(state = {}, action) {
    switch (action.type) {
    case FETCH_PIN:
        // do stuff to get pin
        return state;
    default:
        return state;
    }
}

function user(state = {}, action) {
    return state;
}

// function testApp(state = initialState, action) {
//     return {
//         user: state.user,
//         pins: pins(state.pins, action)
//     }
// }

const testApp = combineReducers({
    pins,
    user
});

export default testApp;