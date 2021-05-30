import { createLocalVue, shallowMount } from '@vue/test-utils';
import Home from '../src/views/components/Home.vue'

describe('Home test', () => {
  it('should return new anime added', () => {
    const animeArray = [
      {value: 'aaa', header: 'lulu', title: 'zuldsdsd'}
    ]
    const localVue = createLocalVue();
    const wrapper = shallowMount(Home, {
      localVue,
      propsData: {
        animeArray
      }
    });
    wrapper.vm.addSomeAnimes();
    expect(animeArray[0].value.toText()).toBe('aaa');
  })
})