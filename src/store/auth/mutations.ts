import { MutationTree } from 'vuex'
import { User } from './models'
import { AuthStateInterface } from './state'

const mutation: MutationTree<AuthStateInterface> = {
  SET_USER (state, user: User) {
    state.user = user
  }
}

export default mutation
