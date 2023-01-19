<script lang="ts" setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todo';
import type { Todo } from '@/types';

import MyCard from '@/components/MyCard.vue';

const todoStore = useTodoStore();

const todo = ref<string>('');

const addTodo = (): void => {
  const currentTodo: Todo = {
    label: todo.value,
    completed: false,
  };
  todoStore.addTodo(currentTodo);
  todo.value = '';
};
</script>

<template>
  <my-card id="todo-view" class="px-8" height="80%" width="60%">
    <div id="todo-header" class="flex-center-column">
      <h1 id="todo-title" class="my-0">{{ $t('todo.header') }}</h1>
    </div>

    <div id="todo-body">
      <div
        v-for="(todo, index) in todoStore.todos"
        :key="index"
        class="todo-item py-2 d-flex justify-space-between align-center"
      >
        <div class="todo-item-left-area d-flex" :key="todoStore.todos.length">
          <input
            type="checkbox"
            :name="todo.label"
            :value="todo.completed"
            @input="todoStore.completeTodoToggle(index)"
          />
          <p class="todo-item-label pl-2" :class="{ 'todo-item-completed': todo.completed }">
            {{ todo.label }}
          </p>
        </div>
        <button @click="todoStore.deleteTodo(index)">
          {{ $t('todo.buttons.delete_todo') }}
        </button>
      </div>
    </div>

    <div id="todo-footer" class="d-flex align-center justify-space-between">
      <div id="todo-input-area" class="pr-4 d-flex flex-grow-1">
        <label for="todo-label-input" class="pr-2">{{ $t('todo.inputs.todo') }}:</label>
        <input v-model="todo" id="todo-label-input" type="text" />
      </div>
      <button :disabled="!todo.length" @click="addTodo">{{ $t('todo.buttons.add_todo') }}</button>
    </div>
  </my-card>
</template>

<style lang="scss" scoped>
#todo-view {
  #todo-header {
    height: 10%;
  }

  $body-size: 80%;
  #todo-body {
    height: $body-size;
    max-height: $body-size;
    overflow: auto;

    .todo-item {
      &:first-child {
        border-top: solid 1px grey;
      }

      height: 24px;
      border-bottom: solid 1px grey;

      .todo-item-completed {
        text-decoration: line-through;
      }
    }
  }

  #todo-footer {
    height: 10%;

    #todo-label-input {
      width: 100%;
    }
  }
}
</style>
