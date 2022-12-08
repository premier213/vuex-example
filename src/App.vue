<template>
  <div>counter = {{ $store.state.counter }}</div>
  <button>des</button>
  <button @click="add">inc</button>
  <button @click="addMulti">inc 10</button>
</template>

<script lang="ts">
export default {
  name: "App",
  methods: {
    add() {
      this.$store.commit("increment");
    },
    addMulti() {
      this.$store.commit("increase", { value: 10 });
    },
  },
};
</script>
