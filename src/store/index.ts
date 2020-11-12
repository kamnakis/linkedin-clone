import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

import global from './global'
import { GlobalStateInterface } from './global/state'
import auth from './auth'
import { AuthStateInterface } from './auth/state'

export interface StateInterface {
  global: GlobalStateInterface,
  auth: AuthStateInterface
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      global,
      auth
    },
    strict: !!process.env.DEBUGGING
  })

  return Store
})
