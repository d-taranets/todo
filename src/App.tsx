import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoStore from './models/TodoStore';
import Todo from './models/Todo';

const initialTodos = ['Task 1', 'Task 2'];
const store = TodoStore.create({
  todos: initialTodos.map(title => Todo.create({ title }))
});

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList store={ store }/>
    </div>
  );
}

export default App;
