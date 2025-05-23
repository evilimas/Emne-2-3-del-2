<script setup lang="ts">
import { ref, computed } from 'vue';

interface ToDo {
  id: number;
  text: string;
  checked: boolean;
}
type FilterFunction = (isFinished: boolean, todoList: ToDo[]) => () => ToDo[];

const _todo_text = ref('');
const _todo_list = ref<ToDo[]>([]);

const filterTodos: FilterFunction = (isFinished, todoList) => () =>
  todoList.filter((item: ToDo) => item.checked == isFinished);

const _pending = computed(filterTodos(false, _todo_list.value));

const _done = computed(filterTodos(true, _todo_list.value));

function clearToDo() {
  _todo_text.value = '';
}

function addToDo() {
  if (_todo_text.value && _todo_text.value !== '') {
    _todo_list.value.push({
      id: new Date().valueOf(),
      text: _todo_text.value,
      checked: false,
    });
    clearToDo();
  }
}
function deleteTodo(id: number) {
  _todo_list.value = _todo_list.value.filter((todo) => todo.id !== id);
}
</script>

<template>
  <div>
    <div class="todo-container w3-white w3-card-4">
      <div
        class="w3-container w3-black w3-margin-0 w3-bottombar w3-border-blue"
      >
        <h1>
          <i class="fa-solid fa-clipboard-list"></i>
          To-Do List
        </h1>
      </div>
    </div>
    <div class="w3-container flex-container w3-light-gray w3-padding">
      <input
        class="w3-input w3-border-0"
        type="text"
        autofocus
        v-model="_todo_text"
        @keyup.enter="addToDo()"
        placeholder="Type here your to-do item..."
      />
      <button class="w3-button w3-gray main" @click="clearToDo()">
        <i class="fa-solid fa-times"></i>
      </button>
      <button class="w3-button w3-blue main" @click="addToDo()">
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="w3-padding w3-blue">Pending ({{ _pending.length }})</div>
      <div class="w3-padding" v-for="todo in _pending" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.checked" />
          <span class="w3-margin-left">
            {{ todo.text }}
            <button @click="deleteTodo(todo.id)">x</button>
          </span>
        </label>
      </div>
      <div class="w3-padding" v-show="_pending.length == 0">No tasks</div>
      <div class="w3-padding w3-blue">Completed ({{ _done.length }})</div>
      <div class="w3-padding" v-for="todo in _done" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.checked" />
          <span class="w3-margin-left">
            {{ todo.text }}
            <button @click="deleteTodo(todo.id)">x</button>
          </span>
        </label>
      </div>
      <div class="w3-padding" v-show="_done.length == 0">No tasks</div>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 100%;
  min-width: 30rem;
}
label {
  cursor: pointer;
  display: flex;
}
.main {
  margin: 1em;
}
</style>
