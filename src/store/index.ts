import { createStore, Store, useStore as useVuexStore } from 'vuex'
// import type { IStore } from './types'
import { IRootState } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'corderwhy',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

// export function useStore(): Store<IStore> {
//   return useVuexStore()
// }

export default store
