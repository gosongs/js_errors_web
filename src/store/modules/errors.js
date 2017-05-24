/**
 * Created by go_songs on 2017/5/22.
 */
import * as types from '../mutations-types'

const state = {
  errorsList: [],
  errorsCount: {}
}

const getters = {
  errorsList: state => state.errorsList,
  errorsCount: state => state.errorsCount
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
  },
  getErrorsCount({commit, rootState}, data){
    // const {key} = data;
    const api = rootState.DEV_API;
    $.post(api + '/errors/count', data)
      .then(res => {
        if (res.Code === 0) {
          commit(types.ERRORS_COUNT, res.Data);
        } else {

        }
      })
  }
}

const mutations = {
  [types.ERRORS_LIST] (state, errorsList){
    state.errorsList = errorsList
  },
  [types.ERRORS_COUNT] (state, errorsCount){
    state.errorsCount = errorsCount
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}