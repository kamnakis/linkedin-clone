import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { User } from './models'
import { AuthStateInterface } from './state'

const actions: ActionTree<AuthStateInterface, StateInterface> = {
  setUser (context, user: User) {
    context.commit('SET_USER', user)
  }
}

export default actions
