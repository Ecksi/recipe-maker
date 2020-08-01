import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {
  it('has the homepage text', () => {
    const wrapper = shallowMount(Home)
    const result = 'Welcome to the recipe maker...'

    expect(wrapper.find('h1').text()).to.be.equal(result)
  })
})
