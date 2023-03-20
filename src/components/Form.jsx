import { BiMessageSquareAdd } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useEffect } from 'react'; // 引入 useEffect 鉤子

const Form = ({ inputText, setInputText, todos, setTodos, setTab }) => {
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const keepTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const submitTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 999 },
    ]);
    keepTodos();

    setInputText('');
  };

  const handleSelect = (e) => {
    setTab(e.target.value);
  };

  useEffect(() => {
    console.log(todos);
    keepTodos();
  }, [todos]); // 以 todos 為依賴

  return (
    <form>
      <input
        className='todo-input'
        type='text'
        value={inputText}
        onChange={inputTextHandler}
      />

      <button type='submit' className='todo-button' onClick={submitTodo}>
        <BiMessageSquareAdd />
      </button>

      <div className='select'>
        <select name='todos' onChange={handleSelect}>
          <option value='all'>全部</option>
          <option value='completed'>已完成</option>
          <option value='uncompleted'>待完成</option>
        </select>
      </div>
    </form>
  );
};

Form.propTypes = {
  inputText: PropTypes.string,
  setInputText: PropTypes.func,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setTab: PropTypes.func,
};

export default Form;
