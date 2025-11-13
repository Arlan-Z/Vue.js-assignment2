<template>
  <div class="app">
    <h1>🎓 Student Dashboard</h1>

    <transition name="fade">
      <AddStudentForm
        v-if="showForm"
        @add-student="addStudent"
      />
    </transition>

    <StudentList
      :students="students"
      @remove-student="removeStudent"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StudentList from '../components/StudentList.vue'
import AddStudentForm from '../components/AddStudentForm.vue'

const students = ref([
  { id: 1, name: 'Alice Johnson', age: 21 },
  { id: 2, name: 'Michael Smith', age: 22 },
])

const showForm = ref(false)

const toggleForm = () => (showForm.value = !showForm.value)

const addStudent = (student) => {
  students.value.push({ id: Date.now(), ...student })
  showForm.value = false
}

const removeStudent = (id) => {
  students.value = students.value.filter((s) => s.id !== id)
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

h1 {
  color: #333;
  margin-bottom: 20px;
}

.add-btn {
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  transition: 0.3s;
}
.add-btn:hover {
  background: #3730a3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
