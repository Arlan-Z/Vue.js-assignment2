<template>
  <div class="app">
    <h1>🎓 Student Dashboard</h1>

    <div class="filters">
      <button @click="setFilter('under21')">Under 21</button>
      <button @click="setFilter('over21')">Over 21</button>
      <button @click="setFilter('all')">All</button>
    </div>

    <button v-on:click="showForm = !showForm" class="add-student-btn">
      {{ !showForm ? "Add student" : "Close form" }}
    </button>

    <transition name="fade">
      <AddStudentForm
        v-if="showForm"
        @add-student="addStudent"
      />
    </transition>

    <StudentList
      :students="filteredStudents"
      @remove-student="removeStudent"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import StudentList from '../components/StudentList.vue'
import AddStudentForm from '../components/AddStudentForm.vue'
import { students } from '@/store/studentsStore'

const route = useRoute()
const router = useRouter()
const showForm = ref(false)

const filter = computed(() => {
  const f = route.params.filter
  if (f === 'under21') return 'under21'
  if (f === 'over21') return 'over21'
  return 'all'
})

const filteredStudents = computed(() => {
  if (filter.value === 'under21') {
    return students.value.filter(s => s.age < 21)
  }
  if (filter.value === 'over21') {
    return students.value.filter(s => s.age >= 21)
  }
  return students.value
})

const setFilter = (value) => {
  if (value === 'all') {
    router.replace('/students')
  } else {
    router.replace(`/students/${value}`)
  }
}

const addStudent = (student) => {
  students.value.push({ id: Date.now(), ...student })
  showForm.value = false
}

const removeStudent = (id) => {
  students.value = students.value.filter(s => s.id !== id)
}
</script>

<style scoped>
.app {
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
  font-family: 'Inter', sans-serif;
  background: #f9f9fb;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.filters {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.filters button {
  background: #e5e7eb;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  border: none;
  transition: .3s;
}
.filters button:hover {
  background: #d1d5db;
}
</style>
