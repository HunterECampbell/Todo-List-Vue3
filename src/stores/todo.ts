import { defineStore } from 'pinia';
import type { Todo } from '@/types';

export interface TodoStoreState {
  _todos: Todo[];
}
export const initialState: TodoStoreState = {
  _todos: [],
};

export const useTodoStore = defineStore('todo', {
  state: (): TodoStoreState => initialState,

  getters: {
    todos: (state) => {
      return state._todos;
    },
  },

  actions: {
    addTodo(todo: Todo): void {
      this._todos.push(todo);
    },
    completeTodoToggle(index: number): void {
      this._todos[index].completed = !this._todos[index].completed;
    },
    deleteTodo(index: number): void {
      this._todos.splice(index, 1);
    },
  },
});
