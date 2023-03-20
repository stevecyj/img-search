import { MdCheck, MdDeleteOutline } from 'react-icons/md';
import PropTypes from 'prop-types';

export const TodoItem = ({ todos, setTodos, text, todo }) => {
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
      }),
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>

      <button className='complete-btn' onClick={completeTodo}>
        <MdCheck />
      </button>
      <button className='trash-btn'>
        <MdDeleteOutline />
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  text: PropTypes.string,
  todo: PropTypes.string,
};

export default TodoItem;
