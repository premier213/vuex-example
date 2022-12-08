import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const app = createApp(App);
export const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
});
app.use(store);
app.mount("#app");
