<template>
  <form class="form" @submit.prevent="submitForm">
    <input 
      type="text" 
      placeholder="Name" 
      v-model="name"
      required
    />

    <input 
      type="number" 
      placeholder="Age" 
      v-model.number="age"
      required
      min="1"
    />

    <button type="submit">Add student</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref(null)

const emit = defineEmits(['add-student'])

const submitForm = () => {
  emit('add-student', { name: name.value, age: age.value })
  name.value = ''
  age.value = null
}
</script>

<style scoped>
.form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.07);
}

input {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
}

button {
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

button:hover {
  background: #059669;
}
</style>
