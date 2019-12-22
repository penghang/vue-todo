import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [
      (store) => {
        console.log('my plugin invoked')
      }
    ],
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            // 这个state是a模块的state
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) {
            return state.text + rootState.count
          }
        },
        actions: {
          add ({ state, commit, rootState }) {
            commit('updateText', rootState.count)
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
  // 添加store热更新
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters
      })
    })
  }
  return store
}
