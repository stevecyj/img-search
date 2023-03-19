import { MdCheck, MdDeleteOutline } from 'react-icons/md';

const TodoItem = ({ todos, setTodos, text, todo }) => {
  const completeTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            // text: item.text,
            // id: item.id,
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>

      <button className="complete-btn" onClick={completeTodo}>
        <MdCheck/>
      </button>
      <button className="trash-btn">
        <MdDeleteOutline/>
      </button>
    </div>
  );
};

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
