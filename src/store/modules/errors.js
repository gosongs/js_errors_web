/**
 * Created by go_songs on 2017/5/22.
 */
import * as types from '../mutations-types'

const state = {
  errorsList: []
}

const getters = {
  errorsList: state => state.errorsList
}

const actions = {
  getErrorsList({commit, rootState}, data){
    // const {key, uid} = data;
    const api = rootState.DEV_API;
    $.post(api + '/errors/list', data)
      .then(res => {
        if (res.Code === 0) {
          if (res.Data) {
            commit(types.ERRORS_LIST, res.Data);
          }
        } else {

        }
      })
  }
}

const mutations = {
  [types.ERRORS_LIST] (state, errorsList){
    state.errorsList = errorsList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}