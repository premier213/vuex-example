<template>
  <div>
    {{ counter }}
  </div>
</template>

<script lang="ts">
// import { mapGetters } from "vuex";

export default {
  name: "CounterTwo",
  computed: {
    // finalCount() {
    //   return this.$store.getters.finalCount;
    // },
    // ...mapGetters(["finalCount"]), // use getters with map getter for multi getter call
    counter() {
      return this.$store.getters["numbers/finalCount"];
    },
  },
};
</script>
