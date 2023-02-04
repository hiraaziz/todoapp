import { createContext, ReactNode, useState } from "react"
import {TodoContextType, Todos} from './typesTodo'

export const TodoContext = createContext<TodoContextType | null>(null)

export default function TodoProvider({children}:{children:ReactNode}) {

    const [todos, settodo] = useState<Todos[]>([
        {
            id: 1,
            todo: "This is firest Todo"
        },
        {
            id: 2,
            todo: "This is second Todo"
        }
    ])

    function addTodo(todo:Todos){
        settodo([...todos,todo])
    }
    function removeTodo(ind:number){
        const todo = todos.filter((todo,index)=>index!==ind)
        settodo(todo)
    }

  return (
    <TodoContext.Provider value={{todos,addTodo,removeTodo}} >
        {children}
    </TodoContext.Provider>
  )
}
