import { mount } from '@vue/test-utils'
import AddStudentForm from '@/components/AddStudentForm.vue'
import { describe, it, expect } from 'vitest'

describe('AddStudentForm.vue', () => {
  it('emits add-student with correct data', async () => {
    const wrapper = mount(AddStudentForm)

    await wrapper.find('input[type="text"]').setValue('Alex')
    await wrapper.find('input[type="number"]').setValue(20)
    await wrapper.find('form').trigger('submit')

    const events = wrapper.emitted('add-student')
    expect(events).toBeTruthy()
    expect(events[0][0]).toEqual({ name: 'Alex', age: 20 })
  })

  it('clears inputs after submit', async () => {
    const wrapper = mount(AddStudentForm)

    await wrapper.find('input[type="text"]').setValue('Alex')
    await wrapper.find('input[type="number"]').setValue(20)
    await wrapper.find('form').trigger('submit')

    expect(wrapper.find('input[type="text"]').element.value).toBe('')
    expect(wrapper.find('input[type="number"]').element.value).toBe('')
  })
})
