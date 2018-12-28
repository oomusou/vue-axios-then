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
import { mapState } from 'vuex';
import store from '../store';

const mounted = () => store.dispatch('getTodos');

export default {
  name: 'HelloWorld',
  computed: mapState(['todos']),
  mounted,
};
</script>
