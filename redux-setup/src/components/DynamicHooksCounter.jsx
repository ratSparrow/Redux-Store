import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/dynamicCounter/actions"
import { DINCREMENT } from "../redux/dynamicCounter/actionTypes"


export default function DynamicHooksCounter() {
const count = useSelector((state)=>state.dynamicCounter.value)
const dispatch = useDispatch()

const handleIncrement =(value) =>{
    dispatch( {
            type:DINCREMENT,
            payload:value
        })
}
const handleDecrement =(value) =>{
    dispatch({
        type:DD,
        payload:value
    })
}

    
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>handleIncrement(2)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>handleDecrement(5)}
                >
                    Decrement
                </button>
            </div>
        </div>
  )
}

