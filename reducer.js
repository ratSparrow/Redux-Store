const actions = [
    {type:"increment", payload:1},
    {type:"increment", payload:1},
    {type:"increment", payload:1},
    {type:"decrement", payload:1}
]
const initialState = {
    value:0
}

function counterReducer (state, action) {
    if(action.type === "increment"){
        return {
            ...state,
            value:state.value + 1
        }
    }
    else if(action.type === "decrement"){
        return {
            ...state,
            value:state.value - 1
        }
    }
    else{
        return {
            ...state
        }
    }
}

const finalResult = actions.reduce(counterReducer, initialState)

console.log(finalResult)