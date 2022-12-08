import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
interface State {
  counter: number;
  payload: {
    value: number;
  };
  commit: { commit: (arg0: string, arg1?: State["payload"]) => void };
}
const counterState = {
  namespaced: true,
  state: {
    counter: 0,
  },
  mutations: {
    increment(state: State) {
      state.counter++;
    },
    increase(state: State, payload: State["payload"]) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    incrementAsync(ctx: State["commit"]) {
      setTimeout(() => {
        ctx.commit("increment");
      }, 1000);
    },
    increment(ctx: State["commit"]) {
      console.log("🚀  file: main.ts:25  increment  ctx", ctx);

      ctx.commit("increment");
    },
    increase(ctx: State["commit"], payload: State["payload"]) {
      console.log("🚀  file: main.ts:30  increase  payload", payload);
      console.log("🚀  file: main.ts:30  increase  ctx", ctx);
      ctx.commit("increment", payload);
    },
  },
  getters: {
    finalCount(state: State) {
      return state.counter * 2;
    },
    count(state: State) {
      return state.counter;
    },
  },
};

const app = createApp(App);
export const store = createStore({
  modules: {
    numbers: counterState,
  },
});
app.use(store);
app.mount("#app");
