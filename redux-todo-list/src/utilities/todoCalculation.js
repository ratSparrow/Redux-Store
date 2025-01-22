export const noOfTodos = (no_Of_Todos)=>{
    switch (no_Of_Todos) {
        case 0:
            return 'No task'
        case 1:
            return '1 task'
        default:
            return `${no_Of_Todos} tasks`
    }
}
