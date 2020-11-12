import { MutationTree } from 'vuex'
import { GlobalStateInterface } from './state'

const mutation: MutationTree<GlobalStateInterface> = {
  SET_PAGE_TITLE (state, pageTitle: string) {
    state.pageTitle = pageTitle
  },
  SET_TINT (state, tint: boolean) {
    state.tint = tint
  }
}

export default mutation
