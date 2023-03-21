import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState(''); // 輸入文字
  const [tab, setTab] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  const [todos, setTodos] = useState([
    // { text: '寫作業', completed: false, id: 1 },
    // { text: '游泳', completed: false, id: 2 },
    // { text: '跑步', completed: false, id: 3 },
  ]);

  const handleFilter = () => {
    switch (tab) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  useEffect(() => {
    handleFilter();
  }, [tab, todos]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('todos')) || [];
    if (storedItems.length !== 0) {
      setTodos(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='App'>
      <div className='container'>
        <header>ToDoList</header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setTab={setTab}
        />
        <TodoList todos={filterTodos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
