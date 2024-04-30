import { createStore } from "vuex";
import notify from "./notify";

const store = createStore({
  modules: {
    notify,
  },
});
export default store;
