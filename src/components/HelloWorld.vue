<template>
  <div>
    <ul>
      <li v-for="(item, index) in todos" :key="index">
        {{ item.id }} : {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

const saveTodos = vm => res => vm.todos = res.data.slice(0, 3);

const mounted = function() {
  axios.get(url)
    .then(saveTodos(this));
};

export default {
  name: 'HelloWorld',
  data: () => ({
    todos: [],
  }),
  mounted,
};
</script>
