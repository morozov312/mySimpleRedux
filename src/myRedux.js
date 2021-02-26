export function createStore(rootReducer, initialState) {
    const subscribers = []
    let state = rootReducer(initialState, {})

    return {
        dsipatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(callback => callback())
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }

}

export function combineReducers(reducers) {
    const keys = Object.keys(reducers)
    return function (state, action) {
        let newState = {}
        keys.forEach(reducer => {
            newState = { ...newState, ...reducers[reducer](state, action) }
        })
        return newState
    }
}