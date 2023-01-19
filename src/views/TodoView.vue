<script lang="ts" setup>
import MyCard from '@/components/MyCard.vue';
</script>

<template>
  <my-card id="todo-view" class="px-8" height="80%" width="60%">
    <div id="todo-header" class="flex-center-column">
      <h1 id="todo-title" class="my-0">{{ $t('todo.header') }}</h1>
    </div>

    <div id="todo-body"></div>

    <div id="todo-footer"></div>
  </my-card>
</template>

<style lang="scss" scoped>
#todo-view {
  #todo-header {
    height: 10%;
  }

  #todo-body {
    height: 80%;
  }

  #todo-footer {
    height: 10%;
  }
}
</style>
