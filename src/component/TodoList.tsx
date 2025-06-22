import type { TodoType } from "../App"
import { Todo } from "./Todo"

type TodoListPros = {
    todoList: TodoType[];
    updateIsCompleted: (todoId: string) => void;
}

export const TodoList = ({ todoList, updateIsCompleted }: TodoListPros) => {
  return (
    <div>
        {
            todoList.map((todo) => {
                return (
                    <Todo 
                        key={todo.id}
                        todoId={todo.id}
                        name={todo.name} 
                        isCompleted={todo.isCompleted}
                        updateIsCompleted={updateIsCompleted}
                    />
                )
            })
        }
    </div>
  )
}
