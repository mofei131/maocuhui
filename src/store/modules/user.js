import httpRequest from '@/utils/httpRequest'

export default {
  namespaced: true,
  state: {
    info: {}
  },
  mutations: {
    SETINFO: (state, data) => {
      state.info = data
    }
  },
  actions: {
    getinfo({ commit }) {
      return new Promise((resolve, reject) => {
        httpRequest.get(httpRequest.adornUrl(`/user/profile`),{}).then(({ data }) => {
          if (data.msg==='非法访问') {
            reject()
          } else {
            commit('SETINFO', data.data||{})
            resolve()
          }
        }).catch(()=>{})
      })
    }
  }
}
