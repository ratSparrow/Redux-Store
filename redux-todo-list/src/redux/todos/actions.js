import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes"

export const added = (todos) =>{
    return {
        type:ADDED,
        payload:todos
    }
}
export const toggled = (todos, todoId) =>{
    return {
        type:TOGGLED,
        payload:{
            todoId,
            todos
        }
    }
}

export const deleted = (todoId) =>{
    return {
        type:DELETED,
        payload:todoId
    }
}
export const colorSelected = (todoId,color) =>{
    return {
        type:COLORSELECTED,
        payload:{
            todoId,
            color
        }
    }
}
export const allCompleted = () =>{
    return {
        type:ALLCOMPLETED,

    }
}
export const clearCompleted = () =>{
    return {
        type:CLEARCOMPLETED,

    }
}