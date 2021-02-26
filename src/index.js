import { createStore } from './myRedux.js'
import { INIT, INCREMENT, DECREMENT } from './types.js'
import rootReducer from './reducers.js'

const incrementBtn = document.querySelector('#increment-btn')
const decrementBtn = document.querySelector('#decrement-btn')
const counter = document.querySelector('#counter')

const store = createStore(rootReducer, { current: 0 })

store.subscribe(() => {
    const currState = store.getState()
    counter.innerHTML = currState.current
})

store.dsipatch({ type: INIT })

incrementBtn.addEventListener('click', () => {
    store.dsipatch({ type: INCREMENT })
})

decrementBtn.addEventListener('click', () => {
    store.dsipatch({ type: DECREMENT })
})

