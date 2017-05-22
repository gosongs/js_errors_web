import * as types from './mutations-types'
export default {
  [types.SET_USER] (state, user){
    state.user = user;
  }
}