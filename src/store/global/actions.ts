import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { GlobalStateInterface } from './state'

const actions: ActionTree<GlobalStateInterface, StateInterface> = {
  setPageTitle (context, pageTitle: string) {
    context.commit('SET_PAGE_TITLE', pageTitle)
  },
  setTint (context, tint: boolean) {
    context.commit('SET_TINT', tint)
  }
}

export default actions
