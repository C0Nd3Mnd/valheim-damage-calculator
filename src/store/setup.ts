import { App } from 'vue';
import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function setupStore(app: App) {
  const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    // reducer: (state) => ({ threshold: state.threshold }),
  });

  const store = createStore({
    state: () => ({}),
    getters: {},
    mutations: {},
    plugins: [vuexLocal.plugin],
  });

  app.use(store);
}
