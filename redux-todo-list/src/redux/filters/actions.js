import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const statusChnaged = (status) =>{
    return {
        type:STATUSCHANGED,
        payload:status
    }
}
export const colorChanged = (color, status) =>{
    return {
        type:COLORCHANGED,
        payload:{
            color,
            status
        }
    }
}

