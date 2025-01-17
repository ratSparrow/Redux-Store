
import { applyMiddleware, createStore} from "redux"

import rootReducer from "./rootReducer"

const myLogger = (store) => (next) => (action) =>{
    console.log(JSON.stringify(action))
    console.log(JSON.stringify(store.getState()))

    const upcomingState = [action].reduce(rootReducer, store.getState())
    console.log(JSON.stringify(upcomingState))

    return next()
}
const store = createStore(rootReducer,applyMiddleware(myLogger))


export default store