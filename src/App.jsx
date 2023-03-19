import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([
    { text: '寫作業', completed: false, id: 1, },
    { text: '游泳', completed: false, id: 2, },
    { text: '跑步', completed: false, id: 3, },
  ]);

  return (<div className="App">
    <div className="container">
      <header>ToDoList</header>
      <Form inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  </div>);
}

export default App;
