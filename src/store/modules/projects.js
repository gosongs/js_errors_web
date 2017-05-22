/**
 * Created by go_songs on 2017/5/22.
 */
import * as types from '../mutations-types'

const state = {
  projectsList: []
}

const getters = {
  projectsList: state => state.projectsList
}

const actions = {
  getProjectsList({commit, rootState}, data){
    // const {uid} = data;
    const api = rootState.DEV_API;
    $.post(api + '/project/list', data)
      .then(res => {
        if (res.Code === 0) {
          commit(types.PROJECTS_LIST, res.Data);
        } else {

        }
      })
  }
}

const mutations = {
  [types.PROJECTS_LIST] (state, projectsList){
    state.projectsList = projectsList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}