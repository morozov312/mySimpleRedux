import { combineReducers } from './myRedux.js'
import { INCREMENT, DECREMENT } from './types.js'

function counterReducer(state, action) {
    switch (action.type) {
        case INCREMENT: return { ...state, current: state.current + 1 }
        case DECREMENT: return { ...state, current: state.current - 1 }
        default: return state
    }
}

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer