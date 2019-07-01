import React from 'react';
import { Instance } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';
import Todo from '../models/Todo';


const TodoItem = observer<{ todo: Instance<typeof Todo> }>(
    ({ todo }) => (
        <div>
            <button onClick={() => todo.toggle()}>{todo.title}</button>
            <button onClick={() => todo.remove()}>X</button>
        </div>
    )
);


export default TodoItem;