<template>
  <div class="list">
      <!--
        TASK:
        1. Display all students in a list using the StudentCard component to display each student.
        2. Use the transition-group component to animate the list.
        3. Catch the 'remove' event and emit 'remove-student' from this component with the student's id.
    -->
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
