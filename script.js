const counterEl = document.getElementById('counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

// action identifier
const INCREMENT = 'increment'
const DECREMENT = 'decrement'

// action creators
const increment = (value) =>{
    return {
        type:'increment',
        payload: value
    }
}
const decrement = (value) =>{
    return {
        type:'decrement',
        payload: value
    }
}

//Initial State
const initialState = {
    value:0
}

const counterReducer = (state=initialState, action)=>{
    if (action.type === 'increment'){
        return {
            ...state,
            value:state.value+action.payload
        }
    }
    else if(action.type === 'decrement'){
        return {
            ...state,
            value:state.value-action.payload
        }
    }else{
        return {
            ...state
        }
    }
}

const store = Redux.createStore(counterReducer)

const render = () =>{
    const state = store.getState()
    counterEl.innerText = state.value.toString()
}

render()

store.subscribe(render)

incrementEl.addEventListener('click', ()=>{
    store.dispatch(increment(5))
})

decrementEl.addEventListener('click', ()=>{
    store.dispatch(decrement(2))
})
