import rootReducer from "../rootReducer"

const myLogger = (store) => (next) => (action) =>{
    console.log(JSON.stringify(action))
    console.log(JSON.stringify(store.getState()))

    const upcomingState = [action].reduce(rootReducer, store.getState())
    console.log(JSON.stringify(upcomingState))

    return next()
}

export default myLogger