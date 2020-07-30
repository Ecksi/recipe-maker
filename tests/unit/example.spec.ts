import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {
  it('has the homepage text', () => {
    const wrapper = shallowMount(Home)
    const result = 'I am the landing page'

    expect(wrapper.find('h1').text()).to.be.equal(result)
  })
})
