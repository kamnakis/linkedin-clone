import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { GlobalStateInterface } from './state'

const getters: GetterTree<GlobalStateInterface, StateInterface> = {
  pageTitle: (state) => state.pageTitle,
  tint: (state) => state.tint
}

export default getters
