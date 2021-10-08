import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Appearance from '@/components/Appearance.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Appearance.vue', () => {
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
  it('setActiveThemes', () => {
    const wrapper = shallowMount(Appearance, {
      localVue,
      store
    })
    wrapper.vm.setActiveThemes('blue')
    expect(wrapper.vm.bgColor).toBe('')
    expect(wrapper.vm.activeThemes).toBe('blue')
  })
})
