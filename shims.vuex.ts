import type { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    counter: number;
  }
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
