
function Todo({ todoText, removeTodo, idx }) {

  return (
		<div>
			<span>{todoText} </span>
			<button onClick={() => removeTodo(idx)}>X</button>
		</div>
    
  );
}

export default Todo;