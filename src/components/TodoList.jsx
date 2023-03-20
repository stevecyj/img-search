import  TodoItem  from "./TodoItem.jsx";

const TodoList = ({ todos, setTodos }) => {
  // js 寫在這裡

  return (
    <div className="todo-container">
      <div className="todo-list">
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
