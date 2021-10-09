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
    wrapper.vm.color.hex = '#000'
    wrapper.vm.updateValue({hex:'#000'})
    expect(wrapper.vm.color.hex).toBe('#000')
    expect(wrapper.vm.bgColor).toBe('#000')
  })
})
