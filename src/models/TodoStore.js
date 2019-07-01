import { types, destroy } from 'mobx-state-tree';
import Todo from './Todo';


const TodoStore = types
    .model('TodoStore', {
        todos: types.array(Todo),
    })
    .views(self => ({
        get pendingTodos() { // B
            return self.todos.filter(todo => !todo.done)
        },
        get doneTodos() {
            return self.todos.filter(todo => todo.done)
        },
    }))
    .actions(self => ({
        addTodo(title) {
            self.todos.push(Todo.create({ title }));
        },
        removeTodo(todo) {
            destroy(todo);
        },
    }));


export default TodoStore;