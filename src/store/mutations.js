import * as types from './mutations-types'
export default {
  [types.SET_USER] (state, user){
    state.user = user;
  },
  [types.CURRENT_MODAL] (state, str){
    state.currentModal = str
  },
}