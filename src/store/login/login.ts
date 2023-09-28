import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'

import { accountLoginRequest } from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    }
  },
  getters: {}
}

export default loginModule
