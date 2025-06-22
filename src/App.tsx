import { useEffect, useState, type ChangeEvent } from "react"
import { v4 as uuidv4 } from 'uuid';
import { CreateNewTodo } from "./component/CreateNewTodo";
import { TodoList } from "./component/TodoList";

export type TodoType = { 
  id: string;
  name: string ;
  isCompleted: boolean;
};

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
    if (savedTodoList?.length) {
      return savedTodoList;
    }
    return []
  });
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }
  
  const handleAddTodo = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodo,
      isCompleted: false,
    }
    setTodoList([newTodoItem, ...todoList])
    setNewTodo("")
  }

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if(todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted }
        } 
        return todo;
      })
    })
  }

  return (
    <>
      <p>this is Todo App</p>
      <CreateNewTodo
        onNewTodoChange={onNewTodoChange}
        newTodo={newTodo}
        handleAddTodo={handleAddTodo} 
      />
      <TodoList todoList={todoList} updateIsCompleted={updateIsCompleted} />
    </>
  )
}

export default App
