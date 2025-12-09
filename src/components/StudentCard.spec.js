import { mount } from '@vue/test-utils'
import StudentCard from '@/components/StudentCard.vue'
import { describe, it, expect } from 'vitest'

describe('StudentCard.vue', () => {
  const student = { id: 1, name: 'Dana', age: 19 }

  it('renders student info', () => {
    const wrapper = mount(StudentCard, {
      props: { student }
    })

    expect(wrapper.text()).toContain('Dana')
    expect(wrapper.text()).toContain('19')
  })

  it('emits remove event with id', async () => {
    const wrapper = mount(StudentCard, {
      props: { student }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('remove')[0]).toEqual([1])
  })
})
