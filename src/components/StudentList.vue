<template>
  <div class="list cards">
    <StudentCard v-for="student in students" :student="student" @remove="remove"/>
  </div>
</template>

<script setup>
import StudentCard from './StudentCard.vue'

defineProps({
  students: Array
})

const emit = defineEmits(['remove-student'])

const remove = (id) => emit('remove-student', id)
</script>

<style scoped>
.list {
  margin-top: 30px;
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
