function Todo({ task, removeTodo }) {
  return (
    <div className="todo">
      <div>{task}</div>
      <button onClick={removeTodo}>X</button>
    </div>
  );
}

export default Todo;
