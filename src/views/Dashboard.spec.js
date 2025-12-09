import { mount } from '@vue/test-utils'
import Dashboard from '@/views/Dashboard.vue'
import { students } from '@/store/studentsStore'
import { describe, it, expect, beforeEach } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/students/:filter?', component: Dashboard }]
})

describe('Dashboard.vue', () => {
  beforeEach(async () => {
    students.value = [
      { id: 1, name: 'Aruzhan', age: 20 },
      { id: 2, name: 'Talgat', age: 22 }
    ]
    await router.push('/students')
    await router.isReady()
  })

  it('shows all students by default', () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Aruzhan')
    expect(wrapper.text()).toContain('Talgat')
  })

  it('filters under 21 students', async () => {
    await router.push('/students/under21')

    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })

    expect(wrapper.text()).toContain('Aruzhan')
    expect(wrapper.text()).not.toContain('Talgat')
  })

  it('adds new student', async () => {
    const wrapper = mount(Dashboard, {
      global: { plugins: [router] }
    })

    await wrapper.find('.add-student-btn').trigger('click')

    await wrapper.find('input[type="text"]').setValue('Alex')
    await wrapper.find('input[type="number"]').setValue(21)
    await wrapper.find('form').trigger('submit')

    expect(wrapper.text()).toContain('Alex')
  })
})
