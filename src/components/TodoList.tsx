import React from 'react';
import { Instance } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';
import TodoStore from '../models/TodoStore';
import TodoItem from './TodoItem';


const TodoList = observer<{ store: Instance<typeof TodoStore> }>(
    ({ store }) => {
        const todoRef = React.useRef<HTMLInputElement>(null);
        const addTodo = () => {
            if (todoRef && todoRef.current) {
                store.addTodo(todoRef.current.value);
                todoRef.current.value = '';
            }
        };

        return (
            <div>
                <h1>TODO</h1>
                <h3>Pending</h3>
                {store.pendingTodos.map((todo, index) => <TodoItem todo={todo} key={index}/>)}
                <h3>Done</h3>
                {store.doneTodos.map((todo, index) => <TodoItem todo={todo} key={index}/>)}
                <br />
                <input ref={todoRef} />
                <button onClick={addTodo}>Add todo</button>
            </div>
        )
    },
);


export default TodoList;