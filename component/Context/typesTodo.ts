export interface Todos {
    id:number,
    todo:string
}
export type TodoContextType = {
    todos: Todos[],
    addTodo: (todos: Todos)=>void;
    removeTodo: (ind:number)=>void;
}