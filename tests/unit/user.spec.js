import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import User from '@/components/User.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('User.vue', () => {
  const state = {
    isSettingUserData: false,
    userData: {}
  }
  const getters = {
    isSettingUserData (state) {
      return state.isSettingUserData
    },
    userData (state) {
      return state.userData
    },
  }
  const mutations = {
    setIsSettingUserData (state, value) {
      state.isSettingUserData = value
    }
  }
  const actions = {
    setIsSettingUserData: jest.fn(),
    setUserData: jest.fn()
  }
  const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
  it('watch isSettingUserData false', () => {
    const wrapper = shallowMount(User, {
      localVue,
      store
    })
    const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')
    store.commit('setIsSettingUserData', false)
    expect(spy).toBeCalledTimes(0)
    spy.mockRestore()
  })
  it('watch isSettingUserData true', () => {
    const wrapper = shallowMount(User, {
      localVue,
      store
    })
    const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')
    store.commit('setIsSettingUserData', true)
    wrapper.vm.$nextTick(() => {
      expect(spy).toBeCalledTimes(1)
    })
    spy.mockRestore()
  })
})
