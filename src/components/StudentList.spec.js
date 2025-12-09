import { mount } from '@vue/test-utils'
import StudentList from '@/components/StudentList.vue'
import { describe, it, expect } from 'vitest'

describe('StudentList.vue', () => {
  const students = [
    { id: 1, name: 'Aruzhan', age: 20 },
    { id: 2, name: 'Talgat', age: 22 }
  ]

  it('renders correct number of students', () => {
    const wrapper = mount(StudentList, {
      props: { students }
    })

    expect(wrapper.findAllComponents({ name: 'StudentCard' }).length).toBe(2)
  })

  it('emits remove-student event', async () => {
    const wrapper = mount(StudentList, {
      props: { students }
    })

    await wrapper.findComponent({ name: 'StudentCard' }).vm.$emit('remove', 1)

    expect(wrapper.emitted('remove-student')[0]).toEqual([1])
  })
})
