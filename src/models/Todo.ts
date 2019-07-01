import { getParent, types } from 'mobx-state-tree';


const Todo = types
    .model('Todo', {
        title: types.string,
        done: types.optional(types.boolean, false),
    })
    .actions(self => ({
        toggle() {
            self.done = !self.done;
        },
        remove() {
            getParent(self, 2).removeTodo(self)
        }

    }))
    .views(self => ({
        status() {
            return self.done ? 'Done' : 'Not done'
        }
    }));


export default Todo;