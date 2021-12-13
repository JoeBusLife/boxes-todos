import { useState } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

function TodoList() {
  const [todos, setTodos] = useState([])

	const addTodo = (newTodo) => {
		setTodos(todos => [...todos, {...newTodo}])
	}

	const removeTodo = (idx) => {
		todos.splice(idx, 1);
		setTodos([...todos])
	}


  return (
    <div>
			<NewTodoForm addTodo={addTodo}/>
			<div>
				{todos.map(({ todoText }, idx) => <Todo
				removeTodo={removeTodo}
				key={idx}
				idx={idx}
				todoText={todoText}/>)}
			</div>
		</div>
  );
}

export default TodoList;
