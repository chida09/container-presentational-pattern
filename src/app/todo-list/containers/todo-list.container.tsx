'use client'

import { TodoListComponent } from "../components"
import { useTodoListFacade } from "./todo-list.facade"

export const TodoListContainer = () => {
  const { todo, handleSave } = useTodoListFacade()

  return (
    <TodoListComponent todo={todo} onSave={handleSave} />
  )
}
