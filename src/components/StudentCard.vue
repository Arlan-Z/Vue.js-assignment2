<template>
  <div class="card">
    <div class="info">
      <p class="student-name">
        <strong>{{ student.name }}</strong>
      </p>

      <p class="student-age">
        Age: {{ student.age }}
      </p>
    </div>
    <button @click="$emit('remove', student.id)" class="remove-btn">✖</button>
  </div>
</template>

<script setup>
defineProps({
  student: Object
})
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 14px 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.02);
}

.remove-btn {
  background: none;
  border: none;
  color: #ef4444;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s;
}
.remove-btn:hover {
  color: #b91c1c;
}
</style>
