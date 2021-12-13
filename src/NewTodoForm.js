import { useState } from "react";

function NewTodoForm({addTodo}) {
	const INITIAL_STATE = {todoText: ""}
	const [newTodo, setNewTodo] = useState(INITIAL_STATE)

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({...newTodo})
		setNewTodo(INITIAL_STATE)
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewTodo(data => ({
			...data,
			[name]: value
		}))
	}

  return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todoText">Todo: </label>
			<input
				id="todoText"
				type="text"
				name="todoText"
				placeholder={""}
				value={newTodo.todoText}
				onChange={handleChange} />
			<button type="submit">Add Todo</button>
		</form>
  );
}

export default NewTodoForm;