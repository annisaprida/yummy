import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  it('updateValue', () => {
    const wrapper = shallowMount(App, {
      localVue,
    })
    wrapper.vm.updateValue({hex:'#000'})
    expect(wrapper.vm.colors).toEqual({hex:'#000'})
  })
})
